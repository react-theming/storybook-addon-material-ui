import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ObjectInspector } from 'react-inspector';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MaterialColorPicker from '@usulpro/color-picker';

const sortObjectKeys = (a, b) => {
  if (a === 'themeName') return -2;
  if (b === 'themeName') return 2;
  if (a === 'palette') return -1;
  if (b === 'palette') return 1;
  return a.charCodeAt(0) - b.charCodeAt(0);
};

const PaletteHolder = styled('div')`
  height: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.dark ? 'hsl(0, 0%, 44%)' : 'hsl(0, 0%, 90%)'};
  color: ${props => (props.dark ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 44%)')};
  label: PaletteHolder;
  padding: 8px;
  position: relative;
`;

const PickerOverlap = styled('div')`
  position: absolute;
  background-color: hsl(0, 0%, 0%, 0.8);
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PickerHolder = styled('div')`
  width: 70%;
  max-width: 500px;
  min-width: 250px;
  background-color: hsl(0, 0%, 50%);
`;

const ColorInput = styled('div')`
  margin-left: 2px;
  margin-top: 8px;
  color: hsl(0, 0%, 30%);
  & input {
    margin-right: 4px;
  }
`;

export default class Palette extends React.Component {
  static propTypes = {
    theme: PropTypes.shape()
  };


  state = {
    isPickerOpen: false,
    editColor: '',
    palette: this.props.theme.palette,
    path: []
  };

  prevColor = '';

  onChange = () => {
    this.props.onChangePalette(this.state.palette);
  };

  setPath = (path, isPickerOpen) => () => {
    const { palette } = this.state;
    this.setState(
      {
        path,
        editColor: createMuiTheme({ palette }).palette[path[0]][path[1]],
        isPickerOpen
      },
      () => {
        this.prevColor = this.state.editColor;
      }
    );
  };

  updPalette = (ev, cb) => {
    const { path, palette } = this.state;
    const editColor = ev.target.value || this.prevColor;
    const newPalette = {
      ...palette,
      [path[0]]: {
        ...palette[path[0]],
        [path[1]]: editColor
      }
    };
    this.setState({ editColor, palette: newPalette }, cb);
  };

  onSubmit = ev => {
    this.updPalette(ev, () => {
      this.onChange();
      this.setState({ isPickerOpen: false });
      this.prevColor = this.state.editColor;
    });
  };

  onReset = ev => {
    this.updPalette(ev, () => {
      this.onChange();
      this.setState({ isPickerOpen: false });
    });
  };

  onHover = ev => {
    this.updPalette(ev, () => {
      this.onChange();
    });
  };

  renderColorInput = () => (
    <ColorInput>
      <input
        type="text"
        onChange={this.updPalette}
        value={this.state.editColor}
      />
      <button onClick={this.onChange}>ok</button>
    </ColorInput>
  );

  renderColorSet = (colorSet, name, isDark) => {
    const { main, light, dark, contrastText } = colorSet;
    const Plate = styled('div')`
      display: flex;
      justify-content: space-between;
      height: 20px;
      margin: 2px;
      margin-bottom: ${props => (props.up ? '0px' : '2px')};
      margin-top: ${props => (!props.up ? '0px' : '2px')};
    `;
    const ColorBox = styled('div')`
      background-color: ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
      width: 1px;
      flex-grow: 1;
      border: 1px solid ${isDark ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 44%)'};
      border: ${props => (props.color ? '' : 'none')};
      cursor: ${props => (props.color ? 'pointer' : 'text')};
    `;
    const ColorName = styled('div')`
      background-color: rgba(0, 0, 0, 0.1);
      width: 80px;
      padding-left: 4px;
    `;
    return (
      <>
        <Plate up>
          <ColorName>{name}</ColorName>
          <ColorBox
            color={light}
            onClick={this.setPath([name, 'light'], true)}
          />
          <ColorBox color={main} onClick={this.setPath([name, 'main'], true)} />
          <ColorBox color={dark} onClick={this.setPath([name, 'dark'], true)} />
          <ColorBox
            color={contrastText}
            onClick={this.setPath([name, 'contrastText'], true)}
          />
        </Plate>
        <Plate>
          <ColorName />
          <ColorBox onClick={this.setPath([name, 'light'])}>
            {`light: ${light}`}
          </ColorBox>
          <ColorBox onClick={this.setPath([name, 'main'])}>
            {`main: ${main}`}
          </ColorBox>
          <ColorBox onClick={this.setPath([name, 'dark'])}>
            {`dark: ${dark}`}
          </ColorBox>
          <ColorBox onClick={this.setPath([name, 'contrastText'])}>
            {`contrastText: ${contrastText}`}
          </ColorBox>
        </Plate>
      </>
    );
  };

  render() {
    const { palette } = createMuiTheme({ palette: this.state.palette });
    const colorSet = name =>
      this.renderColorSet(
        palette[name],
        name,
        this.state.palette.type === 'dark'
      );

    return (
      <PaletteHolder dark={this.state.palette.type === 'dark'}>
        {colorSet('primary')}
        {colorSet('secondary')}
        {colorSet('error')}
        {this.renderColorInput()}
        {this.state.isPickerOpen && (
          <PickerOverlap>
            <PickerHolder>
              <MaterialColorPicker
                initColor={this.prevColor}
                onSubmit={this.onSubmit}
                onSelect={this.onHover}
                onHover={this.onHover}
                onReset={this.onReset}
              />
            </PickerHolder>
          </PickerOverlap>
        )}
      </PaletteHolder>
    );
  }
}
