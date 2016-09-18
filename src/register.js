import React from 'react';
import addons from '@kadira/storybook-addons';
import PanelConteiner from './containers/PanelConteiner.jsx';
import { ADDON_ID, PANEL_ID } from './';

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();
    console.info(PANEL_ID);
    addons.addPanel(PANEL_ID, {
        title: 'Material-UI',
        render: () => <PanelConteiner channel={channel} />,
    });
});
