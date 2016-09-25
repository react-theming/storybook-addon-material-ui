import React from 'react';
import Toggle from 'material-ui/Toggle';

const defaultProps = {
    scale: 0.7,
};

const propTypes = {
    scale: React.PropTypes.number,
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
