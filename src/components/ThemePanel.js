import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import SvgLeft from 'material-ui/svg-icons/navigation/chevron-left.js';
import SvgRight from 'material-ui/svg-icons/navigation/chevron-right.js';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import Toggle from 'material-ui/Toggle';

import injectTapEventPlugin from 'react-tap-event-plugin';
function inject() {
    try {
        injectTapEventPlugin();
    } catch (err) {
        console.warn(err);
    }
}
inject();


const propTypes = {
    themesNameList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    defautThemeInd: React.PropTypes.number.isRequired,
    onThemeSelect: React.PropTypes.func.isRequired,
    onToggleSideBar: React.PropTypes.func.isRequired,
    isSideBarOpen: React.PropTypes.bool.isRequired,
    themeJSON: React.PropTypes.string,
    onChangeTheme: React.PropTypes.func.isRequired,
}

const defaultProps = {
    themesNameList: ['BaseLight', 'BaseDark'],
    defautThemeInd: 0,
    onThemeSelect: () => {},
    onToggleSideBar: () => {},
    isSideBarOpen: false,
}

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemeToolbar extends React.Component {

    constructor(props) {
        super(props);

        this.menuItems = props.themesNameList.map(
            (val, ind) => (<MenuItem value={ind} key={ind} primaryText={val} />)
        );
        this.state = {
            value: props.defautThemeInd,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value }, this.props.onThemeSelect(value));
    }

    render() {
        return (
            <div
               style={{
                    width: '100%',
//                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: this.context.muiTheme.palette.canvasColor,
                }}
            >
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    underlineStyle={{ /*border: 'solid 2px black'*/ }}
                    iconStyle={{ fill: this.context.muiTheme.palette.textColor }}
                >
                    {this.menuItems}
                </DropDownMenu>
                <div style={{width: 200, flexGrow: 1, padding: 16 }}>
                    <textarea
                       style={{width: '100%', height: '100%'}}
                       value={this.props.themeJSON}
                       onChange={this.props.onChangeTheme}
                    />

                </div>
                <div style={{width: 200, padding: 16 }}>
                   <Toggle
                    label="Show Theme Editor"
                    labelPosition="left"
                    toggled={this.props.isSideBarOpen}
                    onToggle={() => this.props.onToggleSideBar(!this.props.isSideBarOpen)}

                     />
                 </div>

            </div>
        );
    }
}

ThemeToolbar.propTypes = propTypes;
ThemeToolbar.defaultProps = defaultProps;
ThemeToolbar.contextTypes = contextTypes;

/*
    todo: snackbar буфер (вкл/откл), таблица / таблица.свойство = значение

*/
