import React from 'react';
import PropTypes from 'prop-types';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions } from 'material-ui/Card';

class HorizontalLinearStepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finished: false,
            stepIndex: 0,
        };
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'You\'re a long way from home sonny jim!';
        }
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        const labelProps = {
          style: { color: this.context.muiTheme.palette.textColor },
        }

        return (
          <div
            style={{
                margin: '20px 100px',
                minWidth: 700,
                maxWidth: 1200,
                display: 'flex',
                justifyContent: 'center',
            }}
          >
            <Card>
              <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Stepper activeStep={stepIndex}>
                  <Step>
                    <StepLabel><span {...labelProps} >Select options...</span></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel><span {...labelProps} >Review selections</span></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel><span {...labelProps} >Confirm</span></StepLabel>
                  </Step>
                </Stepper>
                <CardActions>
                  <div style={contentStyle}>
                    {finished ? (
                      <p>
                        <RaisedButton
                          label={'Click to Reset'}
                          default
                          onTouchTap={(event) => {
                              event.preventDefault();
                              this.setState({ stepIndex: 0, finished: false });
                          }}
                        />
                      </p>
                    ) : (
                      <div>
                        <p>{this.getStepContent(stepIndex)}</p>
                        <div style={{ margin: '12px 0' }}>
                          <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onTouchTap={this.handlePrev}
                            style={{ marginRight: 12 }}
                          />
                          <RaisedButton
                            label={stepIndex === 2 ? 'Finish' : 'Next'}
                            primary
                            onTouchTap={this.handleNext}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardActions>
              </div>
            </Card>
          </div>
        );
    }
}

HorizontalLinearStepper.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

export default HorizontalLinearStepper;
