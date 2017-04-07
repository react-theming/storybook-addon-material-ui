import React from 'react';

import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';
// import Chip from 'material-ui/Chip';
// import Toggle from 'material-ui/Toggle';
import SclToggle from '../material-desktop/SclToggle';
import SclAvatar from '../material-desktop/SclAvatar';

import { CSS_CLASS } from '../';
import ThemePropItem from './ThemePropItem';
import ThemePropItemInput from './ThemePropItemInput';


const propTypes = {
    settingsObj: React.PropTypes.object.isRequired,
    settingsName: React.PropTypes.string.isRequired,
    open: React.PropTypes.func.isRequired,
    onThemeTableOverride: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemePropBlock extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = {
            toolCollapsedList: {},
            newPropNameVal: '',
            newPropItemVal: '',
            value: ''
        };
        this.needComponentUpdate = false;
        this.valueHandler = this.valueHandler.bind(this);
        this.onToolCollapse = this.onToolCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.renderProp = this.renderProp.bind(this);
        this.renderColl = this.renderColl.bind(this);


        this.renderPropItemInput = this.renderPropItemInput.bind(this);
        this.valueUserInputHandler = this.valueUserInputHandler.bind(this);
    }

    shouldComponentUpdate() {
        const f = this.needComponentUpdate;
        this.needComponentUpdate = false;
        return f;
    }

    onToolCollapse(val) {
        return (isCol) => {
            const { toolCollapsedList } = this.state;
            toolCollapsedList[val] = isCol;
            this.needComponentUpdate = true;
            this.setState({ toolCollapsedList });
        };
    }

    onSelect(sel) {
        const select = {
            selectedTable: this.props.settingsName,
            selectedProp: '',
            selectedVal: '',
        };
        const fullSelect = Object.assign(select, sel);
        this.props.onSelect(fullSelect);
    }

    valueHandler(propName) {
        return (event) => {
            this.needComponentUpdate = true;
            this.props.onThemeTableOverride(propName, event.target.value);
        };
    }


    valueUserInputHandler(event) {

        // this.setState({
        //   // value: event.target.value  [Error]: get cannot read target of undefined
        // })
    }

    renderProp(val, ind, isOpen, isHeader) {
        return (
          <div
            key={val}
            style={{
//                minHeight: isOpen ? 32 + (isHeader ? 12 : 0) : 0,
//                transition: 'all 200ms linear 0ms',
            }}
          >
            {isOpen ? <ThemePropItem
              val={val}
              ind={ind}
              settingsObj={this.props.settingsObj}
              valueHandler={this.valueHandler}
              isCollapsed={this.state.toolCollapsedList[val]}
              onCollapsed={this.onToolCollapse(val)}
              isOpen={isOpen || false}
              isHeader={isHeader || false}
              onSelect={this.onSelect}
            /> : null}

          </div>
        );
    }

    renderPropItemInput() {
      return (
        <div
          style={{
            minHeight: 32,
            transition: 'all 200ms linear 0ms'}} >
          <ThemePropItemInput
          // val={val}
          // ind={ind}
          settingsObj={this.props.settingsObj}
          valueUserInputHandler={this.valueUserInputHandler}
          // onCollapsed={this.onToolCollapse(val)}
            />
        </div>
      )
    }

    renderColl() {
        const settingsObj = this.props.settingsObj;
        const keyList = Object.keys(settingsObj);
        const rowList = keyList.map((val, ind) => (this.renderProp(val, ind, this.props.open())));
        return (
          <div>
            {this.renderProp(`${this.props.settingsName}-header`, 0, this.props.open(), true)}
            {rowList}
          </div>);
    }

    render() {
        const { settingsName, open } = this.props;
        const onSelect = this.onSelect;
        const openThis = (f) => {
            if (typeof (f) === 'undefined') return open();
            this.needComponentUpdate = true;
            open(f);
            return null;
        };
        return (
          <Paper
            style={{
                paddingLeft: 16,
                paddingRight: 4,
                paddingTop: 8,
                paddingBottom: 8,
                marginTop: 8,
            }}
          >
            <BlockHeader {...{ settingsName, openThis, onSelect }} />
            <div style={{ /* height: 16*/}} />

            {this.renderColl()}
            {this.renderPropItemInput()}
          </Paper>
        );
    }
}

ThemePropBlock.propTypes = propTypes;
ThemePropBlock.contextTypes = contextTypes;

function BlockHeader(props, context) {
    const toggleHeadStyle = {
        color: context.muiTheme.palette.primary1Color,
        fontSize: context.muiTheme.flatButton.fontSize,
    };
    const toggleOpen = () => {
        props.openThis(!props.openThis());
    };
    return (
      <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
      >
        <SclAvatar
          onTouchTap={props.onSelect}
          text={props.settingsName}
        />
        {/* <Chip onTouchTap={copyToClipboard(props.settingsName)} >

            <Avatar size={18}>{props.settingsName[0]}</Avatar>
            {props.settingsName}
          </Chip>*/}
        <div>
          <SclToggle
            label=""
            labelPosition="right"
            labelStyle={toggleHeadStyle}
            toggled={props.openThis() || false}
            onToggle={toggleOpen}
          />
        </div>
      </div>
    );
}

BlockHeader.contextTypes = contextTypes;
BlockHeader.propTypes = {
    openThis: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    settingsName: React.PropTypes.string.isRequired,
};