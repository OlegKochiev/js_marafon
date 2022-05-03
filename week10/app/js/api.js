import {
  URLS,
  UI_ELEMETS
} from './consts.js';

import {
  render
} from './render.js'

const API = {
  async verifyEmail(email) {
    try {
      let response = await fetch(URLS.HOME, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ email: email })
    });
    } catch (error) {
      console.log(error);
    }
  },
  
  async changeUserName(name) {
    try {
      const token = getCookie('token');
      let response = await fetch(URLS.HOME, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: name })
      });
      let nameUpdated = await response.json();
      return nameUpdated;
    } catch (error) {
      console.log(error);
    }
  },
  
  async getUserInfo() {
    try {
      const token = getCookie('token');
      let response = await fetch(URLS.USER_INFO, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${token}`
        }
      });
      let userInfo = await response.json();
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  },
  
  async getMessages() {
    try {
      const token = getCookie('token');
      let response = await fetch(URLS.MESSAGES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${token}`
        }
      });
      let messages = await response.json();
      return messages;
    } catch (error) {
      console.log(error);
    }
  },

  quitFromApplication() {
    const quit = confirm('Вы действительно хотите выйти?');
    if (quit) {
      deleteCookie('token');
      render.hideModal();
      render.showModal(UI_ELEMETS.MODAL_AUTH);
    }
  }
}

export {
  API
}