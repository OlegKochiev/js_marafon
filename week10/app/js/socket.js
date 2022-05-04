import {
  URLS
} from './consts.js'

import {
  render
} from './render.js'



 class SocketConnection {
  constructor(url) {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log("Подключение установлено!");
      this._heartbeat(this);
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
      alert('Код: ' + event.code);
    }
    
    this.socket.onerror = (error) => {
      alert("Ошибка " + error.message);
    }
  }

  _heartbeat(context) {
    context.socket.send("heartbeat");
    setTimeout(context._heartbeat, 30000, context);
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

export {
  socketHeroku
}