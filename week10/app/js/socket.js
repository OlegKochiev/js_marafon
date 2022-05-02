import {
  URLS
} from './consts.js'

import {
  render
} from './render.js'

const socket = new WebSocket(URLS.WEB_SOCKET);

socket.onopen = (event) => {
  console.log("Connection is success!");
}

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  render.getMessage(message);
}


function sendMessage(message) {
  socket.send(JSON.stringify({
    text: message
  }))
}

export {
  socket,
  sendMessage
}