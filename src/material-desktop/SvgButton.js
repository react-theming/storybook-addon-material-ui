import React from 'react';
import IconButton from 'material-ui/IconButton';

const propTypes = {
    iconScale: React.PropTypes.number.isRequired,
    icon: React.PropTypes.element.isRequired,
    tooltip: React.PropTypes.string,
    tooltipPosition: React.PropTypes.string,
    width: React.PropTypes.number,
    onTouchTap: React.PropTypes.func,
};

const defaultProps = {
    iconScale: 0.8,
    tooltipPosition: 'top-center',
    width: 32,
};

const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
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
