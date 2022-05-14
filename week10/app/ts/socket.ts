import {
  render
} from './render.js'

import {
  API
} from './api.js'






 class SocketConnection {
  constructor(url) {
    this.socket = new WebSocket(url);
    this._conditions();
  }

  _conditions() {
    this.socket.onopen = async () => {
      console.log("Подключение к 'socket' установлено!");
      this._heartbeat(this);
      await API.getOldMessages();
      render.partMessagesHistory();
    }

    this.socket.onmessage = (event) => {
      this.getMessage(event);
    }
    
    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      alert('Код: ' + event.code);
    }
    
    this.socket.onerror = (error) => {
      console.log("Ошибка " + error.message);
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
 


export {
  SocketConnection
}