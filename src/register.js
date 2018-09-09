import React from 'react';
import addons from '@storybook/addons';
import PanelContainer from './containers/PanelContainer';
import {
  EVENT_ID_INIT,
  EVENT_ID_DATA,
  EVENT_ID_BACK,
  ADDON_ID,
  PANEL_ID
} from './config';
import { createStore } from './adk/panel';

addons.register(ADDON_ID, api => {
  // const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Material-UI',
    render: () => (
      <PanelContainer
        store={createStore(EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK)}
        // channel={channel}
        api={api}
      />
    )
  });
});
