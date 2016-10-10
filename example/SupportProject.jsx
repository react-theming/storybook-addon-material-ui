import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TwitterButton from '../src/Utils/twitter';
import GithubButton from '../src/Utils/github';
import smBackground from './smLogoBW.png'

const Buttons = (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <GithubButton
                          user="sm-react"
                          repo="storybook-addon-material-ui"
                          type="star"
                      />
                      <GithubButton
                          user="sm-react"
                          repo="storybook-addon-material-ui"
                          type="fork"
                      />
                      {/* */}
                      <TwitterButton
                          text="Material-UI Visual Theme Editor"
                          url="https://sm-react.github.io/storybook-addon-material-ui"
                          via="UsulPro"
                          related={["UsulPro"]}
                          hashtags={['reactjs', 'materialui', 'reactstorybook']}
                      />
                  </div>
                )

const SocialButtons = (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            bottom: 10,
            margin: 'auto',
            width: '100%',
            left: 0,
            position: 'absolute',
          }}
          title="Support This Project"
        >
            <Card
               style={{
                  width: '50%', maxWidth: 500, minWidth: 400, paddingBottom: 0,
               }}
            >
                <CardMedia
                    overlay={
                        <div>

                          <CardText style={{paddingBottom: 0}}>
                            {Buttons}
                          </CardText>
                        </div>
                    }
                    overlayContentStyle={{
                        opacity: 0.78,
                        height: 45,
                        padding: 0,
                        margin: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(188, 188, 188, 0)'
                    }}
                >
                    <img src={smBackground} alt="smARTLight" style={{opacity: 0.8}} />
                </CardMedia>

            </Card>
        </div>
    )

export default function SupportProject() {
    return SocialButtons;
};
