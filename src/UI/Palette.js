import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx, css } from 'react-emotion';
import { ObjectInspector } from 'react-inspector';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
`;

export default class Palette extends React.Component {
  static propTypes = {
    theme: PropTypes.shape()
  };

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     palette: props.theme.palette
  //   };
  // }

  state = {
    isPickerOpen: false,
    editColor: '',
    palette: this.props.theme.palette,
    path: []
  };

  onChange = () => {
    this.props.onChangePalette(this.state.palette)
  };

  setPath = path => () => {
    const { palette } = this.state;
    this.setState({
      path,
      editColor: createMuiTheme({ palette }).palette[path[0]][path[1]]
    });
  };

  updPalette = ev => {
    const { path, palette } = this.state;
    const editColor = ev.target.value;
    const newPalette = {
      ...palette,
      [path[0]]: {
        ...palette[path[0]],
        [path[1]]: editColor
      }
    };
    this.setState({ editColor, palette: newPalette });
  };

  renderColorPicker = () => (
    <div>
      <input
        type="text"
        onChange={this.updPalette}
        value={this.state.editColor}
      />
      <button onClick={this.onChange}>ok</button>
    </div>
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
      cursor: pointer;
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
          <ColorBox color={light} onClick={this.setPath([name, 'light'])} />
          <ColorBox color={main} onClick={this.setPath([name, 'main'])} />
          <ColorBox color={dark} onClick={this.setPath([name, 'dark'])} />
          <ColorBox
            color={contrastText}
            onClick={this.setPath([name, 'contrastText'])}
          />
        </Plate>
        <Plate>
          <ColorName />
          <ColorBox>{`light: ${light}`}</ColorBox>
          <ColorBox>{`main: ${main}`}</ColorBox>
          <ColorBox>{`dark: ${dark}`}</ColorBox>
          <ColorBox>{`contrastText: ${contrastText}`}</ColorBox>
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
        {this.renderColorPicker()}
      </PaletteHolder>
    );
  }
}
