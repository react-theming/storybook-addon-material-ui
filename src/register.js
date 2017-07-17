import React from 'react';
import addons from '@storybook/addons';
import PanelContainer from './containers/PanelContainer';
import { ADDON_ID, PANEL_ID } from './';


import injectTapEventPlugin from 'react-tap-event-plugin';
function inject() {
    try {
        injectTapEventPlugin();
    } catch (err) {
        console.warn(err);
    }
}
inject();

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();
    addons.addPanel(PANEL_ID, {
        title: 'Material-UI',
        render: () => <PanelContainer channel={channel} api={api} />,
    });
});
