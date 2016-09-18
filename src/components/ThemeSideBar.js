import React from 'react';
import Paper from 'material-ui/Paper';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';


import { CSS_CLASS } from '../';
import ThemePropBlock from './ThemePropBlock';

const BAR_WIDTH = 400;

const propTypes = {
    open: React.PropTypes.bool.isRequired,
    themeName: React.PropTypes.string.isRequired,
    theme: React.PropTypes.object.isRequired,
    muiTheme: React.PropTypes.object.isRequired,
    fullTheme: React.PropTypes.func.isRequired,
    collapseList: React.PropTypes.func.isRequired,
    shouldComponentUpdate: React.PropTypes.bool.isRequired,
    shouldShowData: React.PropTypes.bool.isRequired,
};

export default class ThemeSideBar extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            isFullSet: props.fullTheme(),
        }*/
//        console.log('ThemeSideBar constructor');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.shouldComponentUpdate;
    }

    renderContent() {
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
                <div style={{paddingLeft: 3, paddingBottom: 6}}>
                    <Paper>
                        <CardTitle
                          subtitle={`${this.props.themeName} properties`}
                        />
                        <CardText style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                       }}>
                            <div>Theme Settings</div>
                            <div>
                                <Toggle
                                  label=""
                                  labelPosition="right"
                                  labelStyle={this.toggleHeadStyle}
                                  toggled={this.props.fullTheme()}
                                  onToggle={() => this.props.fullTheme(!this.props.fullTheme())}
                                 />
                            </div>
                            <div>Full Settings</div>
                        </CardText>
                    </Paper>
                </div>
                {this.props.shouldShowData ?
                    themesList(this.props.fullTheme() ? this.props.muiTheme : this.props.theme, this.props)
                 : null}
            </div>
        );
    }

    render() {
//        console.log('ThemeSideBar Render');
        const barWidth = this.props.open ? BAR_WIDTH : 0;
        return (
            <div
              className={`${CSS_CLASS}-theme_sidebar`}
              style={{ width: '100%', height: '100%' }}
            >
               { this.props.open ? this.renderContent() : null }
            </div>
        );
    }

}

ThemeSideBar.propTypes = propTypes;

ThemeSideBar.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function forTable(tableTame, objListFunc, themeInd) {
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

    /*
    const collapseList = this.props.open();
    collapseList[this.props.settingsName] = !this.state.isOpen;
    this.props.open(collapseList);
    this.setState({isOpen : !this.state.isOpen})*/
}

function themesList(themeObj, props) {
    const themePropTable = (tableName, table) => (
        <ThemePropBlock
            key={tableName}
            settingsObj={table}
            settingsName={tableName}
            open={forTable(tableName, props.collapseList)}
            override={forTable(tableName, props.themesOverrideList)}
            onThemeTableOverride={onThemeTableOverride(tableName)}
        />
    ); /* open={props.collapseList} */

    const onThemeTableOverride = (tableName) => {
        return (propName, value) => {
            const overTheme = {};
            if (tableName === 'miscellaneous') {
                overTheme[propName] = value;
                props.onThemeOverride(overTheme);
                return;
            }
            overTheme[tableName] = {};
            overTheme[tableName][propName] = value;
//            console.log(overTheme);
            props.onThemeOverride(overTheme);
        }
    }

    const keyList = Object.keys(themeObj);

    let strList = {};
    keyList.forEach((val, ind) => {
        if (typeof(themeObj[val]) === 'string'/* || typeof(themeObj[val]) === 'function'*/) {
            strList[val] = themeObj[val];
        }
    });

    const strListNode = themePropTable('miscellaneous', strList);
          /*
                        <ThemePropTable
                            key="misc"
                            settingsObj={strList}
                            settingsName="miscellaneous"
                            open={props.collapseList}
                            openThis={forTable('palette', props.collapseList)}
                            override={props.themesOverrideList}
                        />
*/
    const paletteList = themeObj.palette ? themePropTable('palette', themeObj.palette)
            /* <ThemePropTable
                key="palette"
                settingsObj={themeObj.palette}
                settingsName="palette"
                open={props.collapseList}
                openThis={forTable('palette', props.collapseList)}
                override={props.themesOverrideList}
            /> */ : <CardTitle subtitle={'No palette here'} />;

    const tablesListObj = keyList.map((val, ind) => {
        if (typeof(themeObj[val]) === 'object' && val !== 'palette') {
            return ( themePropTable(val, themeObj[val])
                   /*<ThemePropTable
                       key={val}
                       settingsObj={themeObj[val]}
                       settingsName={val}
                       open={props.collapseList}
                       openThis={forTable('palette', props.collapseList)}
                       override={props.themesOverrideList}
                   />*/
            );
        }
    });

    const scrollStyle = {
//      border: '5px #2196F3 solid',
        height: '100%',
        overflowY: 'scroll',
    }
    return (
        <div
            className={`${CSS_CLASS}-theme_sidebar-tables`}
            style={{

                height: 100,
                flexGrow: 1,
                flexShrink: 1,
//                overflowY: 'scroll',
            }}
        >
            <div
              className={`${CSS_CLASS}-theme_sidebar-tables-scroll`}
              style={scrollStyle}
            >
               <div style={{
                        paddingLeft: 3,
                        paddingRight: 12,

                    }}
                >
                   <div style={{backgroundColor: 'rgba(128, 128, 128, 0.04)',}}>
                        {paletteList}
                        {tablesListObj}
                        {strListNode}
                        <div style={{height: 16}}/>
                   </div>
               </div>
            </div>
        </div>
    );
}
