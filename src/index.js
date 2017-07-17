// note: addons, panels and events get unique names using a prefix
export const ADDON_ID = 'sm/storybook-addon-material-ui';
export const PANEL_ID = `${ADDON_ID}/material-panel`;
export const EVENT_ID_INIT = `${ADDON_ID}/material-event/init`;
export const EVENT_ID_DATA = `${ADDON_ID}/material-event/data`;
export const CSS_CLASS = 'sb-addon-material-ui';


export { register } from './register';
export { muiTheme } from './muiTheme';
