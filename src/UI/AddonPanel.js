import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
import { ObjectInspector } from 'react-inspector';

import { Toggle, Link, Button, Dropdown, Paper } from '../Utils/ui_package';
import withChannel from '../adk/WithChannel';
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from '../config';
import FullTheme from './FullTheme';
import Overridings from './Overridings';
import Palette from './Palette';

const genNameList = themesAppliedList =>
  themesAppliedList.map((val, ind) => val.themeName || `Theme ${ind + 1}`);

const FlexBlock = styled('div')(props => ({
  minWidth: 160,
  padding: 16,
  display: 'flex',
  flexDirection: props.direction || 'column',
  justifyContent: 'space-between',
  flexGrow: props.main ? 1 : 0
}));

const ModeSection = styled('div')(props => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: props.left ? 'center' : 'stretch',
  // height: 1,
  flexGrow: props.left ? 0 : 1,
  padding: props.left ? 2 : 0,
  marginRight: props.left ? 0 : 8,
  border: '1px solid rgba(0, 0, 0, 0.15)',
  borderRight: props.left ? 'none' : null,
  borderLeft: props.left ? null : 'none',
  backgroundColor: props.left ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0.01)',
  overflow: 'auto'
}));

const RadioButton = styled('button')(props => ({
  minWidth: 8,
  minHeight: 8,
  padding: 4,
  backgroundColor: props.active
    ? 'rgba(255, 255, 255, 0.99)'
    : 'rgba(255, 255, 255, 0.9)',
  border: props.active
    ? '1px solid rgba(0, 0, 0, 0.5)'
    : '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: 2,
  outline: 'none',
  margin: 4,
  // fontFamily:
  //   '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif', // eslint-disable-line
  cursor: 'pointer',
  fontSize: 9,
  fontWeight: 500,
  textDecoration: 'none',
  color: props.active ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.8)',
  '&:hover': {
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.5)'
  },
  '&[disabled]': {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    color: 'rgba(0, 0, 0, 0.4)',
    cursor: 'default'
  }
}));

const MODS_LIST = [
  {
    title: 'Palette',
    id: 'palette',
    label: 'P'
  },
  {
    title: 'Overridings',
    id: 'overridings',
    label: 'O'
  },
  {
    title: 'Spacing',
    id: 'spacing',
    label: 'S',
    disabled: true
  },
  {
    title: 'Typography',
    id: 'typography',
    label: 'T',
    disabled: true
  },
  {
    title: 'Full',
    id: 'full',
    label: 'F'
  }
];

class AddonPanel extends React.Component {
  state = {
    value: this.props.defautThemeInd,
    isThemeEditing: false,
    isThemeValid: true,
    theme: this.props.themeJSON,
    currentMode: MODS_LIST[0].id
  };

  setMode = currentMode => () => this.setState({ currentMode });

  handleChange = value => {
    this.setState({ value }, this.props.onThemeSelect(value));
  };

  handleThemeChange = ev => this.setState({ theme: ev.target.value });

  onChangePalette = palette => {
    console.log('onChangePalette', palette);
    const { themeInd, themes } = this.props.data;
    themes[themeInd].palette = palette;
    this.props.sendData({ themes });
  };

  render() {
    const { data } = this.props;
    const { currentMode } = this.state;
    if (!data) return 'Waiting for theme';

    const { themes } = data;
    let theme;
    try {
      theme = themes[data.themeInd];
    } catch (err) {
      return 'Error...';
    }
    const themeStr = JSON.stringify(theme);

    const styleArea = {
      width: '100%',
      // height: '100%',
      outlineColor: this.props.isThemeInvalid ? '#cc5858' : '#26acd8',
      flexGrow: 1
    };
    const buttonStyle = {
      height: 34,
      width: 34,
      fontSize: 10,
      fontFamily:
        '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      marginBottom: 4
    };

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between'
          // flexWrap: 'wrap'
          // backgroundColor: 'brown', // this.context.muiTheme.palette.canvasColor,
        }}
      >
        <FlexBlock
          style={{
            minWidth: 160,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ marginLeft: -4 }}>
            <Dropdown
              selected={data.themeInd}
              title="Current Theme"
              list={genNameList(themes)}
              onSelect={themeInd => this.props.sendData({ themeInd })}
            />
          </div>
          <div
            style={{
              //                    width: '100%',
              minHeight: 60,
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: -4,
              marginBottom: -8,
              flexDirection: 'column'
            }}
          >
            <Button
              icon="library_add"
              title="Clone Theme"
              label="Clone Theme"
              onClick={this.props.onCloneTheme}
            >
              Clone Theme
            </Button>
            <Button
              icon="highlight_off"
              title="Clear Theme"
              label="Clear Theme"
              onClick={this.props.onCleanTheme}
            />
            <Button
              icon="get_app"
              title="Download Theme"
              label="Download Theme"
              onClick={this.props.onDnLoadTheme}
            />
          </div>
        </FlexBlock>
        <FlexBlock direction="row" main>
          <ModeSection left>
            {MODS_LIST.map(item => (
              <RadioButton
                key={item.id}
                title={item.title}
                disabled={item.disabled}
                active={item.id === this.state.currentMode}
                onClick={this.setMode(item.id)}
              >
                {item.label}
              </RadioButton>
            ))}
          </ModeSection>
          <ModeSection>
            {currentMode === 'palette' && (
              <Palette
                theme={theme}
                onChangePalette={this.onChangePalette}
                key={theme.themeName}
              />
            )}
            {currentMode === 'overridings' && <Overridings theme={theme} />}
            {currentMode === 'full' && <FullTheme theme={theme} />}
          </ModeSection>
        </FlexBlock>

        <div
          style={{
            width: 130,
            padding: '16px 8px 16px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Paper
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              paddingTop: 16,
              paddingBottom: 16
            }}
          >
            <Link
              icon="announcement"
              title="Material-UI V3"
              label="Material-UI V3"
              href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
            />
            <p
              style={{
                textDecoration: 'none',
                margin: 'auto',
                textAlign: 'center'
              }}
            >
              <a
                href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'> HERE <'}
              </a>
            </p>
          </Paper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: -8
            }}
          >
            <Link
              icon="pageview"
              title="Documentation"
              label="Documentation"
              href="https://github.com/sm-react/storybook-addon-material-ui"
            />
            <Link
              icon="help_outline"
              title="ask for help"
              label="Help"
              href={this.props.issuesLink}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  AddonPanel
);
