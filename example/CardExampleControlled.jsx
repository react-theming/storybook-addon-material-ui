import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import FlatButton from '@material-ui/core/Button';
import Toggle from '@material-ui/core/Switch';

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    render() {
        return (
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://www.material-ui.com/images/ok-128.jpg"
              actAsExpander
              showExpandableButton
            />
            <Card>
              <Toggle
                toggled={this.state.expanded}
                onToggle={this.handleToggle}
                labelPosition="right"
                label="This toggle controls the expanded state of the component."
              />
            </Card>
            <CardMedia
              expandable
              overlay={<Card title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img alt="Nature" src="http://www.material-ui.com/images/nature-600-337.jpg" />
            </CardMedia>
            <Card title="Card title" subtitle="Card subtitle" expandable />
            <Card expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </Card>
            <CardActions>
              <FlatButton label="Expand" onTouchTap={this.handleExpand} />
              <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
            </CardActions>
          </Card>
        );
    }
}
