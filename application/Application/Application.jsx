'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';
import Messages from '../components/Messages.jsx';


export default React.createClass({
  render() {
    return (
      <FluxComponent flux={this.props.flux}>
        <p>Messages: Much better</p>
        <FluxComponent connectToStores={['messages']}>
          <Messages />
        </FluxComponent>
      </FluxComponent>
    );
  }
});
