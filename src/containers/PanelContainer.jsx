import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import lightBaseTheme from '@material-ui/core/styles/baseThemes/lightBaseTheme';
// import darkBaseTheme from '@material-ui/core/styles/baseThemes/darkBaseTheme'; // eslint-disable-line
import * as beauti from 'js-beautify';

import { EVENT_ID_INIT, EVENT_ID_DATA } from '../';
import ThemePanel from '../components/ThemePanel';

const { document, window } = global;
const logger = console;

const lightBaseTheme = createMuiTheme();

const PROGRESS_STATUS = {
    'button-clone': 'soon', // todo: [] button_clone
    'button-download': 'done', // todo: [x] button_download
    'button-clean': 'soon', // todo: [] button_clean
    'textarea-edit': 'done', // todo: [x] textarea-edit
    'textarea-update': 'done', // todo: [x] textarea-update
};

const progressInfo = () => {
    const keys = Object.keys(PROGRESS_STATUS);
    logger.group('PROGRESS_STATUS:');
    keys.forEach((val) => {
        if (PROGRESS_STATUS[val] === 'done') {
            logger.info(`${val}: ${PROGRESS_STATUS[val]}`);
            return;
        }
        logger.warn(`${val}: ${PROGRESS_STATUS[val]}`);
    });
    logger.groupEnd('PROGRESS_STATUS:');
};

const genNameList = themesAppliedList => (
    themesAppliedList.map((val, ind) => (val.themeName || `Theme ${ind + 1}`))
);

const propTypes = {
    channel: PropTypes.object.isRequired,
    api: PropTypes.object.isRequired,
};

export default class PanelContainer extends React.Component {
    constructor(props, ...args) {
        super(props, ...args);

        this.state = {
            isReady: false,
            isThemeInvalid: false,
            isThemeEditing: false,
            themeString: '',
        };
        this.isChannelData = false;

        // future: get from state with own theme ind
        this.muiTheme = lightBaseTheme;
    }

    componentDidMount() {
        this.props.channel.on(EVENT_ID_INIT, this.onInitChannel);
        this.props.channel.on(EVENT_ID_DATA, this.onDataChannel);
    }

    componentDidUpdate() {
//        if (!this.isChannelData) this.props.channel.emit(EVENT_ID_DATA, nextState);
        this.querySet(this.state);
        this.dataChannelSend(this.state);
        this.isChannelData = false;
    }

    componentWillUnmount() {
        this.props.channel.removeListener(EVENT_ID_INIT, this.onInitChannel);
        this.props.channel.removeListener(EVENT_ID_DATA, this.onDataChannel);
    }

    @autobind
    onInitChannel(initData) {
        const themesNameList = genNameList(initData.themesAppliedList);
        const queryData = this.queryFetch();
        this.setState(
            { ...initData, ...queryData, themesNameList, isReady: true },
        );
    }

    @autobind
    onDataChannel(stateData) {
//        const stateData = JSON.parse(strData);
        const themesNameList = genNameList(stateData.themesAppliedList);
        this.isChannelData = true; // note: this state received by channel, don't need to send back
        this.setState(
            { ...stateData, themesNameList },
        );
    }

    @autobind
    onThemeSelect(ind) {
        this.setState({
            themeInd: ind,
        });
    }

    @autobind
    onChangeTheme(event) {
        const str = event.target.value;
        try {
            const newTheme = JSON.parse(str);
            const themesAppliedList = this.state.themesAppliedList;
            themesAppliedList[this.state.themeInd] = newTheme;
            this.setState({
                themesAppliedList,
                isThemeInvalid: false,
                themeString: str,
            });
        } catch (e) {
            this.setState({
                isThemeInvalid: true,
                themeString: str,
            });
        }
    }

    @autobind
    onThemeEditing(isFocus) {
        return () => this.setState({
            isThemeEditing: isFocus,
            themeString: this.getCurrentTheme(1),
        });
    }

    @autobind
    onToggleSideBar(f) {
        this.setState({
            isSideBarOpen: f,
        });
    }

    @autobind
    onDnLoadTheme() {
        const uri = `data:application/json;charset=utf-8;base64,
${window.btoa(this.getCurrentTheme(4))}`;
        const fileName = this.state.themesAppliedList[this.state.themeInd]
            .themeFile || 'theme.json';
        const downloadTheme = document.createElement('a');
        downloadTheme.href = uri;
        downloadTheme.download = fileName;

        document.body.appendChild(downloadTheme);
        downloadTheme.click();
        document.body.removeChild(downloadTheme);
    }

    @autobind
    onCloneTheme() {
        progressInfo(this);
        return null;

//        const themesAppliedList = this.state.themesAppliedList;
//        const newTheme = Object.assign({}, themesAppliedList[this.state.themeInd]); // fixme:  deeper
//        newTheme.themeName = `${themesAppliedList[this.state.themeInd].themeName} clone`;
//        newTheme.themeFile = `${themesAppliedList[this.state.themeInd].themeFile}.clone`;
//        const newAppliedList = themesAppliedList.slice(0, this.state.themeInd + 1)
//            .concat(newTheme, themesAppliedList.slice(this.state.themeInd + 1));
//        const themesNameList = genNameList(newAppliedList);
//        logger.log(themesNameList);
//        this.setState({ themesAppliedList: newAppliedList, themesNameList });
    }

    @autobind
    onCleanTheme() {
        progressInfo(this);
        return null;
//        const themesAppliedList = this.state.themesAppliedList;
//        const newTheme = {};
//        newTheme.themeName = themesAppliedList[this.state.themeInd].themeName;
//        newTheme.themeFile = themesAppliedList[this.state.themeInd].themeFile;
//        themesAppliedList[this.state.themeInd] = newTheme;
//        const themesNameList = genNameList(themesAppliedList);
//        this.setState({ themesAppliedList, themesNameList });
    }


    @autobind
    getCurrentTheme(indent = 2) {
        // console.log(this.state.themesAppliedList[this.state.themeInd]);
        return beauti.js_beautify(
            JSON.stringify(this.state.themesAppliedList[this.state.themeInd]),
            {
                indent_size: indent,
                indent_char: ' ',
                eol: '\n',
                end_with_newline: true,
            },
        );
    }

    @autobind
    dataChannelSend(data) {
        if (this.isChannelData) return false;
        this.props.channel.emit(EVENT_ID_DATA, data);
        return true;
    }

    @autobind
    queryFetch() {
        const themeInd = this.props.api.getQueryParam('theme-ind');
        const isSideBarOpen = this.props.api.getQueryParam('theme-sidebar');
        const isFullTheme = this.props.api.getQueryParam('theme-full');
        const data = JSON.parse(JSON.stringify({ themeInd, isSideBarOpen, isFullTheme }));
        const keys = Object.keys(data);
        keys.forEach((val) => {
            data[val] = JSON.parse(data[val]);
        });
        return (data);
    }

    @autobind
    querySet(state) {
        if (state.isReady) {
            const { themeInd, isSideBarOpen, isFullTheme } = state;
            const queryParams = {
                'theme-ind': themeInd,
                'theme-sidebar': isSideBarOpen,
                'theme-full': isFullTheme,
            };
            this.props.api.setQueryParams(queryParams);
        }
    }

    render() {
        return this.state.isReady ?
        (
          <MuiThemeProvider theme={this.muiTheme}>
            <ThemePanel
              themesNameList={this.state.themesNameList}
              defautThemeInd={this.state.themeInd}
              isSideBarOpen={this.state.isSideBarOpen}
              onThemeSelect={this.onThemeSelect}
              onToggleSideBar={this.onToggleSideBar}
              themeJSON={
                (this.state.isThemeInvalid || this.state.isThemeEditing)
                    ? this.state.themeString
                    : this.getCurrentTheme(1)
              }
              isThemeInvalid={this.state.isThemeInvalid}
              onThemeEditing={this.onThemeEditing}
              onChangeTheme={this.onChangeTheme}
              onDnLoadTheme={this.onDnLoadTheme}
              onCloneTheme={this.onCloneTheme}
              onCleanTheme={this.onCleanTheme}
            />
          </MuiThemeProvider>
        ) : (
          <div
            style={{
                padding: 16,
                fontFamily: '"San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
                color: 'rgb(68, 68, 68)',
            }}
          >
              waiting for muiTheme decorator...
          </div>
        );
    }
}

PanelContainer.propTypes = propTypes;
