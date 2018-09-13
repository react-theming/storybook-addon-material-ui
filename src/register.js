import React from 'react';
import addons from '@storybook/addons';
import AddonPanel from './UI/AddonPanel';
import { ADDON_ID, PANEL_ID } from './config';

addons.register(ADDON_ID, api => {
  addons.addPanel(PANEL_ID, {
    title: 'Material-UI',
    render: ({ active }) => (
      <AddonPanel api={api} active={active} panel pointName="addon panel" />
    )
  });
});
