import {
  URLS
} from './consts.js'

import {
  render
} from './render.js'



 class SocketConnection {
  constructor(url) {
    this.url = url;
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log("Подключение установлено!");
    }

    this.socket.onmessage = (event) => {
      this.getMessage(event);
    }
    
    this.socket.onclose = (event) => {
      if (event.wasClean) {
        alert('Соединение закрыто чисто');
      } else {
        alert('Обрыв соединения'); // например, "убит" процесс сервера
      }
      alert('Код: ' + event.code + ' причина: ' + event.reason);
    }
    
    this.socket.onerror = (error) => {
      alert("Ошибка " + error.message);
    }
  }

  reconnect() {
    this.socket = new WebSocket(this.url);
  }

  sendMessage(text) {
    this.socket.send(JSON.stringify({
      text: text
    }));
  }

  getMessage(event) {
    const message = JSON.parse(event.data);
    render.newMessage(message);
  }
}
 
const socketHeroku = new SocketConnection(URLS.WEB_SOCKET);

/* 
const socket = new WebSocket(URLS.WEB_SOCKET);

socket.onopen = () => {
  console.log("Подключение установлено!");
}

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  render.newMessage(message);
}

socket.onclose = (event) => {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
}

socket.onerror = (error) => {
  alert("Ошибка " + error.message);
}

function sendMessage(message) {
  socket.send(JSON.stringify({
    text: message
  }))
} */

export {
  socketHeroku
}