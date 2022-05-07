const UI_ELEMETS = {
  BTN_QUIT: document.getElementById('btnQuit'),
  BTN_SETTINGS: document.getElementById('btnSettings'),
  BTN_SEND_MESSAGE: document.getElementById('btnChat'),
  BTN_AUTH: document.getElementById('btnAuth'),
  BTN_CONFIRM: document.getElementById('btnConfirm'),
  BTN_CHANGE_NAME: document.getElementById('btnChangeName'),
  INPUT_CHAT: document.getElementById('inputChat'),
  INPUT_AUTH: document.getElementById('inputAuth'),
  INPUT_CONFIRM: document.getElementById('inputConfirm'),
  INPUT_NAME: document.getElementById('inputSettings'),
  MODAL_AUTH: document.querySelector('.modal-auth'),
  MODAL_CONFIRM: document.querySelector('.modal-confirm'),
  MODAL_SETTINGS: document.querySelector('.modal-settings'),
  CHAT_WINDOW: document.querySelector('.chat__history-wrapper'),
  CHAT_WINDOW_SCROLL: document.querySelector('.chat__history')
}

const DEFAULT = {
  USER_NAME: 'oleg',
  EMAIL: 'olegkochiev19@gmail.com',
  CSS_CLASS_ACTIVE: '.active',
  TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sZWdrb2NoaWV2MTlAZ21haWwuY29tIiwiaWF0IjoxNjUxNDE5NzMzLCJleHAiOjE2NTE4NjYxMzN9.4_l-oByAHwanI20DhkmakTXumHBiROSSsAWg_YGQDrw',
  CHAT_WINDOW_HEIGHT: 435
}

const URLS = {
  HOME: 'https://mighty-cove-31255.herokuapp.com/api/user',
  USER_INFO: 'https://mighty-cove-31255.herokuapp.com/api/user/me',
  MESSAGES: 'https://mighty-cove-31255.herokuapp.com/api/messages',
  WEB_SOCKET: `wss://mighty-cove-31255.herokuapp.com/websockets?${getCookie('token') ?? DEFAULT.TOKEN}`
}

const GLOBAL = {
  MESSAGES_HISTORY: []
}

const KEYS = {
  ENTER: 'Enter'
}

export {
  UI_ELEMETS,
  URLS, 
  DEFAULT,
  GLOBAL,
  KEYS
}