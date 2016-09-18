import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


import { EVENT_ID_INIT } from '../';
import { EVENT_ID_DATA } from '../';


import ThemePanel from '../components/ThemePanel';

export default class Panel extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.state = { isReady: false };

//        const muiTheme = getMuiTheme(lightBaseTheme);
        this.onChannel = this.onChannel.bind(this);
        this.onThemeSelect = this.onThemeSelect.bind(this);
        this.onToggleSideBar = this.onToggleSideBar.bind(this);
    }

    componentDidMount() {
        this.props.channel.on(EVENT_ID_INIT, this.onChannel);
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_ID_INIT, this.onChannel);
    }

    componentWillUpdate(nextProps, nextState) {
        this.props.channel.emit(EVENT_ID_DATA, nextState);
    }

    onChannel(props) {
        const state = props.panelState;
        state.themesAppliedList = props.themesAppliedList;
        state.muiTheme = getMuiTheme(props.themesAppliedList[props.panelState.themeInd]);
        state.ThemesNameList = props.themesAppliedList.map((val, ind) => (val.themeName || `Theme ${ind + 1}`));
        state.isReady = true;
        this.setState(state);
        console.info('the panel is initialized');
    }

    onThemeSelect(ind) {
//        this.needComponentUpdate('ThemeSideBar');
        this.setState({
//            muiTheme: getMuiTheme(this.state.themesAppliedList[ind]),
            themeInd: ind,
        });
    }

    onToggleSideBar(f) {
//        this.needComponentUpdate('ThemeSideBar');
        this.setState({
            isSideBarOpen: f,
        });
    }

    render() {
        console.warn('render PanelContainer')
        return this.state.isReady ?
        (
            <MuiThemeProvider muiTheme={this.state.muiTheme}>
                <ThemePanel
                    themesNameList={this.state.ThemesNameList}
                    defautThemeInd={this.state.themeInd}
                    isSideBarOpen={this.state.isSideBarOpen}
                    onThemeSelect={this.onThemeSelect}
                    onToggleSideBar={this.onToggleSideBar}
                />
            </MuiThemeProvider>
        ) : (
            <div>the panel is not initialized</div>
        )
//        return <div>Lorem</div>//<ThemePanel />;
    }
}
