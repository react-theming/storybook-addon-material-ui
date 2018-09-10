import React from 'react';
import addons from '@storybook/addons';
import AddonPanel from './UI/AddonPanel';
import {
  ADDON_ID,
  PANEL_ID
} from './config';
import { createStore } from './adk/panel';


addons.register(ADDON_ID, api => {
  // const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Material-UI',
    render: () => (
      <AddonPanel
        api={api}
        panel
        pointName="addon panel"
      />
    )
  });
});
