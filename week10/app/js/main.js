import {
  UI_ELEMETS,
  KEYS
} from './consts.js';

import {
  render
} from './render.js';

import {
  API
} from './api.js';

import {
  UTILS
} from './utils.js';

document.addEventListener('click', (event) => { 
  const elem = event.target;
  if (elem.tagName !== 'BUTTON') {
    return;
  }
  event.preventDefault();
  switch(elem){
    case(UI_ELEMETS.BTN_QUIT):
      API.quitFromApplication();
      break;

    case(UI_ELEMETS.BTN_SETTINGS):
      render.showModal(UI_ELEMETS.MODAL_SETTINGS);
      break;

    case(UI_ELEMETS.BTN_AUTH):
      UTILS.verifyEmail(event);
      break;

    case(UI_ELEMETS.BTN_CONFIRM):
      UTILS.setCookie(event);
      break;

    case(UI_ELEMETS.BTN_CHANGE_NAME):
      UTILS.changeName(event);
      break;

    case(UI_ELEMETS.BTN_SEND_MESSAGE):
      UTILS.sendMessage(event);
      break;
  }
});

document.addEventListener('keydown', (event) => {
  const elem = event.target;
  if (event.key !== KEYS.ENTER || elem.tagName !== "INPUT") {
    return;
  };
  event.preventDefault();
  switch(elem){
    case(UI_ELEMETS.INPUT_AUTH):
      UTILS.verifyEmail(event);
      break;

    case(UI_ELEMETS.INPUT_CONFIRM):
      UTILS.setCookie(event);
      break;

    case(UI_ELEMETS.INPUT_NAME):
      UTILS.changeName(event);
      break;

    case(UI_ELEMETS.INPUT_CHAT):
      UTILS.sendMessage(event);
      break;
  }
});

UI_ELEMETS.BTNS_CLOSE_MODAL.forEach((btnClose) => {
  btnClose.addEventListener('click', render.hideModal);
});

UI_ELEMETS.CHAT_WINDOW_SCROLL.addEventListener('scroll', () => {
  const scrollTop = UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop;
  if (scrollTop === 0) {
    render.partMessagesHistory();
  }
});

let token = getCookie('token');

if(token) {
  UTILS.initialize();
} else {
  render.showModal(UI_ELEMETS.MODAL_AUTH);
}