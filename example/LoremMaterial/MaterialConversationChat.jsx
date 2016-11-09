import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

import Message from './ConversationMessage.jsx';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import JamesAndersonAvatar from './images/jsa-128.jpg';
import ChelseaOtakanAvatar from './images/chexee-128.jpg';


const paperStyle = {
    width: 600,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const textFieldStyle = {
  paddingLeft: 16, 
  paddingRight: 16
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
              <Message text="Hi" authorType="receiver" authorImage={JamesAndersonAvatar}
              messageTime="08:40" /><br/>
              
              <Message text="How are you" authorType="receiver" authorImage={JamesAndersonAvatar}
              messageTime="08:41" /><br/>
              
              <Message text="I am doing good" authorType="sender" authorImage={ChelseaOtakanAvatar} messageTime="08:42" /><br/>
              
              <Message text="How about you ?" authorType="sender" authorImage={ChelseaOtakanAvatar} messageTime="08:43" /><br/>

            </Card>
            <TextField hintText="Type a Message" fullWidth={true} inputStyle={textFieldStyle} 
            hintStyle={textFieldStyle} />

          </Paper>
          </div>
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
