import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import SclToggle from '../material-desktop/SclToggle';
import SclAvatar from '../material-desktop/SclAvatar';

import { CSS_CLASS } from '../';
import ThemePropItem from './ThemePropItem';


const propTypes = {
    settingsObj: PropTypes.object.isRequired,
    settingsName: PropTypes.string.isRequired,
    open: PropTypes.func.isRequired,
    onThemeTableOverride: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const contextTypes = {
    muiTheme: PropTypes.object.isRequired,
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
        this.onSelect = this.onSelect.bind(this);
        this.renderProp = this.renderProp.bind(this);
        this.renderColl = this.renderColl.bind(this);
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

    renderProp(val, ind, isOpen, isHeader) {
        return (
          <div key={val}>
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
    openThis: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    settingsName: PropTypes.string.isRequired,
};
