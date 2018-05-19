import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';


export default class MaterialAppExampleProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    render() {
        return (
          <div
            style={{
                margin: '20px 100px',
                minWidth: 400,
                maxWidth: 800,
                display: 'flex',
                justifyContent: 'center',
            }}
          >
            <Card style={{ width: '100%' }} >
              <CardMedia style={{ marginTop: 16 }}>
                <LinearProgress mode="indeterminate" />
              </CardMedia>
              <CardMedia>
                <div
                  style={{
                      textAlign: 'center',
  //                    height: 100,
                      borderTop: '1px red solid',
                      borderBottom: '1px red solid',
                      padding: '16px 0px',
                  }}
                >
                  <span
                    style={{
                        fontVariant: 'small-caps',
                        fontWeight: 'bold',
                    }}
                  >
                    waiting for contributors
                  </span>
                </div>
              </CardMedia>
              <CardActions
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '16px 0px',
                }}
              >
                <a href="https://github.com/react-theming/storybook-addon-material-ui/fork" target="blank">
                  <Button variant="raised" label="I'm in" color="primary" />
                </a>
                <a href="https://github.com/react-theming/storybook-addon-material-ui/subscription" target="blank">
                  <Button variant="raised" label="for tomorrow" color="secondary" />
                </a>
              </CardActions>
            </Card>
          </div>
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
