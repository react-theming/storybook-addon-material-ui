import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
    name: 'React Theming',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: false,
    showSearchBox: false,
    downPanelInRight: false,
});

storybook.configure(
    () => {
      require('../src/stories');
      require('../src/ThemeSwitcher.story');
    },
    module
);
