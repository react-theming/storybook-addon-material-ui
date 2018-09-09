import ChannelStore from './ChannelStore';

let panelStore;

export const createStore = (EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK) => {
  panelStore = new ChannelStore(EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK);
  return panelStore;
};

export const getStore = () => panelStore;
