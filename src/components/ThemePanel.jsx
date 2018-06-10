import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import IconNew from '@material-ui/icons/CreateNewFolder';
import IconDnLoad from '@material-ui/icons/FileDownload';
import IconClean from '@material-ui/icons/DeleteForever';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
                flexDirection: 'row',
                    // flexWrap: 'wrap',
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
                  width: 300,
                  flexGrow: 1,
              }}
            >
              {this.props.themesNameList.map((name, ind) => (
                <Button
                  variant="outlined"
                  key={name}
                  onClick={() => this.props.onThemeSelect(ind)}
                  color="primary"
                  style={{ margin: 4, maxWidth: 300 }}
                >
                  {`${name}`}
                </Button>
                    ))}
            </div>
            <div
              style={{
                  minWidth: 160,
                  display: 'flex',
                  flexDirection: 'column',
                        // justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  width: 300,
                  padding: 8,
              }}
            >
              <Card style={{ height: '100%' }}>
                <a
                  href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
                  target="blank"
                  style={{ textDecoration: 'none' }}
                >
                  <CardContent>
                    <Typography color="primary">
                      <b>Material-UI v1 support announcement</b>
                    </Typography>
                    <Divider style={{ marginBottom: 16 }} />
                    <Typography color="textSecondary" style={{ fontSize: 12 }}>
                                    Since v.1 themes have the completely new structure, we need to
                                    change a lot in this addon. Let us know <b>what features</b> are
                                    most needed to you.
                                </Typography>
                    <Typography color="textSecondary" style={{ fontSize: 12 }}>
                                    We would appreciate if you give us your <b>feedback</b> via this
                                    survey. It is completely anonymous and contains only 10
                                    questions. It'll help us to provide you with the best DX.
                                </Typography>
                    <Typography style={{ marginTop: 16 }} align="center">
                      <Button
                        // href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
                        target="blank"
                      >
                                        complete this poll
                                    </Button>
                    </Typography>
                  </CardContent>
                </a>
              </Card>
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
