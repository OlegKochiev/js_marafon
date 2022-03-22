import {
  UI_ELEMETS,
  ACTIVE_CLASS,
  REQUEST_TYPE
} from './consts.js';

import {
  doWeatherRequest
} from './request.js';

import {
  storage
} from './local_storage.js';

import {
  render
} from './render_UI.js'

UI_ELEMETS.BTN_NOW.addEventListener('click', render.switchNavBtnToActive);
UI_ELEMETS.BTN_DETAILS.addEventListener('click', render.switchNavBtnToActive);
UI_ELEMETS.BTN_FORECAST.addEventListener('click', render.switchNavBtnToActive);

UI_ELEMETS.INPUT_SEARCH.addEventListener('keydown', (event) => {
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
const citys = storage.getFavouriteCities();
render.showCityItems(currentCity, citys, getWeather);