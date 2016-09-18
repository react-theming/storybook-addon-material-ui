import React from 'react';
import addons from '@kadira/storybook-addons';
import PanelConteiner from './containers/PanelConteiner';
import { ADDON_ID, PANEL_ID } from './';

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();
    addons.addPanel(PANEL_ID, {
        title: 'Material-UI',
        render: () => <PanelConteiner channel={channel} />,
    });
});
