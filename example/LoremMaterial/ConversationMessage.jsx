import React from 'react';
import PropTypes from 'prop-types';
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
        var messageComponent, authorTypeStyle, messageStyle;
        if(this.state.authorType === authorTypes.sender ) {
          authorTypeStyle = {
            float : 'right'
          }
          messageStyle = {
            float : 'right',
            margin : 10
          }
          return (
            <CardText>
              <span style={messageStyle}>{this.state.messageTime}</span>
              <Chip style={authorTypeStyle} >
                <Avatar src={this.state.authorImage} />
                <div>{this.state.text}</div>
              </Chip>              
            </CardText> 
          );
        } else {
          authorTypeStyle = {
            float : 'left'
          }
          messageStyle = {
            float : 'left',
            margin : 10
          }
          return (
            <CardText>
              <Chip style={authorTypeStyle} >
                <Avatar src={this.state.authorImage} />
                <div>{this.state.text}</div>
              </Chip>            
              <span style={messageStyle}>{this.state.messageTime}</span>
            </CardText>
            
          );
        }
        
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
