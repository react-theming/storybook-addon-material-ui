import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


import { EVENT_ID_INIT } from '../';
import { EVENT_ID_DATA } from '../';


import ThemePanel from '../components/ThemePanel';

const propTypes = {
    channel: React.PropTypes.object,
};


export default class PanelConteiner extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.state = { isReady: false };
        this.isNewData = false;

        this.muiTheme = getMuiTheme(lightBaseTheme);

        this.onInitChannel = this.onInitChannel.bind(this);
        this.onDataChannel = this.onDataChannel.bind(this);
        this.onThemeSelect = this.onThemeSelect.bind(this);
        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onToggleSideBar = this.onToggleSideBar.bind(this);
    }

    componentDidMount() {
        this.props.channel.on(EVENT_ID_INIT, this.onInitChannel);
        this.props.channel.on(EVENT_ID_DATA, this.onDataChannel);
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_ID_INIT, this.onInitChannel);
        this.props.channel.removeListener(EVENT_ID_DATA, this.onDataChannel);
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.isNewData) this.props.channel.emit(EVENT_ID_DATA, nextState);
        this.isNewData = false;
    }

    onInitChannel(props) {
        const state = props.panelState;
        state.themesAppliedList = props.themesAppliedList;
        state.muiTheme = getMuiTheme(props.themesAppliedList[props.panelState.themeInd]);
        state.ThemesNameList = props.themesAppliedList.map((val, ind) => (val.themeName || `Theme ${ind + 1}`));
        state.isReady = true;
        this.setState(state);
    }

    onDataChannel(props) {
        const state = props.panelState;
        state.themesAppliedList = props.themesAppliedList;
        state.muiTheme = getMuiTheme(props.themesAppliedList[props.panelState.themeInd]);
        state.ThemesNameList = props.themesAppliedList.map((val, ind) => (val.themeName || `Theme ${ind + 1}`));
        state.themeInd = props.panelState.themeInd;
        this.isNewData = true;
        this.setState(state);
    }

    onThemeSelect(ind) {
//        this.needComponentUpdate('ThemeSideBar');
        this.setState({
//            muiTheme: getMuiTheme(this.state.themesAppliedList[ind]),
            themeInd: ind,
        });
    }

    onChangeTheme(event) {
        const str = event.target.value;
        const newTheme = JSON.parse(str);
        const themesAppliedList = this.state.themesAppliedList;
        themesAppliedList[this.state.themeInd] = newTheme;
        this.setState({ themesAppliedList });
//        console.log(newTheme);
    }

    onToggleSideBar(f) {
//        this.needComponentUpdate('ThemeSideBar');
        this.setState({
            isSideBarOpen: f,
        });
    }

    render() {
        return this.state.isReady ?
        (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                <ThemePanel
                  themesNameList={this.state.ThemesNameList}
                  defautThemeInd={this.state.themeInd}
                  isSideBarOpen={this.state.isSideBarOpen}
                  onThemeSelect={this.onThemeSelect}
                  onToggleSideBar={this.onToggleSideBar}
                  themeJSON={JSON.stringify(this.state
                          .themesAppliedList[this.state.themeInd])}
                  onChangeTheme={this.onChangeTheme}
                />
            </MuiThemeProvider>
        ) : (
            <div
              style={{
                  padding: 16,
                  fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
                  color: 'rgb(68, 68, 68)',
              }}
            >
                waiting for muiTheme decorator...
            </div>
        );
//        return <div>Lorem</div>//<ThemePanel />;
    }
}

PanelConteiner.propTypes = propTypes;
