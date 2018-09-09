import React from 'react';
import PropTypes from 'prop-types';
// import images from './svg_package';
import FallbackIcon from '@material-ui/icons/Help'

const images = {

}

const iconStyle = {
  width: 18,
  opacity: 0.6,
  marginRight: 8,
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  outline: 'none',
  padding: 0,
  margin: 4,
  display: 'flex',
  alignItems: 'center',
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif', // eslint-disable-line
  cursor: 'pointer',
  fontSize: 12,
  textDecoration: 'none',
  color: 'black',
};

const selectStyle = {
  ...buttonStyle,
  border: '#d9d9d9 1px solid',
  borderRadius: 2,
  backgroundColor: '#e8e8e8',
  padding: 2,
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
  fontSize: 14,
  width: '100%',
};

const optionsStyle = {
  backgroundColor: '#fcfcfc',
  height: 50,
  //    border: '#2e63ac 4px solid',
};

export function Button({ icon, label, title, onClick, compact, disabled }) {
  // const iconStyleAply = iconStyle;
  const iconOverride = !label || compact ? { margin: 0 } : {};
  // if (!label || compact) iconStyleAply.margin = 0;

  return (
    <button
      style={{ ...buttonStyle, ...(disabled && { opacity: 0.5 }) }}
      title={title}
      onClick={onClick}
    >
      <img src={images[icon]} alt={images[icon]} style={{ ...iconStyle, ...iconOverride }} />
      {(!compact && label) || ''}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export function Link({ icon, label, title, href }) {
  return (
    <a href={href} style={buttonStyle} title={title} target="_blank" rel="noopener noreferrer">
      <img src={images[icon]} alt={images[icon]} style={iconStyle} />
      {label}
    </a>
  );
}

Link.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
};

export function CheckBox({ checked, label, title, onToggle }) {
  const toggle = () => onToggle(!checked);
  const selectTitle = is => (is ? title[1] : title[0]);
  const titleString = typeof title === 'string' ? title : selectTitle(checked);

  return (
    <button style={buttonStyle} title={titleString} onClick={toggle}>
      <img
        src={checked ? images.check_box : images.check_box_outline_blank}
        alt="check"
        style={iconStyle}
      />
      {label}
    </button>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onToggle: PropTypes.func,
};

export function Toggle({ checked, label, title, onToggle }) {
  const toggle = () => onToggle(!checked);
  const selectTitle = is => (is ? title[1] : title[0]);
  const titleString = typeof title === 'string' ? title : selectTitle(checked);

  return (
    <button style={{ ...buttonStyle, margin: 0 }} title={titleString} onClick={toggle}>
      <img
        src={checked ? images.toggle_on : images.toggle_off}
        alt="check"
        style={{ ...iconStyle, width: 26, marginRight: 4, opacity: checked ? 0.7 : 0.6 }}
      />
      <span style={{ height: 18 }}>{label}</span>
    </button>
  );
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onToggle: PropTypes.func,
};

export function Dropdown({ selected, list, title, onSelect }) {
  const options = list.map((val, ind) => (
    <option value={ind} key={list[ind]} style={optionsStyle}>
      {val}
    </option>
  ));
  const select = event => onSelect(parseInt(event.target.value, 10));

  return (
    <select value={selected} onChange={select} style={selectStyle} title={title}>
      {options}
    </select>
  );
}

Dropdown.propTypes = {
  selected: PropTypes.number,
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};

const paperStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 6px',
  // padding: '8px 8px 8px 16px',
  borderRadius: 2,
  boxSizing: 'border-box',
  fontFamily:
    '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif', // eslint-disable-line
  fontSize: 12,
  marginBottom: 10,
};

export function Paper({ children, style }) {
  return <div style={{ ...paperStyle, ...style }}>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape(),
};

const tagStyle = {
  backgroundColor: 'rgb(224, 224, 224)',
  border: 'black',
  borderRadius: 11,
  display: 'flex',
  alignItems: 'center',
  fontSize: 11,
  cursor: 'pointer',
};

const avaStyle = {
  width: 22,
  height: 22,
  borderRadius: 11,
  backgroundColor: 'rgb(188, 188, 188)',
  color: '#efefef',
  fontSize: 14,
  fontWeight: 600,
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export function Tag({ label, onClick }) {
  return (
    <div style={tagStyle} onClick={onClick}>
      <div style={avaStyle}>
        <span>{label[0] || '!'}</span>
      </div>
      <span style={{ margin: '0px 12px 0px 6px', height: 17 }}>{label}</span>
    </div>
  );
}

Paper.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
