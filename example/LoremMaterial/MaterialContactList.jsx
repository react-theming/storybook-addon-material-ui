import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import BrendanLim from './images/ok-128.jpg';
import EricHoffman from './images/kolage-128.jpg';
import GraceNg from './images/uxceo-128.jpg';
import KeremSuer from './images/kerem-128.jpg';
import RaquelParrado from './images/raquelromanp-128.jpg';

import ChelseaOtakan from './images/chexee-128.jpg';
import JamesAnderson from './images/jsa-128.jpg';

import { pinkA200, transparent } from '@material-ui/core/styles/colors';
import Paper from 'material-ui/Paper';

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
              <List>
                <Subheader>Contacts List</Subheader>
                <Divider />
                <ListItem
                  primaryText="James Anderson"
                  rightAvatar={<Avatar src={JamesAnderson} />}
                  secondaryText="(503) 123 - 9876"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      A
                    </Avatar>
                  }
                />
                <ListItem
                  primaryText="Chelsea Atakan"
                  rightAvatar={<Avatar src={ChelseaOtakan} />}
                  secondaryText="(650) 213 - 4123"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    />
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Eric Hoffman"
                  rightAvatar={<Avatar src={EricHoffman} />}
                  secondaryText="(909) 412 - 1252"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      H
                    </Avatar>
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Brendan Lim"
                  rightAvatar={<Avatar src={BrendanLim} />}
                  secondaryText="(650) 555 - 1234"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      L
                    </Avatar>
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Grace Ng"
                  rightAvatar={<Avatar src={GraceNg} />}
                  secondaryText="(820) 612 - 8273"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      N
                    </Avatar>
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Chelsea Otakan"
                  rightAvatar={<Avatar src={ChelseaOtakan} />}
                  secondaryText="(650) 213 - 4123"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      O
                    </Avatar>
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Raquel Parrado"
                  rightAvatar={<Avatar src={RaquelParrado} />}
                  secondaryText="(920) 223 - 1569"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      P
                    </Avatar>
                  }
                />
                <Divider />
                <ListItem
                  primaryText="Kerem Suer"
                  rightAvatar={<Avatar src={KeremSuer} />}
                  secondaryText="(529) 527 - 2834"
                  leftAvatar={
                    <Avatar
                      color={pinkA200} backgroundColor={transparent}
                      style={{ left: 8 }}
                    >
                      S
                    </Avatar>
                  }
                />
              </List>
            </Paper>
          </div>
        );
    }
}

MaterialAppExampleProgress.contextTypes = {
    muiTheme: PropTypes.object.isRequired,
};
