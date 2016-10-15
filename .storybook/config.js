import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'sm-react',
  url: 'https://github.com/sm-react/storybook-addon-material-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

storybook.configure(() => require('./../example/stories/'), module);
