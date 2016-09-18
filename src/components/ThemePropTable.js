import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import CloseIcone from 'material-ui/svg-icons/action/check-circle';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

import { CSS_CLASS } from '../';
import MaterialColorPicker from 'react-material-color-picker';

const propTypes = {
    settingsObj: React.PropTypes.object.isRequired,
    settingsName: React.PropTypes.string.isRequired,
    open: React.PropTypes.func.isRequired,
    override: React.PropTypes.func.isRequired,
}

export default class ThemePropTable extends React.Component {
    constructor(props, context) {
        super(props);

        this.cellStyle = {
            margin: 4,
            padding: 4,
            height: 24,
        };
        this.cellIndStyle = {
            margin: 4,
            padding: 4,
            width: 15,
            height: 24,
        };
        this.cellTollStyle = {
            margin: 4,
            padding: 4,
            width: 24,
            height: 24,
        };
        this.cellHeadStyle = {
            margin: 4,
            paddingLeft: 4,
            paddingRight: 16,
            height: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        };
        this.toggleHeadStyle = {
            color: context.muiTheme.palette.primary1Color,
            fontSize: context.muiTheme.flatButton.fontSize,
        };
        /*this.state = {
            isOpen: props.open()[props.settingsName],

        };*/

        this.toggleOpen = this.toggleOpen.bind(this);
        this.inputValue = this.inputValue.bind(this);
        this.renderProp = this.renderProp.bind(this);
    }

    toggleOpen(e) {
        /*const collapseList = this.props.open();
        collapseList[this.props.settingsName] = !this.state.isOpen;
        this.props.open(collapseList);
        this.setState({isOpen : !this.state.isOpen})*/

        this.props.open(!this.props.open());
        this.forceUpdate();
    }

    inputValue(propName) {
        return (event) => {
            this.props.onThemeTableOverride(propName, event.target.value);
            /*let overObj = this.props.override();
            if(overObj == undefined) {
                overObj = {}
            }
            console.log(overObj);
            console.info(`${propName} = ${event.target.value}`)
            overObj[propName] = event.target.value;
            this.props.override(overObj);
            */
        }
    }

    renderProp(val, ind ) {
        return (<PropRow
                  key={val}
                  val={val}
                  ind={ind}
                  settingsObj={this.props.settingsObj}
                  inputValue={this.inputValue}
                  isCollapsed={true}
                />)
    }



    render() {
//        console.log(`${this.props.settingsName} ${this.props.open()}`)
        const settingsObj = this.props.settingsObj;


        const keyList = Object.keys(settingsObj);
        const rowList = keyList.map((val, ind) => ( this.renderProp(val, ind) ));

        return (
            <Paper style={{marginTop: 6, paddingTop: 5, paddingBottom: 5}}>
                <CardText style={{paddingTop: this.props.open() ? 10 : 1, paddingBottom: 1}}>
                   <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                   }}>
                    <div>
                        <Chip onTouchTap={copyToClipboard(this.props.settingsName)} >

                          <Avatar size={18}>{this.props.settingsName[0]}</Avatar>
                          {this.props.settingsName}
                        </Chip>

                    </div>
                    <div>
                         <Toggle
                          label=""
                          labelPosition="right"
                          labelStyle={this.toggleHeadStyle}
                          toggled={this.props.open() || false /* this.state.isOpen*/}
                          onToggle={this.toggleOpen}
                         />
                     </div>

                </div>
                {this.props.open() ? <Table selectable={false} >
                    <TableHeader
                      displaySelectAll={false}
                      adjustForCheckbox={false}
                    >
                       {/* <TableRow>
                           <TableHeaderColumn colSpan="3" style={this.cellStyle} >


                           </TableHeaderColumn>
                       </TableRow>*/}
                       {<TableRow style={{height: 32}}>
                           <TableHeaderColumn style={this.cellIndStyle} > # </TableHeaderColumn>
                           <TableHeaderColumn style={this.cellStyle} > Name </TableHeaderColumn>
                           <TableHeaderColumn style={this.cellStyle} > Value </TableHeaderColumn>
                        </TableRow> }


                    </TableHeader>

                    {
                        <TableBody

                      displayRowCheckbox={false}
                        >

                        {rowList}
                    </TableBody> }
                </Table> : null}
                {/*<div style={{height: 4}}/>
                <Divider />*/}
            </CardText>
        </Paper>
        );
    }

}

ThemePropTable.propTypes = propTypes;

ThemePropTable.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function copyToClipboard(text) {
    return () => {
        const textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        let successful;
        try {
            // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
            successful = document.execCommand('copy');
    //        const res = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            console.log('cant copy to clipboard');
        }
        textElem.remove();
        return successful;
    };
}

class PropRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: props.isCollapsed,
        }

        this.cellStyle = {
            margin: 4,
            padding: 4,
            height: 24,
        };
        this.cellIndStyle = {
            margin: 4,
            padding: 4,
            width: 15,
            height: 24,
        };
        this.cellTollStyle = {
            margin: 4,
            padding: 4,
            width: 24,
            height: 24,
        };
        this.tabStyle = {height: 16, marginTop: -12,fontSize: 12};

        this.onSwitch = this.onSwitch.bind(this);
        this.renderPropCollapse = this.renderPropCollapse.bind(this);
        this.renderPropExpanded = this.renderPropExpanded.bind(this);
        this.renderE = this.renderE.bind(this);
    }

    onSwitch() {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    renderPropCollapse(val, ind) {
        const settingsObj = this.props.settingsObj;
        const context = this.context;
        return (
            <TableRow
               key={val}
               style={{
                    verticalAlign: 'top',
//                    height: this.state.isCollapsed ? 32 : 32,
//                    transition: 'height 200ms linear 0ms',
                }}
            >
                <TableRowColumn style={this.cellIndStyle} >{ind + 1}</TableRowColumn>
                <TableRowColumn style={this.cellStyle}><div title={val}>{val}</div></TableRowColumn>
                <TableRowColumn
                   style={{
                    ...this.cellStyle,
                    overflow: this.state.isCollapsed ? 'hidden' : 'visible'
                    }}
                >
                    {/*this.state.isCollapsed ?*/
                     <input
                      type="text"
                      onChange={this.props.inputValue(val)}
                      value={settingsObj[val]}
                      title={settingsObj[val]}
                      style={{
                          border: 'none',
                          width: '100%',
                          fontStyle: 'italic',
//                          paddingTop: 4,
                          paddingBottom: 4,
//                          marginTop: 4,
                          backgroundColor: context.muiTheme.palette.canvasColor,
                          color: context.muiTheme.palette.textColor,
                      }}
                    /> /*: null*/ }
                    {this.renderE(val, ind)}
                </TableRowColumn>
                <TableRowColumn style={this.cellTollStyle} >
                    <div
                      onTouchTap={this.onSwitch}
                      style={{
                          border: '1px solid grey',
                          width: 16,
                          height: 16,
                          background: settingsObj[val],
                      }}
                    />
                </TableRowColumn>
            </TableRow>

        );
    }

    renderE(val, ind) {
        const settingsObj = this.props.settingsObj;
        const context = this.context;
        return (
            <div style={{
                    height: this.state.isCollapsed ? 2 : 226,
                    transition: 'height 200ms linear 0ms',
                    width: 360,
                    marginLeft: -183,
                    marginTop: 0,
                    position: 'relative',
                    overflow: 'hidden',
                }}
                className={`${CSS_CLASS}-proptable-expand`}
            >
                {
                !this.state.isCollapsed ?
                <Paper
                   style={{
                    height: 208,
                    width: 356,
                    marginTop: 8,
                    backgroundColor: context.muiTheme.palette.canvasColor,
                    border: '1px red solid',
                    borderColor: context.muiTheme.palette.borderColor,
//                    marginLeft: -184,
//                    position: 'relative',
                   }}
                >
                   <div style={{
                            height: 20,
                            padding: 2,
                            backgroundColor: context.muiTheme.palette.primary3Color,
                            color: context.muiTheme.palette.secondaryTextColor,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }} >
                       {/*<div style={{padding: 3,}}>
                           {`${ind+1}`}
                       </div>*/}
                       <div style={{padding: 3, marginLeft: 0}}>
                           <b>{`${val} = ${settingsObj[val]}`}</b>
                       </div>
                       <div id="button">
                           <IconButton

                             style={{padding: 2, height: 24, width: 24}}
                             onTouchTap={this.onSwitch}
                           > {/*tooltip="Collapse"
                             tooltipPosition="top-left"*/}
                              <CloseIcone
                                 color={context.muiTheme.palette.secondaryTextColor}
                                 hoverColor={context.muiTheme.palette.textColor}
                                  viewBox='0 0 32 32'
                              />
                            </IconButton>
                       </div>
                   </div>

                    <Tabs
                       tabItemContainerStyle={{height: 24,/* display: 'flex',fontSize: 8*/}}
                       >
                        <Tab label="Color"
                           style={this.tabStyle}>
                            <MaterialColorPicker
                                initColor={settingsObj[val]}
                                onSubmit={this.props.inputValue(val)}
                            />
                        </Tab>
                        <Tab label="Number" style={this.tabStyle} >
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
                            onActive={null/*handleActive*/}
                            style={this.tabStyle}
                        >
                            <div>
                                <h2>Tab Three</h2>
                                <p>
                                  This is a third example tab.
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Palette" style={this.tabStyle} >
                            <div>
                                <h2>Tab Two</h2>
                                <p>
                                  This is another example tab.
                                </p>
                                <Slider name="slider0" defaultValue={0.5} />
                            </div>
                        </Tab>
                        <Tab label="Icon" style={this.tabStyle} >
                            <div>
                                <h2>Tab Two</h2>
                                <p>
                                  This is another example tab.
                                </p>
                                <Slider name="slider0" defaultValue={0.5} />
                            </div>
                        </Tab>
                    </Tabs>

                </Paper> : null}
            </div>
        )
    }

    renderPropExpanded(val, ind) {
        const settingsObj = this.props.settingsObj;
        return (
                <TableRow
                   style={{ height: '' }}
                >
                    <TableHeaderColumn colSpan="4" style={{padding: 0}}>
                        <div style={{height: 200, backgroundColor: '#ebebeb'}} >
                           <div style={{
                                    height: 20,
                                    backgroundColor: '#bebebe',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }} >
                               <div>
                                   {`${ind+1} ${val} = ${settingsObj[val]}`}
                               </div>
                               <div id="button">
                                   <IconButton
                                     tooltip="Collapse"
                                     tooltipPosition="bottom-left"
                                     style={{padding: 2, height: 24, width: 24}}
                                     onTouchTap={this.onSwitch}
                                   >
                                      <CloseIcone
                                          viewBox='0 0 32 32'
                                      />
                                    </IconButton>
                               </div>
                           </div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic possimus officia, eveniet reiciendis eaque tempora, quae, rerum accusantium ipsam fugiat architecto quos consectetur autem similique? Magni, vero. Nam, consectetur optio.
                        </div>
                    </TableHeaderColumn>
                </TableRow>
        )
    }

    render() {
        return (this.renderPropCollapse(this.props.val, this.props.ind))
//        return (this.state.isCollapsed ?
//                    this.renderPropCollapse(this.props.val, this.props.ind) :
//                    this.renderPropExpanded(this.props.val, this.props.ind)
//               )
    }
}

PropRow.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

