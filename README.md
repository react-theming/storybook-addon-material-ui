[![Codacy Badge](https://api.codacy.com/project/badge/Grade/721efbed8ff544c2adbd996108e84165)](https://app.codacy.com/gh/react-theming/storybook-addon-material-ui?utm_source=github.com&utm_medium=referral&utm_content=react-theming/storybook-addon-material-ui&utm_campaign=Badge_Grade)
[![GitHub version](https://badge.fury.io/gh/react-theming%2Fstorybook-addon-material-ui.svg)](https://badge.fury.io/gh/react-theming%2Fstorybook-addon-material-ui)
[![npm version](https://badge.fury.io/js/storybook-addon-material-ui.svg)](https://badge.fury.io/js/storybook-addon-material-ui)
[![Live demo](https://img.shields.io/badge/Live%20Demo-%20Storybook-brightgreen.svg)](https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel)

#  Storybook Addon Material-UI
The core of [**React Theming**](https://github.com/react-theming/react-theming) project


[<img src="https://raw.githubusercontent.com/react-theming/storybook-addon-material-ui/master/docs/logos/Storybook.png" align="left" class="logo" height="60" title="Storybook Addon" alt="Storybook Addon" />](https://storybooks.js.org/docs/react-storybook/addons/addon-gallery/)
Provides development environment which helps creating [Material-UI Components](http://www.material-ui.com/). This is addon for [React Storybook](https://github.com/storybooks/react-storybook) which wraps your components into MuiThemeProvider. This accelerates and simplifies the [development](#getting-started-bookmark_tabs) process for Material-UI based applications.

You can use this [project's demo page](https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel) to discover `Material-UI Theme Settings` for any component and  create your `own new themes` right online. But to take [full advantage](#features-dizzy) of this project [run it locally](#quick-start) in your work environment.

[![screen1](docs/WatchMe.gif)](https://raw.githubusercontent.com/react-theming/storybook-addon-material-ui/master/docs/WatchMe.gif)

## Features :dizzy:

[![Live demo](https://img.shields.io/badge/Live%20Demo-%20Storybook-brightgreen.svg)](https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel)

- Wrapped in the theme provider. Just start to develop with base light theme.
- Injected TapEvent Plugin. Test on mobile devices.
- Switching themes. See how it looks in one click.
- Creating your custom theme. By code or in visual editor.
- Dynamic visual themes editing. Discover the all avalibale theme properties.
- Google [material color](https://material.google.com/style/color.html#color-color-palette) palette [picker](https://github.com/sm-react/react-material-color-picker)
- Save made changes and download in JSON file
- Part of [React Theming](https://github.com/react-theming/react-theming). Create themable React Components.
- Works with Storybook 3.0

## Quick Start

In order to quick start with the latest `storybook-addon-material-ui` you can check out [create-material-ui-app](https://github.com/react-theming/create-material-ui-app)

It contains the working setup with:

- create-react-app
- Storybook
- Material-UI
- storybook-addon-material-ui

---

## Roadmap :mountain_cableway:

We have many plans and ideas for further development. See [**projects**](https://github.com/react-theming/storybook-addon-material-ui/projects/1) about what kind of features we plan to implement in the future. We create this tool for your convenience and productivity, so we are always happy to [**hear**](https://github.com/react-theming/storybook-addon-material-ui/issues/new) your ideas and wishes.

## Getting Started :bookmark_tabs:

First, install the addon

```shell
npm i storybook-addon-material-ui --save-dev
```

### Storybook 6.1

Add `storybook-addon-material-ui` to the storybook addons:

```js
//.storybook/main.js

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    'storybook-addon-material-ui'
  ],
};
```

Add the decorator to storybook preview:

```js
//.storybook/preview.js

import { muiTheme } from 'storybook-addon-material-ui'

export const decorators = [
	muiTheme()
];

```
> Note : You can switch between the loaded themes. Out of the box, you have two base themes, but you can simply add your custom themes like this:
```js
//.storybook/preview.js

import { muiTheme } from 'storybook-addon-material-ui'

// Create your own theme like this.
// Note: you can specify theme name in `themeName` field. Otherwise it will be displayed by the number.
// you can specify only required fields overriding the `Light Base Theme`
const newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: '#00bcd4',
        alternateTextColor: '#4a4a4a',
        canvasColor: '#616161',
        textColor: '#bdbdbd',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};


export const decorators = [
	muiTheme([newTheme])
];

```
or even import from elsewhere
```js
//.storybook/preview.js

import { muiTheme } from 'storybook-addon-material-ui'

import theme1 from './src/theme/theme1'
import theme2 from './src/theme/theme2'

export const decorators = [
	muiTheme([theme1, theme2])
];

```

### Storybook 5 (and older versions)
Now, write your stories with Material-UI Addon. By default your stories will be provided with [`Light Base Theme`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js) and [`Dark Base Theme`](https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/darkBaseTheme.js)

```js
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';

// Import some examples from react-theming https://github.com/react-theming/react-theme-provider/blob/master/example/
import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

storiesOf('Material-UI', module)
// Add the `muiTheme` decorator to provide material-ui support to your stories.
// If you do not specify any arguments it starts with two default themes
// You can also configure `muiTheme` as a global decorator.
    .addDecorator(muiTheme())
    .add('Card Example Controlled', () => (
            <CardExampleControlled />
        ))
    .add('Raised Button Example Simple', () => (
            <RaisedButtonExampleSimple />
        ))
    .add('Date Picker Example Simple', () => (
            <DatePickerExampleSimple />
        ));
```
> Note : You can switch between the loaded themes. Out of the box, you have two base themes, but you can simply add your custom themes like this:

```js
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import {muiTheme} from 'storybook-addon-material-ui';

import CardExampleControlled from '../CardExampleControlled.jsx';
import RaisedButtonExampleSimple from '../RaisedButtonExampleSimple.jsx';
import DatePickerExampleSimple from '../DatePickerExampleSimple.jsx';

// Create your own theme like this.
// Note: you can specify theme name in `themeName` field. Otherwise it will be displayed by the number.
// you can specify only required fields overriding the `Light Base Theme`
const newTheme = {
    themeName: 'Grey Theme',
    palette: {
        primary1Color: '#00bcd4',
        alternateTextColor: '#4a4a4a',
        canvasColor: '#616161',
        textColor: '#bdbdbd',
        secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
        disabledColor: '#757575',
        accent1Color: '#607d8b',
    },
};



storiesOf('Material-UI', module)
    .addDecorator(muiTheme([newTheme]))
    .add('Card Example Controlled', () => (
            <CardExampleControlled />
        ))
    .add('Raised Button Example Simple', () => (
            <RaisedButtonExampleSimple />
        ))
    .add('Date Picker Example Simple', () => (
            <DatePickerExampleSimple />
        ));


```

## Feedback

**You can left your opinion about this project via anonymous [survey](https://app.qpointsurvey.com/s.aspx?c=**F2VOSpTXOlnHHqMaZKSSV5a1ylaCDoRfhut3oNCox34~**).**


## Query string parameters

As you select themes and other options it stores in adress bar line. So this state is retained when you refresh the page and you can use direct links to the desired states.

```
http://localhost:9001/?theme-ind=0&theme-sidebar=true&theme-full=true
```

## CONTRIBUTING :raising_hand:

[![@airbnb](https://img.shields.io/badge/code%20style-Airbnb-brightgreen.svg)](./.eslintrc)

### :wrench: Developers:

Our team welcome all contributing, testing, bug fixing. If you would like
to help contribute to the project feel free to make an issue, PR or get in touch with me.

### :ribbon: Designers:

We would really welcome the involvement of designers in this project. We are very interested in your opinion about working with this tool, the possibility of joint work of the designer and developer as well as its appearance and capabilities

#### Credits
[![@UsulPro](./twitter_button.png)](https://twitter.com/usulpro)
[![@UsulPro](https://img.shields.io/badge/github-UsulPro-blue.svg)](https://github.com/UsulPro)
[![@react-theming](https://img.shields.io/badge/github-smARTLight-red.svg)](https://github.com/react-theming)

