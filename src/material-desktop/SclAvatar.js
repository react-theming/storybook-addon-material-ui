import React from 'react';

import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const defaultProps = {
    scale: 0.8,
};

const propTypes = {
    scale: React.PropTypes.number,
    text: React.PropTypes.string,
};

export default function SclAvatar(props) {
    const style = {
        transform: `scale(${props.scale})`,
        transformOrigin: 'left',
//        left: -95 * (1 - props.scale) / 2,
//        position: 'absolute',
    };
    const chipProps = Object.assign({}, props);
    delete chipProps.text;
    return (
      <div>
        <div style={style} >
          <Chip {...chipProps} >

            {<Avatar>{props.text[0].toUpperCase()}</Avatar>}
            {props.text}
          </Chip>

        </div>
      </div>
    );
}
SclAvatar.defaultProps = defaultProps;
SclAvatar.propTypes = propTypes;
