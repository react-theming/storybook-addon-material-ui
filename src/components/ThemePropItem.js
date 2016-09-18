import React from 'react';
import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import { CSS_CLASS } from '../';
import MaterialColorPicker from 'react-material-color-picker';

const propTypes = {
    val: React.PropTypes.string.isRequired,
    ind: React.PropTypes.number.isRequired,
    settingsObj: React.PropTypes.object.isRequired,
    valueHandler: React.PropTypes.func.isRequired,
    isCollapsed: React.PropTypes.bool.isRequired,
    onCollapsed: React.PropTypes.func.isRequired,
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

    onToolTogle() {
        this.props.onCollapsed(!this.props.isCollapsed);
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
        const val = this.props.val;
        const shouldCollapsed = (nextProps.isCollapsed !== this.props.isCollapsed);
        const shouldOpen = (nextProps.isOpen !== this.props.isOpen);
        const shouldsettingsObj = (nextProps.settingsObj[val] !== this.props.settingsObj[val]);
        const shouldUpdate = (shouldCollapsed || shouldOpen || shouldsettingsObj);
        if (shouldUpdate) {
            console.log(`shouldUpdate: ${val} ${shouldCollapsed} ${shouldOpen} ${shouldsettingsObj}`);
        }
        return shouldUpdate;
    }


    renderProp(isNotHeader) {
        const { palette } = this.context.muiTheme;
        const { ind, val, settingsObj, valueHandler, isCollapsed, isOpen } = this.props;
        const onToolTogle = this.onToolTogle;
        const styleHR = { borderBottom: `solid ${palette.borderColor} 1px` };
        return (
            <div>
                <PropItem {...{ ind, val, settingsObj, valueHandler, isNotHeader, onToolTogle, isOpen }} />
                <PropToolPicker
                  {...{ isCollapsed, onToolTogle }}
                  settingsObj={settingsObj[val]}
                  valueHandler={valueHandler(val)}
                />
                <div style={{ height: isOpen ? 4 : 0, overflow: 'hidden' }}>
                    <div style={styleHR} />
                </div>
            </div>
        );
    }

    render() {
//        console.log(`render ${this.props.val}`);
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
    const { settingsObj, val, ind, valueHandler, isOpen, isNotHeader } = props;
    return (
        <div
          className={`${CSS_CLASS}-prop-item`}
          style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              paddingRight: 4,
//                paddingTop: 8,
              fontSize: 12,
              height: isOpen ? 38 : 0,
              transition: 'height 400ms ease 0ms',
              overflow: 'hidden',
              color: isNotHeader ? '' : palette.secondaryTextColor,
          }}
        >
            <PropHeader
              {...{ val, ind, isNotHeader }}
            />
            <div
              className={`${CSS_CLASS}-prop-value`}
              style={{
//                    minWidth: 135,
//                    maxWidth: 250,
                  width: 'auto',
//                    paddingLeft: 16,
                  flexShrink: 1,
                  flexGrow: 1,
//                    backgroundColor: '#bdcdd9',
                  display: 'flex',
                  justifyContent: 'space-between', //'flex-end',
              }}
            >
                <PropInput
                  valueHandler={valueHandler(val)}
                  settingsObj={settingsObj[val]}
                  isNotHeader={isNotHeader}
                />
                <PropTool
                  color={settingsObj[val]}
                  onTool={props.onToolTogle}
                  isNotHeader={isNotHeader}
                />
            </div>
        </div>
    );
}

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
//                    backgroundColor: '#bdd9c9',
          }}
        >
        <div style={{/* maxWidth: 40, minWidth: 20*/}} >
            {isNotHeader ? ind + 1 : '#'}
        </div>
        <div
          style={{
              marginLeft: 16,
              marginRight: 16,
//                marginBottom: 4,
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

PropHeader.contextTypes = contextTypes;

function PropInput(props, context) {
    const { palette } = context.muiTheme;
    const { valueHandler, settingsObj, isNotHeader } = props;
    const isInt = (settingsObj === parseInt(settingsObj));
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
//              maxWidth: 130,
              fontStyle: 'italic',
              padding: 2,
              backgroundColor: palette.canvasColor,
              color: palette.textColor,
              ...strStyle,
          }}
        /> : <div
          style={{
              border: 'none',
              minWidth: 162,
              padding: 2,
              ...strStyle,
          }}
        > Prop Value </div>
    );
}

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

PropTool.contextTypes = contextTypes;


function PropToolPicker(props, context) {
    const { settingsObj, valueHandler, onToolTogle } = props;
//    const initColor = (parseInt(settingsObj) === settingsObj) ? '' : settingsObj;
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

PropToolPicker.contextTypes = contextTypes;


function PropToolPickerFull(props, context) {
    const { settingsObj, valueHandler, onToolTogle } = props;
    const initColor = (parseInt(settingsObj) === settingsObj) ? '' : settingsObj;
//    const initColor = `${settingsObj} `;
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
             tabItemContainerStyle={{ height: 24 /* display: 'flex',fontSize: 8*/ }}
           >
            <Tab label="Color"
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
              onActive={null/* handleActive*/}
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

PropToolPickerFull.contextTypes = contextTypes;
