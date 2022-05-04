import moment from './moment.js';

import {
  UI_ELEMETS,
  DEFAULT
} from './consts.js';

const render = {
  newMessage(datas) {
    const email = datas.user.email;
    const name = datas.user.name;
    const text = datas.text;
    const date = datas.createdAt;
    let message;
    if (email === DEFAULT.EMAIL) {
      message = `
      <p class="chat__message float-right">
      ${name}: ${text}  
        <time class="chat__time">${date}</time>
      </p>`
    } else {
      message = `
      <p class="chat__message float-left">
      ${name}: ${text}  
        <time class="chat__time">${ moment(date).format('LT') }</time>
      </p>`
    }
    UI_ELEMETS.CHAT_WINDOW.innerHTML += message;
    UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop = UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollHeight;
  },

  showModal(modalWindow){
    modalWindow.classList.add('active');
  },

  hideModal() {
    const activeModal = document.querySelector('.active');
    activeModal.querySelector('.form__input').value = '';
    activeModal.classList.remove('active');
  },

  clearInputs() {
    
  }
}

export {
  render
}