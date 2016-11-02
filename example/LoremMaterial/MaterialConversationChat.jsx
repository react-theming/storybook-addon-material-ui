import React from 'react';
import { Card, CardActions, CardMedia, CardHeader } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TwitterButton from '../react-twitter-button';
import GithubButton from '../react-github-button';

import Message from './ConversationMessage.jsx';

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import JamesAndersonAvatar from './images/jsa-128.jpg';
import ChelseaOtakanAvatar from './images/chexee-128.jpg';


const paperStyle = {
    width: 600,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

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
          <Paper style={paperStyle} zDepth={1} >
            <Card>
              <CardHeader
                title="James Anderson"
                subtitle="Online"
                avatar={JamesAndersonAvatar}
              />
              <Message text='Hi' authorType="receiver" authorImage={JamesAndersonAvatar} 
              messageTime="08:40" /><br/>
              
              <Message text='How are you' authorType="receiver" authorImage={JamesAndersonAvatar} 
              messageTime="08:41" /><br/>
              
              <Message text='I am doing good' authorType="sender" authorImage={ChelseaOtakanAvatar} messageTime="08:42" /><br/>
              
              <Message text='How about you ?' authorType="sender" authorImage={ChelseaOtakanAvatar} messageTime="08:43" /><br/>

            </Card>
            <TextField
              hintText="Type a Message" fullWidth={true}
            />
          </Paper>
          </div>
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
