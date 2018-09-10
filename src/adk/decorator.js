import ChannelStore from './ChannelStore';

let decoratorStore;

export const createStore = (...args) => {
  decoratorStore = new ChannelStore(...args);
  return decoratorStore;
};

export const getStore = () => decoratorStore;
