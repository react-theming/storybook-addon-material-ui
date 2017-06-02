import React from 'react';
import PropTypes from 'prop-types';

/** note: Tweet Button Parameter Reference **
 * all props mirrow this param list:
 * https://dev.twitter.com/web/tweet-button/parameters
 */

const propTypes = {
    user: PropTypes.string,
    repo: PropTypes.string,
    type: PropTypes.oneOf(['star',
                                 'fork',
                                 'watch',
                                 'issue',
                                 'issueAll',
                                 'download',
                                 'follow',
                                ]),
    src: PropTypes.func,
};

const defaultProps = {
    user: 'facebook',
    repo: 'react',
    type: 'star',
    src: () => {},
};

const TYPES = {
    star: {
        href: '',
        icon: 'octicon-star',
        countHref: '/stargazers',
        api: '#stargazers_count',
        countLabel: '# stargazers on GitHub',
        label: 'Star',
        width: 90,
    },
    fork: {
        href: '/fork',
        icon: 'octicon-repo-forked',
        countHref: '/network',
        api: '#forks_count',
        countLabel: '# forks on GitHub',
        label: 'Fork',
        width: 90,
    },
    watch: {
        href: '',
        icon: 'octicon-eye',
        countHref: '/watchers',
        api: '#subscribers_count',
        countLabel: '# watchers on GitHub',
        label: 'Watch',
        width: 120,
    },
    issue: {
        href: '/issues',
        icon: 'octicon-issue-opened',
        countHref: '/issues',
        api: '#open_issues_count',
        countLabel: '# issues on GitHub',
        label: 'Issue',
        width: 120,
    },
    issueAll: {
        href: '/issues',
        icon: 'octicon-issue-closed',
        countHref: '/issues',
        api: '#closed_issues_count',
        countLabel: '# issues on GitHub',
        label: 'Issue',
        width: 120,
    },
    download: {
        href: '/archive/master.zip',
        icon: 'octicon-cloud-download',
        countHref: '/graphs/traffic',
        api: 'traffic/clones#count',
        countLabel: '# clones on GitHub',
        label: 'Download',
        width: 120,
    },
    follow: {
        href: '',
        icon: 'octicon-telescope',
        countHref: '/followers',
        api: '#followers',
        countLabel: '# followers on GitHub',
        label: 'Follow',
        width: 80,
    },
};

export default function GithubButton(props) {
//    const tweetSrc =
//    '\nhttps://platform.twitter.com/widgets/tweet_button.html?' +
//    `${props.large ? '\n&size=l' : ''}` +
//    `${props.url ? `\n&url=${props.url}` : ''}` +
//    `${props.via ? `\n&via=${props.via}` : ''}` +
//    `${props.text ? `\n&text=${props.text}` : ''}` +
//    `${props.hashtags ? `\n&hashtags=${props.hashtags.reduce((p, n) => `${p},${n}`)}` : ''}` +
//    `${props.related ? `\n&related=${props.related.reduce((p, n) => `${p},${n}`)}` : ''}\n`;
//    props.src(tweetSrc);

    const userRepo = `${props.user}${props.repo ? `/${props.repo}` : ''}`
    const githubSrc =
'https://buttons.github.io/buttons.html#' +
`href=https://github.com/${userRepo}${TYPES[props.type].href}` +
`&text=${TYPES[props.type].label}` +
`&data-icon=${TYPES[props.type].icon}` +
`&data-count-api=/repos/${userRepo}${TYPES[props.type].api}` +
`&data-count-href=/${userRepo}${TYPES[props.type].countHref}` +
`&data-count-aria-label=${TYPES[props.type].countLabel}` +
`${props.large ? '\n&data-style=mega' : ''}` +
`&aria-label=${TYPES[props.type].label} ${userRepo} on Github`;

    return (
      <iframe
        src = {githubSrc}
        width={TYPES[props.type].width}
        height={props.large ? 37 : 28}
        title="Github Star Button"
        style={{ border: 0, overflow: 'hidden' }}
      >
      < /iframe>
    );
}

GithubButton.propTypes = propTypes;
GithubButton.defaultProps = defaultProps;

/*

return (
      <iframe
        allowTransparency = "true"
        scrolling = "no"
        frameBorder = "0"
        src = {githubSrc}
        style = {{width: 81, height: 20, border: 'none',}}
      >
      < /iframe>
    );

https://buttons.github.io/buttons.html#
href=https://github.com/waud/waud
&text=Star
&data-count-api=/repos/waud/waud#stargazers_count
&data-count-href=/waud/waud/stargazers&data-count-aria-label=# stargazers on GitHub
&data-style=
&data-icon=octicon-star
&aria-label=Star waud/waud on GitHub


<!-- Place this tag where you want the button to render. -->
<a class="github-button"
href="https://github.com/sm-react/storybook-addon-material-ui/fork"
data-icon="octicon-repo-forked" data-count-href="/sm-react/storybook-addon-material-ui/network"
data-count-api="/repos/sm-react/storybook-addon-material-ui#forks_count"
data-count-aria-label="# forks on GitHub"
aria-label="Fork sm-react/storybook-addon-material-ui on GitHub">
Fork</a>

*/


