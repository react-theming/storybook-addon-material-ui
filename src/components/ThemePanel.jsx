import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import IconNew from '@material-ui/icons/CreateNewFolder';
import IconDnLoad from '@material-ui/icons/FileDownload';
import IconClean from '@material-ui/icons/DeleteForever';

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

// const contextTypes = {
//     muiTheme: PropTypes.object.isRequired,
// };

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

        const theme = JSON.parse(this.props.themeJSON);
        const palette = { theme };
        return (
          <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                backgroundColor: 'white' /* this.context.muiTheme.palette.canvasColor*/,
            }}
          >
            <div
              style={{
                  minWidth: 160,
                  display: 'flex',
                  flexDirection: 'column',
                        // justifyContent: 'space-between',
                  padding: 16,
                  flexWrap: 'wrap',
              }}
            >
              {this.props.themesNameList.map((name, ind) => (
                <Button
                  variant="outlined"
                  key={name}
                  onClick={() => this.props.onThemeSelect(ind)}
                  color="primary"
                  style={{ margin: 4 }}
                >
                  {`${name}`}
                </Button>
                    ))}
            </div>
            {/* <div style={{ width: 200, minWidth: 150, flexGrow: 1, padding: 16 }} >
              <textarea
                style={styleArea}
                value={this.props.themeJSON}
                onChange={this.props.onChangeTheme}
                onFocus={this.props.onThemeEditing(true)}
                onBlur={this.props.onThemeEditing(false)}
              />

            </div> */}
            {/* <div style={{ width: 200, paddingTop: 16 }} >
              <SclToggle
                label="Show Theme Editor"
                // labelPosition="left"
                toggled={this.props.isSideBarOpen.toString()}
                onToggle={() => this.props.onToggleSideBar(!this.props.isSideBarOpen)}
              />
            </div> */}
          </div>
        );
    }
}

ThemePanel.propTypes = propTypes;
ThemePanel.defaultProps = defaultProps;
// ThemePanel.contextTypes = contextTypes;
