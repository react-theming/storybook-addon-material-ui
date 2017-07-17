import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import IconNew from 'material-ui/svg-icons/file/create-new-folder';
import IconDnLoad from 'material-ui/svg-icons/file/file-download';
import IconClean from 'material-ui/svg-icons/action/delete-forever';

import SvgButton from '../material-desktop/SvgButton';
import SclToggle from '../material-desktop/SclToggle';

const propTypes = {
    themesNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
    defautThemeInd: PropTypes.number.isRequired,
    onThemeSelect: PropTypes.func.isRequired,
    onToggleSideBar: PropTypes.func.isRequired,
    isSideBarOpen: PropTypes.bool.isRequired,
    isThemeInvalid: PropTypes.bool.isRequired,
    themeJSON: PropTypes.string.isRequired,
    onChangeTheme: PropTypes.func.isRequired,
    onThemeEditing: PropTypes.func.isRequired,
    onCloneTheme: PropTypes.func.isRequired,
    onDnLoadTheme: PropTypes.func.isRequired,
    onCleanTheme: PropTypes.func.isRequired,
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
    muiTheme: PropTypes.object.isRequired,
};

export default class ThemePanel extends React.Component {
    constructor(props) {
        super(props);

        this.menuItems = props.themesNameList.map((val, ind) => (
          <MenuItem value={ind} key={val} primaryText={val} />
        ));
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
                  onClick={this.props.onDnLoadTheme}
                />
                <SvgButton
                  icon={<IconNew />}
                  tooltip="this option is in development..."
                  tooltipPosition="top-right"
                  width={48}
                  onClick={this.props.onCloneTheme}
                />
                <SvgButton
                  icon={<IconClean />}
                  tooltip="this option is in development..."
                  tooltipPosition="top-right"
                  width={48}
                  onClick={this.props.onCleanTheme}
                />
              </div>
            </div>
            <div style={{ width: 200, minWidth: 150, flexGrow: 1, padding: 16 }}>
              <textarea
                style={styleArea}
                value={this.props.themeJSON}
                onChange={this.props.onChangeTheme}
                onFocus={this.props.onThemeEditing(true)}
                onBlur={this.props.onThemeEditing(false)}
              />
            </div>
            <div style={{ width: 200, paddingTop: 16 }}>
              <SclToggle
                label="Show Theme Editor"
                labelPosition="left"
                toggled={this.props.isSideBarOpen}
                onToggle={() => this.props.onToggleSideBar(!this.props.isSideBarOpen)}
              />
              <div style={{ height: '100%', maxHeight: 80 }}>
                <Paper style={{ margin: 8, height: '100%', padding: 16, maxHeight: 70, textAlign: 'center' }}>
                  <a
                    href="https://github.com/react-theming/storybook-addon-material-ui#announcement-material-ui-v1-support"
                    target="blank"
                  >
                                Material-UI v1 support
                            </a>
                </Paper>
              </div>
            </div>
          </div>
        );
    }
}

ThemePanel.propTypes = propTypes;
ThemePanel.defaultProps = defaultProps;
ThemePanel.contextTypes = contextTypes;
