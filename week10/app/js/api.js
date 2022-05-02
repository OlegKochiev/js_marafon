import {
  URLS
} from './consts.js';

async function verifyEmail(email) {
  let response = await fetch(URLS.HOME, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email: email })
  });
}

async function changeUserName(name) {
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
}

async function getUserInfo() {
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
}

async function getMessages() {
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
}



export {
  verifyEmail,
  changeUserName,
  getUserInfo,
  getMessages
}