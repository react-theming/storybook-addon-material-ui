import React from 'react';

/** note: Tweet Button Parameter Reference **
 * all props mirrow this param list:
 * https://dev.twitter.com/web/tweet-button/parameters
 */

const propTypes = {
    text: React.PropTypes.string,
    url: React.PropTypes.string,
    hashtags: React.PropTypes.arrayOf(React.PropTypes.string),
    screen_name: React.PropTypes.string,
    via: React.PropTypes.string,
    related: React.PropTypes.arrayOf(React.PropTypes.string),
    large: React.PropTypes.bool,
    lang: React.PropTypes.string,
    dnt: React.PropTypes.bool,
    src: React.PropTypes.func,
};

const defaultProps = {
    text: '',
    url: '',
    hashtags: ['reactjs'],
    screen_name: null,
    via: '',
    related: null,
    large: false,
    lang: 'en',
    dnt: false,
    src: () => {},
};

export default function TwitterButton(props) {
    const tweetSrc =
    '\nhttps://platform.twitter.com/widgets/tweet_button.html?' +
    `${props.large ? '\n&size=l' : ''}` +
    `${props.url ? `\n&url=${props.url}` : ''}` +
    `${props.via ? `\n&via=${props.via}` : ''}` +
    `${props.text ? `\n&text=${props.text}` : ''}` +
    `${props.hashtags ? `\n&hashtags=${props.hashtags.reduce((p, n) => `${p},${n}`)}` : ''}` +
    `${props.related ? `\n&related=${props.related.reduce((p, n) => `${p},${n}`)}` : ''}\n`;
    props.src(tweetSrc);
    return (
      <iframe
        src={tweetSrc}
        width={props.large ? 80 : 62}
        height={props.large ? 37 : 28}
        title="Twitter Tweet Button"
        style={{ border: 0, overflow: 'hidden' }}
      >
      </iframe>
    );
}

TwitterButton.propTypes = propTypes;
TwitterButton.defaultProps = defaultProps;
