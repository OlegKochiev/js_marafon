import moment from './moment.js';

import {
  UI_ELEMETS,
  DEFAULT,
  GLOBAL
} from './consts.js';

const render = {
  newMessage(datas) {
    const messageTemplate = this.getMessageTemplate(datas);
    const chatWindowHeight = UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollHeight;
    const chatWindowTop = UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop;
    if (chatWindowHeight - chatWindowTop === DEFAULT.CHAT_WINDOW_HEIGHT) {
      UI_ELEMETS.CHAT_WINDOW.innerHTML += messageTemplate;
      UI_ELEMETS.CHAT_WINDOW_SCROLL.scrollTop = chatWindowHeight;
    } else {
      UI_ELEMETS.CHAT_WINDOW.innerHTML += messageTemplate;
    }
  },

  partMessagesHistory() {
    const oldMessages = this.getPartMessages();
    console.log(oldMessages);
  },

  showModal(modalWindow){
    modalWindow.classList.add('active');
  },

  hideModal() {
    const activeModal = document.querySelector('.active');
    activeModal.querySelector('.form__input').value = '';
    activeModal.classList.remove('active');
  },

  getMessageTemplate(datas) {
    const email = datas.user.email;
    const name = datas.user.name;
    const text = datas.text;
    const date = moment(datas.createdAt).format('LT') ;
    const isIAm = email === DEFAULT.EMAIL;
    let message = `
      <p class="chat__message float-${ isIAm ? 'right' : 'left' }">
      ${ isIAm ? 'Я' : name }: ${ text }  
        <time class="chat__time">${ date }</time>
      </p>`;
      return message;
  },

  getPartMessages() {
    const messagesLength = GLOBAL.MESSAGES_HISTORY.length;
    let oldMessages;
    if (messagesLength > 20) {
      oldMessages = GLOBAL.MESSAGES_HISTORY.splice(messagesLength - 20)
    } else {
      oldMessages = GLOBAL.MESSAGES_HISTORY.splice(0);
    }
    return oldMessages;
  }
}

export {
  render
}