import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import { EVENT_ID_DATA, EVENT_ID_BACK } from '../config';
import { lightTheme } from '../.themes';
// future: [x] remove ThemeToolbar
// import ThemeSideBar from '../components/ThemeSideBar';
// const stringify = require('json-stringify-safe');

const propTypes = {
  themesAppliedListInit: PropTypes.arrayOf(PropTypes.object).isRequired,
  story: PropTypes.shape().isRequired,
  onChangeState: PropTypes.func.isRequired,
  onThemeOverride: PropTypes.func.isRequired,
  themesInitList: PropTypes.array.isRequired,
  // themeListRender: PropTypes.func.isRequired,
  initState: PropTypes.shape().isRequired,
  // channel: PropTypes.object.isRequired
  store: PropTypes.shape().isRequired
};

export default class MuiTheme extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = props.initState;
    this.state.themesAppliedList = props.themesAppliedListInit;
    this.state.currentTheme = {};
    // this.state.muiTheme = createMuiTheme(props.themesAppliedListInit[props.initState.themeInd]); // Not working yet
    this.state.muiTheme = createMuiTheme();
    this.state.isMount = false;
    this.isChannelData = false;
    this.UpdateList = {};

    this.changeTheme = this.changeTheme.bind(this);
    this.onChannel = this.onChannel.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.onThemeOverride = this.onThemeOverride.bind(this);
    this.subState = this.subState.bind(this);
    this.wouldComponentUpdate = this.wouldComponentUpdate.bind(this);
    this.needComponentUpdate = this.needComponentUpdate.bind(this);

    // this.dataChannelSend = this.dataChannelSend.bind(this);
  }

  componentDidMount() {
    // this.props.channel.on(EVENT_ID_BACK, this.onChannel);
    // if (!this.state.isMount) {
    //   setTimeout(() => {
    //     this.needComponentUpdate('ThemeSideBar');
    //     this.setState({ isMount: true });
    //   }, 1);
    // }
    this.props.store.onData(this.onChannel);
    this.props.store.connect();
  }

  shouldComponentUpdate() {
    return true; // fixme: shouldComponentUpdate
  }

  componentDidUpdate() {
    this.props.onChangeState(this.state);
    // this.dataChannelSend(this.state);
    this.isChannelData = false;
  }

  componentWillUnmount() {
    // this.props.channel.removeListener(EVENT_ID_BACK, this.onChannel);
    this.store.disconnect();
  }

  onChannel = theme => {
    this.setState({ currentTheme: theme });
  };

  onThemeOverride() {
    const propsThemeOverFunc = this.props.onThemeOverride(this.state.themeInd);
    return overTheme => {
      const themesAppliedList = propsThemeOverFunc(overTheme);
      this.needComponentUpdate('ThemeSideBar');
      this.setState({ themesAppliedList });
    };
  }

  changeTheme(ind) {
    this.needComponentUpdate('ThemeSideBar');
    this.setState({
      // muiTheme: createMuiTheme(this.state.themesAppliedList[ind]),
      muiTheme: createMuiTheme(),
      themeInd: ind
    });
  }

  openSideBar(f) {
    this.needComponentUpdate('ThemeSideBar');
    this.setState({
      isSideBarOpen: f
    });
  }

  subState(componentName, prop) {
    return val => {
      if (val == undefined) {
        return this.state[prop];
      }
      const subState = {};
      subState[prop] = val;
      this.setState(subState);
      this.needComponentUpdate(componentName);
      return val;
    };
  }

  wouldComponentUpdate(componentName) {
    if (this.UpdateList[componentName] == undefined) {
      this.UpdateList[componentName] = false;
    }
    const upd = this.UpdateList[componentName];
    this.UpdateList[componentName] = false;
    return upd;
  }

  needComponentUpdate(componentName) {
    this.UpdateList[componentName] = true;
  }

  render() {
    const theme = createMuiTheme(this.state.currentTheme);

    return (
      <MuiThemeProvider theme={theme}>
        <div>{this.props.story}</div>
      </MuiThemeProvider>
    );
  }
}

MuiTheme.propTypes = propTypes;
