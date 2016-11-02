import React from 'react';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TwitterButton from '../react-twitter-button';
import GithubButton from '../react-github-button';
import {CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const authorTypes = {
  'sender'   : 'sender',
  'receiver' : 'receiver'
};

const chipStyle = {
  margin  : 4,
  float : 'right'
};

export default class MaterialAppExampleProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text : '',
          authorType : '',
          authorImage : '',
          messageTime : ''
        }
        
    }

    componentWillReceiveProps(newProps) {
      this.state.text = newProps.text;
      this.state.authorType = newProps.authorType;
      this.state.authorImage = newProps.authorImage;
      this.state.messageTime = newProps.messageTime;
    }

    render() {
        var messageComponent, authorTypeStyle;
        if(this.state.authorType === authorTypes.sender ) {
          authorTypeStyle = {
            float : 'right'
          }
        } else {
          authorTypeStyle = {
            float : 'left'
          }
        }
        return (
          <CardText>
            <Chip style={authorTypeStyle} >
              <Avatar src={this.state.authorImage} />
              <div>{this.state.text} <sub>{this.state.messageTime}</sub> </div>
            </Chip>            
          </CardText>
          
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
