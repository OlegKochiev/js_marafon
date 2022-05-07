import {
  UI_ELEMETS,
  DEFAULT,
  URLS
} from './consts.js';

import {
  render
} from './render.js';

import {
  API
} from './api.js'

import {
  SocketConnection
} from './socket.js'

let socketHeroku;

const UTILS = {
  async verifyEmail(event) {
    const email = UI_ELEMETS.INPUT_AUTH.value ?? DEFAULT.EMAIL;
    await API.verifyEmail(email);
    render.showModal(UI_ELEMETS.MODAL_CONFIRM);
  },

  setCookie(event) {
    const token = UI_ELEMETS.INPUT_CONFIRM.value;
    setCookie('token', token);
    UTILS.initialize();
    render.hideModal();
  },

  changeName(event) {
    const userName = UI_ELEMETS.INPUT_NAME.value ?? DEFAULT.USER_NAME;
    API.changeUserName(userName);
    render.hideModal();
  },

  sendMessage(event) {
    const message = UI_ELEMETS.INPUT_CHAT.value;
    socketHeroku.sendMessage(message);
    UI_ELEMETS.INPUT_CHAT.value = '';
  },

  initialize() {
    socketHeroku = new SocketConnection(URLS.WEB_SOCKET);
  }
}

export {
  UTILS
}