import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TwitterButton from './react-twitter-button';
import GithubButton from './react-github-button';
import smBackground from './smLogoBW.png'

const Buttons = (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <GithubButton
      user="react-theming"
      repo="storybook-addon-material-ui"
      type="star"
    />
    <GithubButton
      user="react-theming"
      repo="storybook-addon-material-ui"
      type="fork"
    />
    {/* */}
    <TwitterButton
      text="Material-UI Visual Theme Editor"
      url="https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel"
      via="UsulPro"
      related={["UsulPro"]}
      hashtags={['reactjs', 'materialui', 'reactstorybook']}
    />
  </div>
);

const SocialButtons = (
  <div
    style={{
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
            <Card style={{ paddingBottom: 0 }}>
              {Buttons}
            </Card>
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
        <img src={smBackground} alt="smARTLight" style={{ opacity: 0.8 }} />
      </CardMedia>
    </Card>
  </div>
);

export default function SupportProject() {
    return SocialButtons;
}
