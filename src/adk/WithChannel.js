import React from 'react';

import ChannelStore from './ChannelStore';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withChannel = ({
  EVENT_ID_INIT,
  EVENT_ID_DATA,
  EVENT_ID_BACK,
  initData,
  panel
}) => WrappedComponent =>
  class extends React.Component {
    static displayName = `WithChannel(${getDisplayName(WrappedComponent)})`;

    state = {
      data: initData || this.props.initData
    };

    store = new ChannelStore({
      EVENT_ID_INIT,
      EVENT_ID_DATA,
      EVENT_ID_BACK,
      name: this.props.pointName,
      initData: initData || this.props.initData,
      isPanel: panel || this.props.panel
    });

    componentDidMount() {
      this.store.onData(this.onData);
      if (this.state.data) {
        this.store.onConnected(() => this.store.send(this.state.data));
      }
      this.store.connect();
    }

    componentWillUnmount() {
      this.store.disconnect();
    }

    onData = data => this.setState({ data });

    render() {
      const { pointName, initData, active, ...props } = this.props;
      if (active === false) return null;
      return (
        <WrappedComponent
          data={this.state.data}
          sendData={this.store.send}
          store={this.store}
          {...props}
        />
      );
    }
  };

export default withChannel;
