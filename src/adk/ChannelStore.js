import addons from '@storybook/addons';

export default class ChannelStore {
  constructor(EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK) {
    this.store = {};
    this.subscriber = () => {};
    this.channel = addons.getChannel();

    this.connect = () => {
      this.channel.on(EVENT_ID_INIT, this.onInitChannel);
      this.channel.on(EVENT_ID_DATA, this.onDataChannel);
    };
    this.emit = data => this.channel.emit(EVENT_ID_BACK, data);
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

  onData = subscriber => {
    this.subscriber = subscriber;
  };

  send = data => {
    console.log('TCL: ChannelStore -> data', data);
    this.emit(data);
  };

  disconnect = () => {
    this.removeInit();
    this.removeData();
  };
}
