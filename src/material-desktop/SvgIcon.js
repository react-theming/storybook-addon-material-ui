import React from 'react';

const propTypes = {
    scale: React.PropTypes.number.isRequired,
    path: React.PropTypes.string,
};

const defaultProps = {
    scale: 0.8,
    path: 'material-ui/svg-icons/action/home',
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


export default class SvgIcon extends React.Component {
    constructor(props, context) {
        super(props, context);

        require.ensure([], (require) => {
            const Icon = require('material-ui/svg-icons/action/home');
            this.ActionHome = Icon.default;
        });

        this.scaleProp = {
            style: { transform: `scale(${props.scale})` },
        };
    }

    render() {
        return (
          <div>
            <div {...this.scaleProp} >
              {<this.ActionHome
                color={this.context.muiTheme.palette.secondaryTextColor}
              />}
            </div>
          </div>
        );
    }
}


SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;
SvgIcon.contextTypes = contextTypes;
