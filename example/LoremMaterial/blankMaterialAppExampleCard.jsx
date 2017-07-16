import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/Button';
import Toggle from 'material-ui/Switch';
import TwitterButton from '../react-twitter-button';
import GithubButton from '../react-github-button';
import hacktoberfestLogo from './hacktoberfest_logo.svg';
import sectionDivider from './section-divider-center.svg';
import octoAvatar from './octo_avatar.png';

import ic_account_balance from './doc/ic_account_balance_black.png';

const Buttons = (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        related={['UsulPro']}
                        hashtags={['reactjs', 'materialui', 'reactstorybook']}
                      />
                  </div>
                );


export default class MaterialAppExampleCard extends React.Component {
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
          <div
            style={{
                margin: '20px 100px',
                minWidth: 700,
                maxWidth: 1200,
                display: 'flex',
                justifyContent: 'center',
            }}
          >
            <style scoped>
              {`
li {
    margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: #ce873d;
  font-weight: bold;
}

              `}
            </style>
            <Card
              expanded={this.state.expanded}
              onExpandChange={this.handleExpandChange}
              style={{ width: '100%' }}
            >
              <CardHeader
                title="New Contributor"
                subtitle="#good_first_PR"
                avatar={octoAvatar}
                actAsExpander
                showExpandableButton
              />
              <CardText>
                <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  labelPosition="right"
                  label="Start Hacking"
                />
              </CardText>
              <CardMedia
                expandable
              >
                <div style={{ display: 'flex', margin: '10px 20px' }}>
                  <div style={{ minWidth: 300 }}>
                    <a href="https://hacktoberfest.digitalocean.com/" target="blank">
                      <img src={hacktoberfestLogo} alt="H" />
                    </a>
                  </div>
                  <div style={{ margin: '10px 50px' }}>
                    <h3>Event details</h3>
                    <ul>
                      <li style={{ paddingBottom: 10 }} >
                        Hacktoberfest is <b>open to everyone</b> in our global community!
                      </li>
                      <li style={{ paddingBottom: 10 }} >
                        Pull requests can be made in <b>any GitHub-hosted repositories/projects.</b>
                      </li>
                      <li style={{ paddingBottom: 10 }} >
                        You can sign up anytime between October 1 and October 31.
                      </li>
                    </ul>
                    <h3>Rules</h3>
                    <p>
                      To get a shirt, you must make <b>four pull requests</b>
                      between October 1-31. Pull requests can be to any public
                      repo on GitHub, not just the ones we've highlighted. Pull
                      requests reported by maintainers as spam or that are
                      automated will be marked as invalid and won’t count towards
                      the shirt.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ maxWidth: 400, minWidth: 100, width: '50%' }}>
                    <img src={sectionDivider} alt="Section divider center" />
                  </div>
                </div>
              </CardMedia>
              <CardTitle title="Hacktoberfest" subtitle="What you need to know" expandable />
              <CardText expandable >
                <div>

                  <h3>Getting Started</h3>
                  <ul>
                    <li>
                      <p>
                        <a
                          href="https://www.digitalocean.com/community/tutorials/an-introduction-to-contributing-to-open-source-projects-and-installing-git"
                        >
                          An Introduction to Open Source (Tutorial Series)
                        </a>
                        <br />by Lisa Tagliaferri
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="https://guides.github.com/activities/contributing-to-open-source/" target="blank">
                          Contributing to Open Source on GitHub
                        </a>
                        <br />by GitHub
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="http://www.erikaheidi.com/blog/a-beginners-guide-to-open-source-making-your-first-contribution"
                        >
                          A Beginner's Guide to Open Source: The Best Advice for Making your
                          First Contribution
                        </a>
                        <br />by Erika Heidi
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="https://medium.com/@kentcdodds/what-open-source-project-should-i-contribute-to-7d50ecfe1cb4#.2709vufoy"
                        >
                          What open source project should I contribute to?
                        </a>
                        <br />by Kent C. Dodds
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="http://hood.ie/blog/welcoming-communities" target="blank">
                          Welcoming Communities
                        </a>
                        <br />by Gregor Martynus, Hoodie
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="https://the-pastry-box-project.net/charlotte-spencer/2015-september-16"
                        >
                          Lowering the barriers
                        </a>
                        <br />by Charlotte Spencer
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="http://contributor-covenant.org" target="blank">
                          Contributor Covenant: A Code of Conduct for Open Source Projects
                        </a>
                        <br />by Coraline Ada Ehmke
                      </p>
                    </li>
                  </ul>
                </div>
              </CardText>

              <CardText>
                <h2>Material content filling</h2>
                <p style={{ textAlign: 'justify', fontSize: 16 }} >
                  <img src={ic_account_balance} alt="Material" />
                  For easy themes design we required a realistic-looking content.
                  It will be possible to try out different themes and immediately
                  see how they look. For this we feel the need of help by
                  designers and front-end developers in material design.
                  Therefore, we are opening this trend and attract
                  <a href="https://hacktoberfest.digitalocean.com/" target="blank">
                    <b> #hacktoberfest </b>
                  </a>
                  participants. We welcome all who wish to contribute.
                </p>
                <p style={{ textAlign: 'justify', fontSize: 16 }} >
                  We propose to fill this library by adding small pages
                   or applications - each in a separate
                  <a
                    href="https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel"
                  >
                    <span> story</span>
                  </a>
                  . They should be made in the material design style and look like a real application
                   (no need to use real data). We are pleased to see various
                   interesting applications,
                   but you can try your hand at creating something simple.
                </p>
                <div style={{ textAlign: 'justify', fontSize: 16 }} >
                  We do not impose special restrictions to create pages, but please keep the following:
                  <ul>
                    <li>
                      It should be in the
                      <a href="https://material.google.com/" target="blank">
                        <span> Material Design </span>
                      </a>
                      style
                    </li>
                    <li>
                      It should be based on the
                      <a href="http://www.material-ui.com/#/" target="blank">
                        <span> Material-UI </span>
                      </a>
                      library
                    </li>
                    <li>
                      Should look good with different themes
                    </li>
                    <li>
                      The appearance should rely on themes settings
                    </li>
                    <li>
                      Should not copy an already existing
                      <a href="https://react-theming.github.io/storybook-addon-material-ui" target="blank">
                        <span> story </span>
                      </a>
                    </li>
                    <li>
                      Each story in a separate file (or a folder)
                    </li>
                  </ul>
                </div>
                <h3 style={{ textAlign: 'justify', fontSize: 16 }}>
                  to initiate the participation
                  <a href="https://github.com/react-theming/storybook-addon-material-ui/fork" target="blank">
                    <span> fork this project </span>
                  </a>
                  .
                </h3>
                <p style={{ textAlign: 'justify', fontSize: 16 }} >
                  See details
                  <a href="https://github.com/react-theming/storybook-addon-material-ui/issues/19" target="blank">
                    <span> here</span>
                  </a>
                </p>
                <p>
                  {Buttons}
                </p>

              </CardText>
              <CardActions>
                <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
              </CardActions>
            </Card>
          </div>
        );
    }
}
