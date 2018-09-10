import React from 'react';
import PropTypes from 'prop-types';

// class WithChannel extends React.Component {
//   state = {
//     data: { lala: 123 }
//   };

//   render() {
//     const { component: Component, extProps } = this.props;
//     const { data } = this.state;
//     const dname = Component.displayName;
//     console.log('TCL: WithChannel -> render -> dname', dname);
//     return <Component {...extProps} />;
//   }
// }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withChannel(WrappedComponent) {
  class WithChannel extends React.Component {
    state = {
      data: 123
    };

    render() {
      return <WrappedComponent />;
    }
  }
  WithChannel.displayName = `WithSubscription(${getDisplayName(
    WrappedComponent
  )})`;
  return WithChannel;
}

// const withChannel = params => Component => props => (
//   <WithChannel extProps={props} component={Component} />
// );

export default withChannel;
