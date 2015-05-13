'use strict';

import React from 'react';

export default React.createClass({

  // getDefaultProps() {
  //   return {
  //     messages: []
  //   };
  // },

  onClick() {
    this.props.flux.getActions('messages').newMessage('Hello, World!');
  },

  render() {
    let messages = this.props.messages.map((message, idx) => {
      return <li key={idx}>{message.content}</li>;
    });

    return (
      <div>
        <ul>
          {messages}
        </ul>
        <button onClick={this.onClick}>Button</button>
      </div>
    );
  }

});
