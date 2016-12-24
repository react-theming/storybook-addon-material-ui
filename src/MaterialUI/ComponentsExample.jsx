import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import withWidth from 'material-ui/utils/withWidth';
import typography from 'material-ui/styles/typography';
import ClearFix from 'material-ui/internal/ClearFix';

import {
  Avatar,
  Checkbox,
  DatePicker,
  Dialog,
  DropDownMenu,
  FlatButton,
  Drawer,
  MenuItem,
  Paper,
  RadioButton,
  RadioButtonGroup,
  RaisedButton,
  Snackbar,
  Slider,
  Tabs,
  Tab,
  TextField,
  Toggle,
} from 'material-ui';

import LogoUsulPro from './LogoUsulPro.png';

function getStyles() {
    const styles = {
        group: {
            float: 'left',
            width: '33%',
            marginTop: '16px',
            padding: '0 50px',
            boxSizing: 'border-box',
        },
        groupSlider: {
            marginTop: '0px',
            width: '100%',
        },
        container: {
            marginBottom: '16px',
            minHeight: '24px',
            textAlign: 'left',
        },
        containerCentered: {
            textAlign: 'center',
        },
        paper: {
            height: '100px',
            width: '100px',
            margin: '0 auto',
            marginBottom: '64px',
        },
        textfield: {
            width: '100%',
        },
        slider: {
            marginTop: '0px',
            marginBottom: '0px',
        },
        title: {
            fontSize: '20px',
            lineHeight: '28px',
            paddingTop: '19px',
            marginBottom: '13px',
            letterSpacing: '0',
            fontWeight: typography.fontWeightMedium,
            color: typography.textDarkBlack,
        },
        liveExamplePaper: {
            marginBottom: 32,
            overflow: 'hidden',
        },
        bottomBorderWrapper: {
            paddingBottom: '10px',
        },
    };

    styles.containerCentered = Object.assign({}, styles.container, styles.containerCentered);
    styles.groupSlider = Object.assign({}, styles.group, styles.groupSlider);

    return styles;
}

class ThemesPage extends React.Component {
    state = {
        dialogOpen: false,
        snackbarOpen: false,
        drawerOpen: false,
    };

    componentWillMount() {
        this.setState({
            valueTabs: 'light',
        });
    }

    getComponentGroup() {
        const styles = getStyles();

        return (
          <ClearFix>
            <div style={styles.group}>
              <div style={styles.containerCentered}>
                <Avatar size={72} src={LogoUsulPro} />

              </div>
              <div style={styles.containerCentered}>
                <RaisedButton label="Secondary" secondary />
              </div>
              <div style={styles.containerCentered}>
                <RaisedButton label="Primary" primary />
              </div>
              <div style={styles.containerCentered}>
                <RaisedButton label="Default" />
              </div>
            </div>
            <div style={styles.group}>
              <div style={styles.container}>
                <Checkbox
                  name="checkboxName1"
                  value="checkboxValue1"
                  label="checkbox"
                />
                <Checkbox
                  name="checkboxName2"
                  value="checkboxValue2"
                  label="disabled checkbox"
                  disabled
                />
              </div>
              <div style={styles.container}>
                <RadioButtonGroup
                  name="shipSpeed"
                  defaultSelected="usd"
                >
                  <RadioButton
                    value="usd"
                    label="USD"
                  />
                  <RadioButton
                    value="euro"
                    label="Euro"
                  />
                  <RadioButton
                    value="mxn"
                    label="MXN"
                    disabled
                  />
                </RadioButtonGroup>
              </div>
              <div style={styles.container}>
                <Toggle
                  name="toggleName1"
                  label="toggle"
                />
                <Toggle
                  name="toggleName2"
                  label="disabled toggle"
                  defaultToggled
                  disabled
                />
              </div>
            </div>
            <div style={Object.assign({}, styles.group, { marginTop: 0 })}>
              <div style={styles.container}>
                <TextField
                  style={styles.textfield}
                  hintText="TextField"
                />
              </div>
              <div style={styles.container}>
                <DatePicker
                  hintText="Landscape Dialog"
                  mode="landscape"
                  style={{ width: '100%' }}
                />
              </div>
              <div style={styles.container}>
                <DropDownMenu value={3} style={{ width: '100%' }}>
                  <MenuItem value={1} primaryText={'Never'} />
                  <MenuItem value={2} primaryText={'Every Night'} />
                  <MenuItem value={3} primaryText={'Weeknights'} />
                  <MenuItem value={4} primaryText={'Weekends'} />
                  <MenuItem value={5} primaryText={'Weekly'} />
                </DropDownMenu>
              </div>
            </div>
            <div style={styles.groupSlider}>
              <Slider style={styles.slider} name="slider2" defaultValue={0.5} />
            </div>
            <div style={styles.group}>
              <div style={styles.containerCentered}>
                <FlatButton label="View Dialog" onTouchTap={this.handleTouchTapDialog} />
                <Dialog
                  open={this.state.dialogOpen}
                  title="Dialog With Standard Actions"
                  actions={[
                    <FlatButton
                      label="Cancel"
                      keyboardFocused
                      onTouchTap={this.handleRequestCloseDialog}
                      primary
                    />,
                    <FlatButton
                      label="Submit"
                      onTouchTap={this.handleRequestCloseDialog}
                      primary
                    />,
                  ]}
                  onRequestClose={this.handleRequestCloseDialog}
                >
              The actions in this window are created from tan array
              of element&#39;s that&#39;s passed in.
            </Dialog>
              </div>
            </div>
            <div style={styles.group}>
              <div style={styles.containerCentered}>
                <FlatButton
                  onTouchTap={this.handleTouchTapDrawer}
                  label="View Drawer"
                />
                <Drawer
                  open={this.state.drawerOpen} docked={false}
                  onRequestChange={this.handleRequestChangeDrawer}
                >
                  <MenuItem>Menu Item</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
              </div>
            </div>
            <div style={styles.group}>
              <div style={styles.containerCentered}>
                <FlatButton
                  onTouchTap={this.handleTouchTapSnackbar}
                  label="View Snackbar"
                />
              </div>
              <Snackbar
                open={this.state.snackbarOpen}
                onRequestClose={this.handleRequestCloseSnackbar}
                message="This is a snackbar"
                action="Got It!"
                onActionTouchTap={this.handleRequestCloseSnackbar}
              />
            </div>
          </ClearFix>
        );
    }

    getThemeExamples() {
        return (
          <div>
            <Tabs
              value={this.state.valueTabs}
              onChange={() => {}}
            >
              <Tab
                label="The Left Tab"
                value="light"
              />
              <Tab
                label="The Right Tab"
                value="dark"
              />
            </Tabs>
            {this.getComponentGroup()}
          </div>
        );
    }

    handleTouchTapDrawer = () => {
        this.setState({
            drawerOpen: true,
        });
    };

    handleRequestChangeDrawer = (open) => {
        this.setState({
            drawerOpen: open,
        });
    };

    handleTouchTapDialog = () => {
        this.setState({
            dialogOpen: true,
        });
    };

    handleRequestCloseDialog = () => {
        this.setState({
            dialogOpen: false,
        });
    };

    handleTouchTapSnackbar = () => {
        this.setState({
            snackbarOpen: true,
        });
    };

    handleRequestCloseSnackbar = () => {
        this.setState({
            snackbarOpen: false,
        });
    };

    render() {
        const styles = getStyles();

        return (
          <div>
            <Paper style={{ padding: 16, marginTop: 16, marginBottom: 8 }}>
              Material-UI Components
            </Paper>
            <Paper style={styles.liveExamplePaper}>
              <ClearFix style={styles.liveExampleBlock}>{this.getThemeExamples()}</ClearFix>
            </Paper>
          </div>
        );
    }
}

export default muiThemeable()(withWidth()(ThemesPage));
