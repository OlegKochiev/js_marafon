import {
  UI_ELEMETS,
  DEFAULT
} from './consts.js';

import {
  MODAL
} from './render.js';

import {
  verifyEmail,
  changeUserName,
  getUserInfo, 
  getMessages
} from './api.js'

import {
  sendMessage
} from './socket.js'

UI_ELEMETS.BTN_QUIT.addEventListener('click', MODAL.QUIT);

UI_ELEMETS.BTN_SETTINGS.addEventListener('click', () => {
  MODAL.SHOW(UI_ELEMETS.MODAL_SETTINGS);
});

document.querySelectorAll('.modal__btn-close').forEach((btnClose) => {
  btnClose.addEventListener('click', MODAL.HIDE);
});

UI_ELEMETS.BTN_AUTH.addEventListener('click', async (event) => {
  event.preventDefault();
  if (!getCookie('token')) {
    const email = UI_ELEMETS.INPUT_AUTH.value ?? DEFAULT.EMAIL;
    await verifyEmail(email);
    MODAL.HIDE();
    MODAL.SHOW(UI_ELEMETS.MODAL_CONFIRM);
  } else {
    MODAL.HIDE()
  }
})

UI_ELEMETS.INPUT_AUTH.addEventListener('keydown', async (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (!getCookie('token')) {
      const email = UI_ELEMETS.INPUT_AUTH.value ?? defaultEmail;
      await verifyEmail(email);
      event.target.value = '';
      MODAL.HIDE();
      MODAL.SHOW(UI_ELEMETS.MODAL_CONFIRM);
    } else {
      MODAL.HIDE();
    }
  }
})

UI_ELEMETS.BTN_CONFIRM.addEventListener('click', async (event) => {
  event.preventDefault();
  const token = UI_ELEMETS.INPUT_CONFIRM.value;
  setCookie('token', token);
  MODAL.HIDE();
});

UI_ELEMETS.INPUT_CONFIRM.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const token = UI_ELEMETS.INPUT_CONFIRM.value;
    setCookie('token', token);
  }
})

UI_ELEMETS.BTN_CHANGE_NAME.addEventListener('click', async(event) => {
  event.preventDefault();
  const userName = UI_ELEMETS.INPUT_SETTINGS.value ?? DEFAULT.USER_NAME;
  await changeUserName(userName);
  let userInfo = await getUserInfo()
  console.log(userInfo);
  MODAL.HIDE();

})

UI_ELEMETS.BTN_SEND_MESSAGE.addEventListener('click', async(event) => {
  event.preventDefault();
  let messages = await getMessages();
  console.log(messages);
})

UI_ELEMETS.INPUT_CHAT.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const message = this.value;
    sendMessage(message);
    this.value = '';
  }
})



/* UI_ELEMETS.INPUT_SEARCH.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather(event.target.value);
    event.target.value = '';
  }
})

UI_ELEMETS.BTN_SEARCH.addEventListener('click', () => {
  const city = UI_ELEMETS.INPUT_SEARCH.value;
  getWeather(city);
})

UI_ELEMETS.BTN_FAVOURITE.addEventListener('click', function () {
  let city = this.previousSibling.previousSibling.textContent;
  this.classList.toggle(ACTIVE_CLASS.BTN_FAVOURITE);
  if (isFavourite(this)) {
    addFavouriteCity(city);
  } else {
    delFavouriteCity(city);
  }
});


async function getWeather(city) {
  const response = await Promise.all([
      doWeatherRequest(city, REQUEST_TYPE.WEATHER),
      doWeatherRequest(city, REQUEST_TYPE.FORECAST)
    ])
    .then((response) => {
      return response;
    })
    .catch(alert);
  storage.setCurrentCity(response[0].city);
  render.weatherInfo(response[0]);
  render.forecastInfo(response[1]);
}

function isFavourite(btnFavourite) {
  return btnFavourite.classList.contains(ACTIVE_CLASS.BTN_FAVOURITE) ? true : false;
}

function addFavouriteCity(city) {
  storage.addFavouriteCity(city);
  render.createCityItem(city, getWeather);
}

function delFavouriteCity(city) {
  storage.delFavouriteCity(city);
  render.delCityItem(city);
}

const currentCity = storage.getCurrentCity();
const cities = storage.getFavouriteCities();
render.showCityItems(currentCity, cities, getWeather); */