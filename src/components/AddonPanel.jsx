import React from 'react';
import PropTypes from 'prop-types';
import { Toggle, Link, Button, Dropdown, Paper } from '../Utils/ui_package';

const propTypes = {
  themesNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  defautThemeInd: PropTypes.number.isRequired,
  onThemeSelect: PropTypes.func.isRequired,
  onToggleSideBar: PropTypes.func.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
  isThemeInvalid: PropTypes.bool.isRequired,
  themeJSON: PropTypes.string.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
  onThemeEditing: PropTypes.func.isRequired,
  onCloneTheme: PropTypes.func.isRequired,
  onDnLoadTheme: PropTypes.func.isRequired,
  onCleanTheme: PropTypes.func.isRequired,
  issuesLink: PropTypes.string,
};

const defaultProps = {
  themesNameList: ['BaseLight', 'BaseDark'],
  defautThemeInd: 0,
  onThemeSelect: () => {},
  onToggleSideBar: () => {},
  isSideBarOpen: false,
  onCloneTheme: () => {},
  onDnLoadTheme: () => {},
  onCleanTheme: () => {},
  issuesLink: 'https://github.com/sm-react/storybook-addon-material-ui/issues/new',
};

const contextTypes = {
  muiTheme: PropTypes.object,
};

export default class AddonPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.defautThemeInd,
      isThemeEditing: false,
      isThemeValid: true,
      theme: props.themeJSON,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value }, this.props.onThemeSelect(value));
  }

  handleThemeChange = ev => this.setState({ theme: ev.target.value });

  render() {
    const styleArea = {
      width: '100%',
      // height: '100%',
      outlineColor: this.props.isThemeInvalid ? '#cc5858' : '#26acd8',
      flexGrow: 1,
    };
    const buttonStyle = {
      height: 34,
      width: 34,
      fontSize: 10,
      fontFamily:
        '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      marginBottom: 4,
    };
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          // backgroundColor: 'brown', // this.context.muiTheme.palette.canvasColor,
        }}
      >
        <div
          style={{
            minWidth: 160,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ marginLeft: -4 }}>
            <Dropdown
              selected={this.state.value}
              title="Current Theme"
              list={this.props.themesNameList}
              onSelect={this.handleChange}
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
              flexDirection: 'column',
            }}
          >
            <Button
              icon="library_add"
              title="Clone Theme"
              label="Clone Theme"
              onClick={this.props.onCloneTheme}
            />
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
        </div>
        <div
          style={{
            width: 200,
            minWidth: 150,
            flexGrow: 1,
            paddingLeft: 16,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              paddingTop: 16,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Button icon="bookmark_border" title="Palette" label="Pal" compact disabled />
            <Button icon="bookmark_border" title="Typography" label="Typ" compact disabled />
            <Button icon="bookmark_border" title="Spacing" label="Spc" compact disabled />
            <Button icon="bookmark_border" title="Theme overrides" label="Ove" compact disabled />
            <Button icon="bookmark_border" title="Full Theme" label="Thm" compact />
          </div>
          <div
            style={{
              width: '100%',
              // flexGrow: 1,
              padding: 16,
              paddingLeft: 4,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <textarea
              style={styleArea}
              value={this.state.theme}
              onChange={this.handleThemeChange}
              onFocus={this.props.onThemeEditing(true)}
              onBlur={this.props.onThemeEditing(false)}
            />
            <button onClick={() => this.props.onChangeTheme(this.state.theme)}>Apply</button>
          </div>
        </div>

        <div
          style={{
            width: 130,
            padding: '16px 8px 16px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Paper
            style={{
              backgroundColor: 'lightgoldenrodyellow',
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            <Link
              icon="announcement"
              title="Material-UI V1 support announcement"
              label="Material-UI V1 support announcement"
              href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
            />
            <p
              style={{
                margin: 4,
                textAlign: 'center',
                fontStyle: 'italic',
                fontSize: 11,
              }}
            >
              Vote for the most useful features
            </p>
            <p style={{ textDecoration: 'none', margin: 'auto', textAlign: 'center' }}>
              <a
                href="https://app.qpointsurvey.com/s.aspx?c=F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'> HERE <'}
              </a>
            </p>
          </Paper>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: -8 }}>
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

AddonPanel.propTypes = propTypes;
AddonPanel.defaultProps = defaultProps;
AddonPanel.contextTypes = contextTypes;
