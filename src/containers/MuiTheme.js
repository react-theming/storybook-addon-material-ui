import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { EVENT_ID_DATA, CSS_CLASS } from '../'; // future: add CSS_CLASS
// future: [x] remove ThemeToolbar
import ThemeSideBar from '../components/ThemeSideBar';
import SplitPane from 'react-split-pane';
// const stringify = require('json-stringify-safe');

const propTypes = {
    themesAppliedListInit: React.PropTypes.arrayOf(React.PropTypes.object),
    themeName: React.PropTypes.string,
    themeNameArr: React.PropTypes.arrayOf(React.PropTypes.string),
    story: React.PropTypes.object.isRequired,
    onChangeState: React.PropTypes.func.isRequired,
    onThemeOverride: React.PropTypes.func.isRequired,
    themeListRender: React.PropTypes.func.isRequired,
    initState: React.PropTypes.object,
    channel: React.PropTypes.object,
};

export default class MuiTheme extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = props.initState;
        this.state.themesAppliedList = props.themesAppliedListInit;
        this.state.muiTheme = getMuiTheme(props.themesAppliedListInit[props.initState.themeInd]);
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

    componentWillUpdate(nextProps, nextState) {
        this.props.onChangeState(nextState);
        this.dataChannelSend(nextState);
        this.isChannelData = false;
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_ID_DATA, this.onChannel);
    }

    onChannel(state) {
        this.needComponentUpdate('ThemeSideBar');
        this.isChannelData = true;
        // fixme: onThemeOverride - to store theme
        this.setState({ ...state, isMount: false }, () => setTimeout(() => {
            const override = this.onThemeOverride();
            override(this.state.themesAppliedList[this.state.themeInd]);
            this.isChannelData = true;
            this.setState({ isMount: true });
        }, 10));
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
            muiTheme: getMuiTheme(this.state.themesAppliedList[ind]),
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
        const ThemesNameList = this.state.themesAppliedList
            .map((val, ind) => (val.themeName || `Theme ${ind + 1}`));
        const muiTheme = getMuiTheme(
            this.props.themeListRender(this.state.themesAppliedList[this.state.themeInd])
        );
        return (<MuiThemeProvider muiTheme={muiTheme}>
          <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: muiTheme.palette.canvasColor,
            }}

          >
            <SplitPane
              split="vertical"
              minSize={this.state.isSideBarOpen ? 200 : 0}
              defaultSize={this.state.isSideBarOpen ? 400 : 0}
              primary="second"
              pane1Style={{overflowX: 'auto', overflowY: 'auto'}}
              pane2Style={{width: this.state.isSideBarOpen ? 'auto' : 0}}
              resizerStyle={{display: this.state.isSideBarOpen ? 'auto' : 'none'}}
            >
              <div>
                  {this.props.story}
              </div>
              <ThemeSideBar
                shouldComponentUpdate
                shouldShowData={this.state.isMount}
                open={this.state.isSideBarOpen}
                theme={this.state.themesAppliedList[this.state.themeInd]}
                muiTheme={muiTheme}
                themeName={ThemesNameList[this.state.themeInd]}
                fullTheme={this.subState('ThemeSideBar', 'isFullTheme')}
                collapseList={this.subState('ThemeSideBar', 'collapseList')}
                themesOverrideList={this.subState('ThemeSideBar', 'currentThemeOverride')}
                onThemeOverride={this.onThemeOverride()}
              />
            </SplitPane>
          </div>
        </MuiThemeProvider>);
    }
}

MuiTheme.propTypes = propTypes;
