import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import SclToggle from '../material-desktop/SclToggle';
import SvgButton from '../material-desktop/SvgButton';
import IconCopy from 'material-ui/svg-icons/content/content-copy';
import IconSwch from 'material-ui/svg-icons/image/switch-camera';


import { CSS_CLASS } from '../';
import ThemePropBlock from './ThemePropBlock';
import { copyToClipboardThis } from '../Utils';

const BAR_WIDTH = 400;

const propTypes = {
    open: PropTypes.bool.isRequired,
    themeName: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired,
    fullTheme: PropTypes.func.isRequired,
    collapseList: PropTypes.func.isRequired,
    shouldComponentUpdate: PropTypes.bool.isRequired,
    shouldShowData: PropTypes.bool.isRequired,
};

export default class ThemeSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTable: '',
            selectedProp: '',
            selectedVal: '',
            isSelectedStyleObj: true,
        };

        this.clipString = this.clipString.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onSwitchStyleObj = this.onSwitchStyleObj.bind(this);
        this.onCopy = this.onCopy.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // fixme shouldComponentUpdate - remove
        return nextProps.shouldComponentUpdate;
    }

    onSelect(sel) {
        this.setState(sel);
    }

    onSwitchStyleObj() {
        const isObj = this.state.isSelectedStyleObj;
        this.setState({ isSelectedStyleObj: !isObj });
    }

    onCopy() {
        const text = this.clipString();
        copyToClipboardThis(text);
    }

    clipString() {
        const table = this.state.selectedTable;
        const prop = this.state.selectedProp;
        const val = this.state.selectedVal;
        const isObj = this.state.isSelectedStyleObj;

        const strTbl = table;
        const strVal = isObj ? `${prop}: ${val},` : `${table}.${prop} = ${val};`;
        return prop ? strVal : strTbl;
    }

    renderContent() {
        const { palette } = this.context.muiTheme;
        const styleHR = { borderBottom: `solid ${palette.borderColor} 1px` };
        const blockStyle = {
            width: 21,
            height: 21,
            marginLeft: 4,
            border: `solid 1px ${palette.borderColor}`,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            cursor: 'pointer',
        };
        return (
          <div
            className={`${CSS_CLASS}-theme_sidebar-content`}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',

            }}
          >
            <div style={{ paddingLeft: 3, paddingBottom: 6 }} >
              <Paper style={{ paddingLeft: 16, paddingRight: 8, paddingTop: 8 }} >
                <h3
                  style={{
                      margin: 0,
                      marginBottom: 4,
                      color: palette.secondaryTextColor,
                      fontSize: 16,
                  }}
                >
                  {`${this.props.themeName} properties`}
                </h3>
                <div style={styleHR} />
                <div
                  style={{
                      marginTop: 8,
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: 14,
                      color: palette.secondaryTextColor,
                  }}
                >
                  <div
                    style={{
                        color: !this.props.fullTheme() ? palette.textColor : '',
                    }}
                  >
                      Theme Settings
                  </div>
                  <SclToggle
                    label=""
                    labelPosition="right"
                    labelStyle={this.toggleHeadStyle}
                    toggled={this.props.fullTheme()}
                    onToggle={() => this.props.fullTheme(!this.props.fullTheme())}
                  />
                  <div
                    style={{
                        color: this.props.fullTheme() ? palette.textColor : '',
                    }}
                  >Full Settings</div>
                </div>
                <div
                  style={{
                      paddingBottom: 8,
                      paddingRight: 8,
                  }}
                >
                  <div
                    style={{
                        marginTop: 8,
                  //                      paddingBottom: 8,
//                        padding: 2,
                        width: '100%',
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px grey solid',
                        borderColor: palette.borderColor,
                        backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    }}
                  >
                    <input
                      type="text"
                      onChange={null}
                      value={this.clipString()}
                      title={'click to copy to clipboard'}
                      disabled
                      style={{
                          width: '100%',
                          padding: 2,
                          margin: 0,
                          border: 'none',
                          backgroundColor: 'rgba(0, 0, 0, 0)',
                          color: palette.secondaryTextColor,
                          cursor: 'text',
                      }}
                    />
                    <SvgButton
                      icon={<IconCopy />}
                      tooltip="Copy to clipboard"
                      width={48}
                      onTouchTap={this.onCopy}
                    />
                    <div style={{ width: 4 }} />
                    <SvgButton
                      icon={<IconSwch />}
                      tooltip="switch style"
                      width={48}
                      onTouchTap={this.onSwitchStyleObj}
                    />
                  </div>
                </div>
              </Paper>
            </div>
            {this.props.shouldShowData ?
                  themesList(
                    this.props.fullTheme() ? this.props.muiTheme : this.props.theme,
                    this.props, this.onSelect,
                  )
               : null}
          </div>
        );
    }

    render() {
//        const barWidth = this.props.open ? BAR_WIDTH : 0; // fixme BAR_WIDTH

        return (
          <div
            className={`${CSS_CLASS}-theme_sidebar`}
            style={{ width: '100%', height: '100%' }}
          >
            {this.props.open ? this.renderContent() : null}
          </div>
        );
    }

}

ThemeSideBar.propTypes = propTypes;

ThemeSideBar.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

function forTable(tableTame, objListFunc) {
    return (val) => {
        const objList = objListFunc();
        const obj = objList[tableTame];
        if (val == undefined) {
            return obj;
        }
        objList[tableTame] = val;
        objListFunc(objList);
        return val;
    };
}

function themesList(themeObj, _props, onSelect) {
    const onThemeTableOverride = (tableName) => {
        return (propName, value) => {
            const overTheme = {};
            if (tableName === 'miscellaneous') {
                overTheme[propName] = value;
                _props.onThemeOverride(overTheme);
                return;
            }
            overTheme[tableName] = {};
            overTheme[tableName][propName] = value;
            _props.onThemeOverride(overTheme);
        };
    };

    const themePropTable = (tableName, table) => (
      <ThemePropBlock
        key={tableName}
        settingsObj={table}
        settingsName={tableName}
        open={forTable(tableName, _props.collapseList)}
        override={forTable(tableName, _props.themesOverrideList)}
        onThemeTableOverride={onThemeTableOverride(tableName)}
        onSelect={onSelect}
      />
    );


    const keyList = Object.keys(themeObj);

    const strList = {};
    keyList.forEach((val) => {
        if (typeof (themeObj[val]) === 'string') {
            strList[val] = themeObj[val];
        }
    });

    const strListNode = themePropTable('miscellaneous', strList);
    const paletteList = themeObj.palette ? themePropTable('palette', themeObj.palette)
             : <div> {'No palette here'} </div>;

    const tablesListObj = keyList.map((val) => {
        if (typeof (themeObj[val]) === 'object' && val !== 'palette') {
            return (themePropTable(val, themeObj[val])
            );
        }
        return null;
    });

    const scrollStyle = {
        height: '100%',
        overflowY: 'scroll',
    };
    return (
      <div
        className={`${CSS_CLASS}-theme_sidebar-tables`}
        style={{

            height: 100,
            flexGrow: 1,
            flexShrink: 1,
        }}
      >
        <div
          className={`${CSS_CLASS}-theme_sidebar-tables-scroll`}
          style={scrollStyle}
        >
          <div
            style={{
                paddingLeft: 3,
                paddingRight: 12,

            }}
          >
            <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.04)' }}>
              {paletteList}
              {tablesListObj}
              {strListNode}
              <div style={{ height: 16 }} />
            </div>
          </div>
        </div>
      </div>
    );
}
