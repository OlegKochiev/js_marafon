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

UI_ELEMETS.BTN_QUIT.addEventListener('click', API.quitFromApplication);

UI_ELEMETS.BTN_SETTINGS.addEventListener('click', () => {
  render.showModal(UI_ELEMETS.MODAL_SETTINGS);
});

document.querySelectorAll('.modal__btn-close').forEach((btnClose) => {
  btnClose.addEventListener('click', render.hideModal);
});

UI_ELEMETS.BTN_AUTH.addEventListener('click', (event) => {
  UTILS.verifyEmail(event);
})

UI_ELEMETS.INPUT_AUTH.addEventListener('keydown', (event) => {
  if (event.key === KEYS.ENTER) {
    UTILS.verifyEmail(event);
  }
})

UI_ELEMETS.BTN_CONFIRM.addEventListener('click', (event) => {
  UTILS.setCookie(event);
});

UI_ELEMETS.INPUT_CONFIRM.addEventListener('keydown', (event) => {
  if (event.key === KEYS.ENTER) {
    UTILS.setCookie(event);
  }
})

UI_ELEMETS.BTN_CHANGE_NAME.addEventListener('click', (event) => {
  UTILS.changeName(event);
})

UI_ELEMETS.INPUT_NAME.addEventListener('keydown', (event) => {
  if (event.key === KEYS.ENTER) {
    UTILS.changeName(event);
  }
})

UI_ELEMETS.BTN_SEND_MESSAGE.addEventListener('click', (event) => {
  UTILS.sendMessage(event);
})

UI_ELEMETS.INPUT_CHAT.addEventListener('keydown', (event) => {
  if (event.key === KEYS.ENTER) {
    UTILS.sendMessage(event);
  }
})

UI_ELEMETS.CHAT_WINDOW_SCROLL.addEventListener('scroll', () => {
  const scrollTop = UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop;
  if (scrollTop === 0) {
    render.partMessagesHistory();
  }
});

let token = getCookie('token');

if(!token) {
  render.showModal(UI_ELEMETS.MODAL_AUTH);
} else {
  UTILS.initialize();
}