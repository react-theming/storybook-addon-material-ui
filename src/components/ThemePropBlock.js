import React from 'react';

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Toggle from 'material-ui/Toggle';

import { CSS_CLASS } from '../';
import ThemePropItem from './ThemePropItem';
import { copyToClipboard } from '../Utils';

const propTypes = {
    settingsObj: React.PropTypes.object.isRequired,
    settingsName: React.PropTypes.string.isRequired,
    open: React.PropTypes.func.isRequired,
//    override: React.PropTypes.func.isRequired,
    onThemeTableOverride: React.PropTypes.func.isRequired,
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemePropBlock extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = {
            toolCollapsedList: {},
        };
        this.needComponentUpdate = false;
        this.valueHandler = this.valueHandler.bind(this);
        this.onToolCollapse = this.onToolCollapse.bind(this);
        this.renderProp = this.renderProp.bind(this);
        this.renderColl = this.renderColl.bind(this);
        this.renderExp = this.renderExp.bind(this);
    }

    valueHandler(propName) {
        return (event) => {
            this.needComponentUpdate = true;
            this.props.onThemeTableOverride(propName, event.target.value);
        };
    }

    onToolCollapse(val) {
        return (isCol) => {
            const { toolCollapsedList } = this.state;
            toolCollapsedList[val] = isCol;
            this.needComponentUpdate = true;
            this.setState({ toolCollapsedList });
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        const f = this.needComponentUpdate;
        this.needComponentUpdate = false;
        return f;
    }

    renderProp(val, ind, isOpen, isHeader) {
        return (
            <div
              key={val}
              style={{
                  minHeight: isOpen ? 32 : 0,
                  transition: 'min-height 200ms linear 0ms',
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
               /> : null}

            </div>
        );
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

    renderExp() { /*
        const settingsObj = this.props.settingsObj;
        const keyList = Object.keys(settingsObj);
        const rowList = keyList.map((val, ind) => ( this.renderProp(val, ind, true) ));
        return (<div>{rowList}</div>);*/
    }

    render() {
//        console.warn('render ThemePropBlock')
        const { settingsName, open } = this.props;
        const openThis = (f) => {
            if (typeof (f) === 'undefined') return open();
            this.needComponentUpdate = true;
            open(f);
        };
        return (
            <Paper
              style={{
                  paddingLeft: 16,
                  paddingRight: 4,
                  paddingTop: 8,
                  paddingBottom: 16,
                  marginTop: 8,
              }}
            >
                <BlockHeader {...{ settingsName, openThis }} />
                <div style={{ height: 16 }} />

                {/* this.props.open() ? this.renderExp() : */ this.renderColl() }

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
    const toggleOpen = (e) => {
        props.openThis(!props.openThis());
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div>
                <Chip onTouchTap={copyToClipboard(props.settingsName)} >

                  <Avatar size={18}>{props.settingsName[0]}</Avatar>
                  {props.settingsName}
                </Chip>

            </div>
            <div>
                 <Toggle
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

