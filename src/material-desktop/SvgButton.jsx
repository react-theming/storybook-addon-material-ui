import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const propTypes = {
    iconScale: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    tooltip: PropTypes.string,
    width: PropTypes.number,
    onTouchTap: PropTypes.func,
};

const defaultProps = {
    iconScale: 0.8,
    tooltipPosition: 'top-center',
    width: 32,
    tooltip: '',
    onTouchTap: () => {},
};

const contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};


export default class SvgButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.scaleProp = {
            style: {
                transform: `scale(${props.iconScale})`,
                width: 24,
                margin: '0 auto',
            },
        };
        this.butnProp = {
            style: {
                marginLeft: (24 - props.width) / 2,
                width: props.width,
                display: 'flex',
                justifyContent: 'center',
                overflow: 'hidden',
            },
            title: props.tooltip,
            onTouchTap: props.onTouchTap,
        };
    }

    render() {
        const icon = React.cloneElement(this.props.icon, {
            color: this.context.muiTheme.palette.secondaryTextColor,
        });
        return (
          <div
            style={{
                width: 24,
            }}
          >
            <div {...this.butnProp} >
              <div style={{ width: 48 }}>
                <IconButton
                  tooltip={null}
                  style={{ padding: 0 }}
                >
                  <div>
                    <div {...this.scaleProp} >
                      {icon}
                    </div>
                  </div>
                </IconButton>
              </div>
            </div>
          </div>
        );
    }
}


SvgButton.propTypes = propTypes;
SvgButton.defaultProps = defaultProps;
SvgButton.contextTypes = contextTypes;
