import addons from '@storybook/addons';

export default class ChannelStore {
  constructor({
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    name = 'store',
    initData = {},
    isPanel = false,
  }) {
    this.store = initData;
    this.name = name;
    this.subscriber = () => {};
    this.onConnectedFn = () => {};
    this.channel = addons.getChannel();

    this.connect = () => {
      this.channel.on(EVENT_ID_INIT, this.onInitChannel);
      this.channel.on(isPanel ? EVENT_ID_DATA : EVENT_ID_BACK, this.onDataChannel);
      this.onConnectedFn();
    };
    this.emit = data => this.channel.emit(isPanel ? EVENT_ID_BACK : EVENT_ID_DATA, data);
    this.init = data => this.channel.emit(EVENT_ID_INIT, data);
    this.removeInit = () =>
      this.channel.removeListener(EVENT_ID_INIT, this.onInitChannel);
    this.removeData = () =>
      this.channel.removeListener(EVENT_ID_DATA, this.onDataChannel);
  }

  onInitChannel = initData => {
    this.store = initData;
    this.subscriber(this.store);
  };

  onDataChannel = updData => {
    this.store = {
      ...this.store,
      ...updData
    };
    this.subscriber(this.store);
  };

  onData = subscriberFn => {
    this.subscriber = subscriberFn;
  };

  onConnected = onConnectedFn => {
    this.onConnectedFn = onConnectedFn;
  };

  send = data => {
    this.store = {
      ...this.store,
      ...data
    };
    this.emit(this.store);
    this.subscriber(this.store);
  };

  sendInit = data => {
    this.init(data);
  };

  disconnect = () => {
    this.removeInit();
    this.removeData();
  };
}
