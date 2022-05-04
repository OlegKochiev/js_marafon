import {
  UI_ELEMETS,
  DEFAULT
} from './consts.js';

import {
  render
} from './render.js';

import {
  API
} from './api.js';

import {
  socketHeroku
} from './socket.js'

UI_ELEMETS.BTN_QUIT.addEventListener('click', API.quitFromApplication);

UI_ELEMETS.BTN_SETTINGS.addEventListener('click', () => {
  render.showModal(UI_ELEMETS.MODAL_SETTINGS);
});

document.querySelectorAll('.modal__btn-close').forEach((btnClose) => {
  btnClose.addEventListener('click', render.hideModal);
});

UI_ELEMETS.BTN_AUTH.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!getCookie('token')) {
    const email = UI_ELEMETS.INPUT_AUTH.value ?? DEFAULT.EMAIL;
    await API.verifyEmail(email);
    render.hideModal();
    render.showModal(UI_ELEMETS.MODAL_CONFIRM);
  } else {
    render.hideModal()
  }
})

UI_ELEMETS.INPUT_AUTH.addEventListener('keydown', async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (!getCookie('token')) {
      const email = UI_ELEMETS.INPUT_AUTH.value ?? defaultEmail;
      await API.verifyEmail(email);
      event.target.value = '';
      render.hideModal();
      render.showModal(UI_ELEMETS.MODAL_CONFIRM);
    } else {
      render.hideModal();
    }
  }
})

UI_ELEMETS.BTN_CONFIRM.addEventListener('click', async (event) => {
  event.preventDefault();
  const token = UI_ELEMETS.INPUT_CONFIRM.value;
  setCookie('token', token);
  render.hideModal();
});

UI_ELEMETS.INPUT_CONFIRM.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const token = UI_ELEMETS.INPUT_CONFIRM.value;
    setCookie('token', token);
  }
})

UI_ELEMETS.BTN_CHANGE_NAME.addEventListener('click', (event) => {
  event.preventDefault();
  const userName = UI_ELEMETS.INPUT_NAME.value ?? DEFAULT.USER_NAME;
  API.changeUserName(userName);
  render.hideModal();
})

UI_ELEMETS.INPUT_NAME.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const userName = UI_ELEMETS.INPUT_NAME.value ?? DEFAULT.USER_NAME;
    API.changeUserName(userName);
    render.hideModal();
  }
})

UI_ELEMETS.BTN_SEND_MESSAGE.addEventListener('click', (event) => {
  event.preventDefault();
  const message = UI_ELEMETS.INPUT_CHAT.value;
  socketHeroku.sendMessage(message);
  UI_ELEMETS.INPUT_CHAT.value = '';
})

UI_ELEMETS.INPUT_CHAT.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const message = UI_ELEMETS.INPUT_CHAT.value;
    socketHeroku.sendMessage(message);
    UI_ELEMETS.INPUT_CHAT.value = '';
  }
})

/* UI_ELEMETS.CHAT_WINDOW_SCROLL.addEventListener('scroll', () => {
  console.log(UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop);
  console.log(UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollHeight);
}) */