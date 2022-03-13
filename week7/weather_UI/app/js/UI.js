// @ts-nocheck
import {
  UI_ELEMETS,
  TAB,
  ACTIVE_CLASS,
  REQUEST
} from './consts.js';

import {
  doWeatherRequest
} from './main.js'
UI_ELEMETS.BTN_NOW.addEventListener('click', switchNavBtnToActive);
UI_ELEMETS.BTN_DETAILS.addEventListener('click', switchNavBtnToActive);
UI_ELEMETS.BTN_FORECAST.addEventListener('click', switchNavBtnToActive);
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
    addCityToLocations(city)
  } else {
    delCityFromLocations(city);
  }
});


function getWeather(city) {
  Promise.all([
    doWeatherRequest(city, REQUEST.WEATHER),
    doWeatherRequest(city, REQUEST.FORECAST)
  ]).then(response => {
    renderWeatherInfo(response[0]);
    renderForecastInfo(response[1]);
  }).catch(alert)
}

function renderWeatherInfo(weather) {
  let citysList = document.querySelectorAll('.weather__location-btn');
  const sunriseTime = (new Date(weather.sunrise * 1000)).toLocaleTimeString().substring(0, 5);
  const sunsetTime = (new Date(weather.sunset * 1000)).toLocaleTimeString().substring(0, 5);
  document.querySelector('.common-info__temperature').textContent = weather.temperature + '°';
  document.querySelector('.common-info__city').textContent = weather.city;
  document.querySelector('.detailed-info__city').textContent = weather.city;
  document.querySelector('.detailed-info__item--temp').textContent = 'Temperature: ' + weather.temperature + '°';
  document.querySelector('.detailed-info__item--feels-like').textContent = 'Feels like: ' + weather.feels_like + '°';
  document.querySelector('.detailed-info__item--weather').textContent = 'Weather: ' + weather.weather;
  document.querySelector('.detailed-info__item--sunrise').textContent = 'Sunrise: ' + sunriseTime;
  document.querySelector('.detailed-info__item--sunset').textContent = 'Sunset: ' + sunsetTime;
  document.querySelector('.common-info').style.backgroundImage = `url(http://openweathermap.org/img/wn/${weather.icon}@4x.png)`;
  document.querySelector('.common-info__favourite').classList.remove(ACTIVE_CLASS.BTN_FAVOURITE);
  for (let cityItem of citysList) {
    if (weather.city === cityItem.textContent) {
      document.querySelector('.common-info__favourite').classList.add(ACTIVE_CLASS.BTN_FAVOURITE);
      break;
    }
  }
}

function renderForecastInfo(forecastWeather) {
  document.querySelector('.hour-info__city').textContent = forecastWeather.city;
  document.querySelector('.weather__main-hourly').innerHTML = '';
  let forecastList = document.querySelector('.weather__main-hourly');
  forecastWeather.list.forEach(weather => {
    const forecastItem = createForecastItem(weather);
    forecastList.append(forecastItem);
  });
}

function createForecastItem(weather) {
  let li = document.createElement('li');
  li.classList.add('hour-info__item');
  let date = document.createElement('div');
  date.classList.add('hour-info__date');
  let day = document.createElement('div');
  day.classList.add('hour-info__day');
  let time = document.createElement('div');
  time.classList.add('hour-info__time');
  let weatherBlock = document.createElement('div');
  weatherBlock.classList.add('hour-info__weather');
  let temperature = document.createElement('div');
  temperature.classList.add('hour-info__temperature');
  let feelsLike = document.createElement('div');
  feelsLike.classList.add('hour-info__feel');
  let rainOrSun = document.createElement('div');
  rainOrSun.classList.add('hour-info__icon');
  let span = document.createElement('span');
  span.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weather.icon}@4x.png)`;
  day.textContent = weather.date;
  time.textContent = weather.time;
  temperature.textContent = 'Temperature: ' + Math.round(weather.temperature) + '°';
  feelsLike.textContent = 'Feels like: ' + Math.round(weather.feelsLike) + '°';
  rainOrSun.textContent = weather.weather;
  date.appendChild(day);
  date.appendChild(time);
  weatherBlock.appendChild(temperature);
  weatherBlock.appendChild(feelsLike);
  rainOrSun.appendChild(span);
  li.appendChild(date);
  li.appendChild(weatherBlock);
  li.appendChild(rainOrSun);
  return li;
}

function switchNavBtnToActive(event) {
  removeActiveClasses();
  const btnNav = event.target;
  btnNav.classList.add(ACTIVE_CLASS.BTN_NAV);
  switch (btnNav.textContent) {
    case TAB.BNT_NOW:
      TAB.TAB_NOW.classList.add(ACTIVE_CLASS.ITEM_TAB);
      break;
    case TAB.BNT_DETAILS:
      TAB.TAB_DETAILS.classList.add(ACTIVE_CLASS.ITEM_TAB);
      break;
    case TAB.BNT_FORECAST:
      TAB.TAB_FORECAST.classList.add(ACTIVE_CLASS.ITEM_TAB);
      break;
  }
}

function removeActiveClasses() {
  document.querySelector('.' + ACTIVE_CLASS.BTN_NAV).classList.remove(ACTIVE_CLASS.BTN_NAV);
  document.querySelector('.' + ACTIVE_CLASS.ITEM_TAB).classList.remove(ACTIVE_CLASS.ITEM_TAB);
}

function isFavourite(btnFavourite) {
  return btnFavourite.classList.contains(ACTIVE_CLASS.BTN_FAVOURITE) ? true : false;
}

function addCityToLocations(city) {
  const citysList = document.querySelectorAll('.weather__location-btn');
  for (let cityItem of citysList) {
    if (city === cityItem.textContent) {
      return false;
    }
  }
  addCityItem(city);
}

function addCityItem(city) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  li.classList.add('weather__location-item');
  btn.classList.add('weather__location-btn');
  btn.type = 'button';
  btn.textContent = city;
  btn.addEventListener('click', () => {
    getWeather(city);
  });
  li.appendChild(btn);
  document.querySelector('.weather__location-list').appendChild(li);
}

function delCityFromLocations(city) {
  let citysList = document.querySelectorAll('.weather__location-btn');
  for (let cityItem of citysList) {
    if (city === cityItem.textContent) {
      cityItem.remove();
    }
  }
}