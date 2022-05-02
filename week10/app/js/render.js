import {
  UI_ELEMETS
} from './consts.js';

import {
  myEmail
} from './global.js';


const MODAL = {
  SHOW(modalWindow) {
    modalWindow.classList.add('active');
  },

  HIDE() {
    const activeModal = document.querySelector('.active');
    activeModal.querySelector('.form__input').value = '';
    activeModal.classList.remove('active');
  },
  
  QUIT() {
    const quit = confirm('Вы действительно хотите выйти?');
    if (quit) {
      deleteCookie('token');
      MODAL.SHOW(UI_ELEMETS.MODAL_AUTH);
    }
  }
}

const render = {
  getMessage(datas) {
    const email = datas.user.email;
    const name = datas.user.name;
    const text = datas.text;
    const date = datas.createdAt;
    let message;
    if (email === myEmail) {
      message = `
      <p class="chat__message float-right">
      ${name}: ${text}  
        <time class="chat__time">${date}</time>
      </p>`
    } else {
      message = `
      <p class="chat__message float-right">
      ${name}: ${text}  
        <time class="chat__time">${date}</time>
      </p>`
    }
    UI_ELEMETS.CHAT_WINDOW.innerHTML += message;
  }
}

export {
  MODAL,
  render
}