import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconNew from 'material-ui/svg-icons/file/create-new-folder';
import IconDnLoad from 'material-ui/svg-icons/file/file-download';
import IconClean from 'material-ui/svg-icons/action/delete-forever';

import SvgButton from '../material-desktop/SvgButton';
import SclToggle from '../material-desktop/SclToggle';

const propTypes = {
    themesNameList: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    defautThemeInd: React.PropTypes.number.isRequired,
    onThemeSelect: React.PropTypes.func.isRequired,
    onToggleSideBar: React.PropTypes.func.isRequired,
    isSideBarOpen: React.PropTypes.bool.isRequired,
    isThemeInvalid: React.PropTypes.bool.isRequired,
    themeJSON: React.PropTypes.string.isRequired,
    onChangeTheme: React.PropTypes.func.isRequired,
    onThemeEditing: React.PropTypes.func.isRequired,
    onCloneTheme: React.PropTypes.func.isRequired,
    onDnLoadTheme: React.PropTypes.func.isRequired,
    onCleanTheme: React.PropTypes.func.isRequired,
};

const defaultProps = {
    themesNameList: ['BaseLight', 'BaseDark'],
    defautThemeInd: 0,
    onThemeSelect: () => {},
    onToggleSideBar: () => {},
    isSideBarOpen: false,
    onCloneTheme: () => {},
    onDnLoadTheme: () => {},
    onCleanTheme: () => {},
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default class ThemePanel extends React.Component {

    constructor(props) {
        super(props);

        this.menuItems = props.themesNameList.map(
            (val, ind) => (<MenuItem value={ind} key={val} primaryText={val} />),
        );
        this.state = {
            value: props.defautThemeInd,
            isThemeEditing: false,
            isThemeValid: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value }, this.props.onThemeSelect(value));
    }

    render() {
        const styleArea = {
            width: '100%',
            height: '100%',
            outlineColor: this.props.isThemeInvalid ? '#cc5858' : '#26acd8',
        };
        return (
          <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                backgroundColor: this.context.muiTheme.palette.canvasColor,
            }}
          >
            <div
              style={{
                  minWidth: 160,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
              }}
            >
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                iconStyle={{ fill: this.context.muiTheme.palette.textColor }}
                style={{ width: '100%' }}
              >
                {this.menuItems}
              </DropDownMenu>
              <div
                style={{
//                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0 16px',
                }}
              >

                <SvgButton
                  icon={<IconDnLoad />}
                  tooltip="Download Theme"
                  tooltipPosition="top-right"
                  width={48}
                  onTouchTap={this.props.onDnLoadTheme}
                />
                <SvgButton
                  icon={<IconNew />}
                  tooltip="this option is in development..."
                  tooltipPosition="top-right"
                  width={48}
                  onTouchTap={this.props.onCloneTheme}
                />
                <SvgButton
                  icon={<IconClean />}
                  tooltip="this option is in development..."
                  tooltipPosition="top-right"
                  width={48}
                  onTouchTap={this.props.onCleanTheme}
                />

              </div>
            </div>
            <div style={{ width: 200, minWidth: 150, flexGrow: 1, padding: 16 }} >
              <textarea
                style={styleArea}
                value={this.props.themeJSON}
                onChange={this.props.onChangeTheme}
                onFocus={this.props.onThemeEditing(true)}
                onBlur={this.props.onThemeEditing(false)}
              />

            </div>
            <div style={{ width: 200, paddingTop: 16 }} >
              <SclToggle
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

ThemePanel.propTypes = propTypes;
ThemePanel.defaultProps = defaultProps;
ThemePanel.contextTypes = contextTypes;
