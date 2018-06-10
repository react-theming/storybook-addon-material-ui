import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import SplitPane from 'react-split-pane';

import { EVENT_ID_DATA } from '../'; // future: add CSS_CLASS
// future: [x] remove ThemeToolbar
// import ThemeSideBar from '../components/ThemeSideBar';
// const stringify = require('json-stringify-safe');

const propTypes = {
    themesAppliedListInit: PropTypes.arrayOf(PropTypes.object).isRequired,
    story: PropTypes.object.isRequired,
    onChangeState: PropTypes.func.isRequired,
    onThemeOverride: PropTypes.func.isRequired,
    // themeListRender: PropTypes.func.isRequired,
    initState: PropTypes.object.isRequired,
    channel: PropTypes.object.isRequired,
};

export default class MuiTheme extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = props.initState;
        this.state.themesAppliedList = props.themesAppliedListInit;
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

        this.dataChannelSend = this.dataChannelSend.bind(this);
    }

    componentDidMount() {
        this.props.channel.on(EVENT_ID_DATA, this.onChannel);
        if (!this.state.isMount) {
            setTimeout(() => {
                this.needComponentUpdate('ThemeSideBar');
                this.setState({ isMount: true });
            }, 1);
        }
    }

    shouldComponentUpdate() {
        return true; // fixme: shouldComponentUpdate
    }

    componentDidUpdate() {
        this.props.onChangeState(this.state);
        this.dataChannelSend(this.state);
        this.isChannelData = false;
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_ID_DATA, this.onChannel);
    }

    onChannel(state) {
        this.needComponentUpdate('ThemeSideBar');
        this.isChannelData = true;
        // fixme: onThemeOverride - to store theme
        this.setState({ ...state, isMount: false }, () =>
            setTimeout(() => {
                const override = this.onThemeOverride();
                override(this.state.themesAppliedList[this.state.themeInd]);
                this.isChannelData = true;
                this.setState({ isMount: true });
            }, 10),
        );
    }

    onThemeOverride() {
        const propsThemeOverFunc = this.props.onThemeOverride(this.state.themeInd);
        return (overTheme) => {
            const themesAppliedList = propsThemeOverFunc(overTheme);
            this.needComponentUpdate('ThemeSideBar');
            this.setState({ themesAppliedList });
        };
    }

    dataChannelSend(data) {
        if (this.isChannelData || !this.state.isMount) return false;
        //        const dataStr = stringify(data);
        this.props.channel.emit(EVENT_ID_DATA, data);
        return true;
    }

    changeTheme(ind) {
        this.needComponentUpdate('ThemeSideBar');
        this.setState({
            // muiTheme: createMuiTheme(this.state.themesAppliedList[ind]),
            muiTheme: createMuiTheme(),
            themeInd: ind,
        });
    }

    openSideBar(f) {
        this.needComponentUpdate('ThemeSideBar');
        this.setState({
            isSideBarOpen: f,
        });
    }

    subState(componentName, prop) {
        return (val) => {
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
        const ThemesNameList = this.state.themesAppliedList.map(
            (val, ind) => val.themeName || `Theme ${ind + 1}`,
        );
        const muiTheme = createMuiTheme();
        // this.props.themeListRender(this.state.themesAppliedList[this.state.themeInd]), // Not working yet
        // return (<MuiThemeProvider theme={muiTheme}>

        // const theme = createMuiTheme({
        //     palette: createPalette({
        //         primary: purple, // Purple and green play nicely together.
        //         secondary: {
        //             ...green,
        //             A400: '#00e677',
        //         },
        //         error: red,
        //     }),
        //     typography: {},
        //     shadows: {},
        // });

        const theme = (this.props.themesInitList[this.state.themeInd]);

        return (
          <MuiThemeProvider theme={theme}>
            <div >
              {this.props.story}
            </div>
          </MuiThemeProvider>
        );
    }
}

MuiTheme.propTypes = propTypes;
