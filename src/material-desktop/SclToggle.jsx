import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '@material-ui/core/Switch';

const defaultProps = {
  scale: 0.7,
};

const propTypes = {
  scale: PropTypes.number,
};

export default function SclToggle(props) {
  const style = {
    transform: `scale(${props.scale})`,
  };
  return (
    <div style={style} >
      <Toggle {...props} />
    </div>
  );
}
SclToggle.defaultProps = defaultProps;
SclToggle.propTypes = propTypes;
