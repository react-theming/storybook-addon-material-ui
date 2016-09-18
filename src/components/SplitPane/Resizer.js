import React, { Component, PropTypes } from 'react';


class Resizer extends Component {
    constructor(...args) {
        super(...args);

        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onMouseDown(event) {
        this.props.onMouseDown(event);
    }

    render() {
        const { split, className } = this.props;
        const classes = ['Resizer', split, className];
        return (
            <div className={classes.join(' ')}

                 onMouseDown={this.onMouseDown}
             >
                 <div
                    style={{
                        left: 8,
                        position: 'relative',
                        width: 16,
                        height: '100%',
                        zIndex: 10,
                        backgroundColor: 'rgba(175, 175, 175, 0)',
                        cursor: 'col-resize',
                    }}
                 >

                 </div>
             </div>
        );
    }
}

Resizer.propTypes = {
    onMouseDown: PropTypes.func.isRequired,
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default Resizer;
