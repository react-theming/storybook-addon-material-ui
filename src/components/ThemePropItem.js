import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MaterialColorPicker from 'react-material-color-picker';

import { CSS_CLASS } from '../';

const propTypes = {
    val: React.PropTypes.string.isRequired,
    ind: React.PropTypes.number.isRequired,
    settingsObj: React.PropTypes.object.isRequired,
    valueHandler: React.PropTypes.func.isRequired,
    isCollapsed: React.PropTypes.bool.isRequired,
    onCollapsed: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    isHeader: React.PropTypes.bool.isRequired,
};

const defaultProps = {
    val: 'val',
    ind: 7,
    settingsObj: {},
    valueHandler: () => {},
    isCollapsed: true,
    isOpen: true,
    isHeader: true,
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemePropItem extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.onToolTogle = this.onToolTogle.bind(this);
        this.renderProp = this.renderProp.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return true;
// future: shouldComponentUpdate
//        const val = this.props.val;
//        const shouldCollapsed = (nextProps.isCollapsed !== this.props.isCollapsed);
//        const shouldOpen = (nextProps.isOpen !== this.props.isOpen);
//        const shouldsettingsObj = (nextProps.settingsObj[val] !== this.props.settingsObj[val]);
//        const shouldUpdate = (shouldCollapsed || shouldOpen || shouldsettingsObj);
//        if (shouldUpdate) {
//            console.log(
//      `shouldUpdate: ${val} ${shouldCollapsed} ${shouldOpen} ${shouldsettingsObj}`
//      );
//        }
//        return shouldUpdate;
    }

    onToolTogle() {
        this.props.onCollapsed(!this.props.isCollapsed);
    }

    renderProp(isNotHeader) {
        const { palette } = this.context.muiTheme;
        const { ind, val, valueHandler, isCollapsed, isOpen, onSelect } = this.props;
        const settingsObj = this.props.settingsObj || { isNotHeader };
        const onToolTogle = this.onToolTogle;
        const styleHR = { borderBottom: `solid ${palette.borderColor} 1px` };
        return (
          <div>
            <PropItem
              {...{
                  ind, val, settingsObj, valueHandler, isNotHeader, onToolTogle, isOpen, onSelect,
              }}
            />
            <PropToolPicker
              {...{ isCollapsed, onToolTogle }}
              settingsObj={isNotHeader ? settingsObj[val] : ''}
              valueHandler={valueHandler(val)}
            />
            <div style={{ height: isOpen ? 1 : 0, overflow: 'hidden' }}>
              <div style={styleHR} />
            </div>
          </div>
        );
    }

    render() {
        return (
          <div>
            {this.renderProp(!this.props.isHeader)}

          </div>
        );
    }
}

ThemePropItem.propTypes = propTypes;
ThemePropItem.defaultProps = defaultProps;
ThemePropItem.contextTypes = contextTypes;

function PropItem(props, context) {
    const { palette } = context.muiTheme;
    const { settingsObj, val, ind, valueHandler, /* isOpen,*/ isNotHeader } = props;
    const color = typeof (settingsObj[val]) === 'string' ? settingsObj[val] : '';
    const onSelect = () => {
        const select = {
            selectedProp: val,
            selectedVal: `'${settingsObj[val]}'`,
        };
        props.onSelect(select);
    };
    return (
      <div
        className={`${CSS_CLASS}-prop-item`}
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            paddingRight: 4,
            paddingTop: isNotHeader ? 4 : 16,
            fontSize: 12,
//            height: isOpen ? 24 : 0,
            transition: 'all 100ms ease 0ms',
            overflow: 'hidden',
            color: isNotHeader ? '' : palette.secondaryTextColor,
        }}
        onTouchTap={onSelect}
      >
        <PropHeader
          {...{ val, ind, isNotHeader }}
        />
        <div
          className={`${CSS_CLASS}-prop-value`}
          style={{
              width: 'auto',
              flexShrink: 1,
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
          }}
        >
          <PropInput
            valueHandler={valueHandler(val) || null}
            settingsObj={settingsObj[val] || ''}
            isNotHeader={isNotHeader}
          />

          <PropTool
            color={color}
            onTool={props.onToolTogle}
            isNotHeader={isNotHeader}
          />
        </div>
      </div>
    );
}

PropItem.propTypes = {
    settingsObj: React.PropTypes.shape().isRequired,
    val: React.PropTypes.string.isRequired,
    ind: React.PropTypes.number.isRequired,
    onToolTogle: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    valueHandler: React.PropTypes.func.isRequired,
//    isOpen: React.PropTypes.bool.isRequired,
    isNotHeader: React.PropTypes.bool.isRequired,
};
PropItem.contextTypes = contextTypes;

function PropHeader(props, context) {
    const { ind, val, isNotHeader } = props;
    return (
      <div
        className={`${CSS_CLASS}-prop-header`}
        title={val}
        style={{
            display: 'flex',
            justifyContent: 'flex-start',
            overflowX: 'hidden',
            flexShrink: 2,
            flexGrow: 10,
            width: 90,
            // background: 'black' // to be deleted
        }}
      >
        <div style={{ color: context.muiTheme.palette.secondaryTextColor }} >
          {isNotHeader ? ind + 1 : '#'}
        </div>
        <div
          style={{
              marginLeft: 16,
              marginRight: 16,
              minWidth: 100,
              textAlign: 'left',
              overflowX: 'hidden',
          }}
        >
          <div>{isNotHeader ? val : 'Prop Name'}</div>
        </div>
      </div>
    );
}
PropHeader.propTypes = {
    val: React.PropTypes.string.isRequired,
    ind: React.PropTypes.number.isRequired,
    isNotHeader: React.PropTypes.bool.isRequired,
};
PropHeader.contextTypes = contextTypes;

function PropInput(props, context) {
    const { palette } = context.muiTheme;
    const { valueHandler, settingsObj, isNotHeader } = props;
    const isInt = (settingsObj === parseInt(settingsObj, 10));
    const strStyle = {
        width: isInt ? 40 : 'auto',
        textAlign: isInt ? 'right' : 'left',
    };
    return (isNotHeader ?
      <input
        type="text"
        onChange={valueHandler}
        value={settingsObj}
        title={settingsObj}
        style={{
            border: 'none',
            fontStyle: 'italic',
            padding: 2,
            backgroundColor: palette.canvasColor,
            color: palette.primary2Color,
            ...strStyle,
        }}
      /> :
      <div
        style={{
            border: 'none',
            minWidth: 162,
            padding: 2,
            ...strStyle,
        }}
      >
        Prop Value
      </div>
    );
}
PropInput.propTypes = {
    settingsObj: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    valueHandler: React.PropTypes.func.isRequired,
    isNotHeader: React.PropTypes.bool.isRequired,
};
PropInput.contextTypes = contextTypes;

function PropTool(props, context) {
    const { palette } = context.muiTheme;
    const { isNotHeader } = props;
    const blockStyle = {
        width: 16,
        height: 16,
        marginLeft: 4,
        border: `solid 1px ${palette.borderColor}`,
        backgroundColor: isNotHeader ? props.color : 'rgba(0, 0, 0, 0)',
        cursor: isNotHeader ? 'pointer' : '',
    };
    const toolProps = {
        style: blockStyle,
        title: isNotHeader ? props.color : 'view',
        onClick: isNotHeader ? props.onTool : null,
    };
    return <div {...toolProps} />;
}
PropTool.propTypes = {
    isNotHeader: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired,
    onTool: React.PropTypes.func.isRequired,
};
PropTool.contextTypes = contextTypes;


function PropToolPicker(props, context) {
    const { settingsObj, valueHandler, onToolTogle } = props;
    const initColor = `${settingsObj}`;
    const style = {
        height: props.isCollapsed ? 0 : 200,
        transition: 'height 300ms ease 0ms',
        overflow: 'hidden',
    };
    const onSubmit = (event) => {
        valueHandler(event);
        onToolTogle();
    };
    // fixme: check onReset
    return (
      <div {...{ style }}>
        <div style={{ border: 'solid 1px grey' }}>
          <MaterialColorPicker
            initColor={initColor}
            onSubmit={onSubmit}
            onSelect={valueHandler}
            onHover={valueHandler}
            onReset={onSubmit}
          />
        </div>
      </div>
    );
}
PropToolPicker.propTypes = {
    settingsObj: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    isCollapsed: React.PropTypes.bool.isRequired,
    valueHandler: React.PropTypes.func.isRequired,
    onToolTogle: React.PropTypes.func.isRequired,
};
PropToolPicker.contextTypes = contextTypes;

// future: we will use when all components be ready
function PropToolPickerFull(props, context) {
    const { settingsObj, valueHandler, onToolTogle } = props;
    const initColor = `${settingsObj}`;
    const style = {
        height: props.isCollapsed ? 0 : 200,
        transition: 'height 300ms ease 0ms',
        overflow: 'hidden',
    };
    const tabStyle = { height: 16, marginTop: -12, fontSize: 12 };
    const onSubmit = (event) => {
        valueHandler(event);
        onToolTogle();
    };
    return (
      <div {...{ style }}>
        <Tabs
          tabItemContainerStyle={{ height: 24 }}
        >
          <Tab
            label="Color"
            style={tabStyle}
          >
            <div style={{ border: 'solid 1px grey' }}>
              <MaterialColorPicker
                initColor={initColor}
                onSubmit={onSubmit}
                onSelect={valueHandler}
                onReset={onSubmit}
              />
            </div>
          </Tab>
          <Tab label="Number" style={tabStyle} >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab
            label="String"
            data-route="/home"
            onActive={null}
            style={tabStyle}
          >
            <div>
              <h2>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
          <Tab label="Palette" style={tabStyle} >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
          <Tab label="Icon" style={tabStyle} >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
              <Slider name="slider0" defaultValue={0.5} />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
}
PropToolPickerFull.propTypes = {
    settingsObj: React.PropTypes.shape().isRequired,
    isCollapsed: React.PropTypes.bool.isRequired,
    valueHandler: React.PropTypes.func.isRequired,
    onToolTogle: React.PropTypes.func.isRequired,
};
PropToolPickerFull.contextTypes = contextTypes;


function PropUserInput(props, context) {
  const { valueHandler, settingsObj, isNotHeader } = props;
  const isInt = (settingsObj === parseInt(settingsObj, 10));
  const strStyle = {
      width: isInt ? 40 : 'auto',
      textAlign: isInt ? 'right' : 'left'
  };
  const inputStyle = {
    border: 'none',
    fontStyle: 'italic',
    placeholder: 'italic',
    padding: 2,
    // backgroundColor: palette.canvasColor,
    // color: palette.primary2Color,
    ...strStyle
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
      <input  
        type="text"
        onChange={valueHandler}
        title={settingsObj}
        placeholder="New Prop Name"
        style={{inputStyle}}
        />
      <input  
        type="text"
        onChange={valueHandler}
        title={settingsObj}
        placeholder="New Prop Value"
        style={{inputStyle}}
        />
      <input  
        type="submit"
        style={{inputStyle}}
        />              
    </div>
  )
}
