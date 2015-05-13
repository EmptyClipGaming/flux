'use strict';

import { Actions, Store, Flummox } from 'flummox';
import React from 'react/addons';

class MessageActions extends Actions {
  newMessage(content) {
    return content;
  }
}

class MessageStore extends Store {
  constructor(flux) {
    super();

    const messageActions = flux.getActions('messages');
    this.register(messageActions.newMessage, this.handleNewMessage);
    this.messageCounter = 0;

    this.state = {
      messages: []
    };
  }

  handleNewMessage(content) {
    const id = this.messageCounter++;

    this.setState(
      React.addons.update(this.state, {
        messages: {
          $merge: {
            [id]: {
              content,
              id,
            },
          }
        }
      })
    );
  }
}

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
  }
}

export default Flux;
