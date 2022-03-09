import {
  UI_ELEMETS,
  TAB,
  ACTIVE_CLASS
} from './consts.js';
import {
  City
} from './main.js';

UI_ELEMETS.BTN_NOW.addEventListener('click', switchNavBtnToActive);
UI_ELEMETS.BTN_DETAILS.addEventListener('click', switchNavBtnToActive);
UI_ELEMETS.BTN_FORECAST.addEventListener('click', switchNavBtnToActive);
UI_ELEMETS.INPUT_SEARCH.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather(event.target.value);
  }
})
UI_ELEMETS.BTN_SEARCH.addEventListener('click', () => {
  const city = UI_ELEMETS.INPUT_SEARCH.value;
  getWeather(city);
})
UI_ELEMETS.BTN_FAVOURITE.addEventListener('click', function () {
  this.classList.toggle(ACTIVE_CLASS.BTN_FAVOURITE);
  let city = this.previousSibling.previousSibling.textContent;
  if (isFavourite(this)) {
    addCityInFavourite(city)
  } else {
    delCityFromFavourite(city);
  }
});


async function getWeather(city) {
  if (isNotEmpty(city)) {
    const url = getUrl(city);
    let response = await fetch(url);
    if (response.ok) {
      let weatherDatas = await response.json();
      const weather = {
        cityName: weatherDatas.name,
        temperature: Math.round(weatherDatas.main.temp - 273),
        feels_like: Math.round(weatherDatas.main.feels_like - 273),
        weather: weatherDatas.weather[0].main,
        sunrise: weatherDatas.sys.sunrise,
        sunset: weatherDatas.sys.sunset,
        icon: weatherDatas.weather[0].icon
      }
      renderWeatherInfo(weather);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
}

function getUrl(city) {
  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${city}&appid=${apiKey}`;
  return url;
}

function switchNavBtnToActive(event) {
  removeActiveClasses();
  const btn = event.target;
  btn.classList.add('weather__nav-btn--active');
  switch (btn.textContent) {
    case TAB.BNT_NOW:
      TAB.TAB_NOW.classList.add('weather__main-item--active');
      break;
    case TAB.BNT_DETAILS:
      TAB.TAB_DETAILS.classList.add('weather__main-item--active');
      break;
    case TAB.BNT_FORECAST:
      TAB.TAB_FORECAST.classList.add('weather__main-item--active');
      break;
  }
}

function removeActiveClasses() {
  document.querySelector('.weather__nav-btn--active').classList.remove('weather__nav-btn--active');
  document.querySelector('.weather__main-item--active').classList.remove('weather__main-item--active');
}

function isFavourite(btnFavourite) {
  if (btnFavourite.classList.contains(ACTIVE_CLASS.BTN_FAVOURITE)) {
    return true
  } else {
    return false;
  }
}

function isNotEmpty(value) {
  return value !== '' ? true : false;
}

function renderWeatherInfo(weather) {
  document.querySelector('.common-info__temperature').textContent = weather.temperature + '°';
  document.querySelector('.common-info__city').textContent = weather.cityName;
  document.querySelector('.detailed-info__city').textContent = weather.cityName;
  document.querySelector('.detailed-info__item--temp').textContent = 'Temperature: ' + weather.temperature + '°';
  document.querySelector('.detailed-info__item--feels-like').textContent = 'Feels like: ' + weather.feels_like + '°';
  document.querySelector('.detailed-info__item--weather').textContent = 'Weather: ' + weather.weather;
  document.querySelector('.detailed-info__item--sunrise').textContent = 'Sunrise: ' + (new Date(weather.sunrise * 1000)).toUTCString().slice(-12, -3);
  document.querySelector('.detailed-info__item--sunset').textContent = 'Sunset: ' + (new Date(weather.sunset * 1000)).toUTCString().slice(-12, -3);
  document.querySelector('.common-info').style.backgroundImage = `url(http://openweathermap.org/img/wn/${weather.icon}@4x.png)`;
  document.querySelector('.common-info__favourite').classList.remove(ACTIVE_CLASS.BTN_FAVOURITE);
}

function addCityInFavourite(newCity) {
  const citys = document.querySelectorAll('.weather__location-btn');
  for (let city of citys) {
    if (newCity === city.textContent) {
      return false;
    }
  }
  let li = document.createElement('li');
  let btn = document.createElement('button');
  li.classList.add('weather__location-item');
  btn.classList.add('weather__location-btn');
  btn.type = 'button';
  btn.textContent = newCity;
  btn.addEventListener('click', () => {
    getWeather(newCity);
  })
  li.appendChild(btn);
  document.querySelector('.weather__location-list').appendChild(li);
}

function delCityFromFavourite(oldCity) {
  let citys = document.querySelectorAll('.weather__location-btn');
  for (let city of citys) {
    if (oldCity === city.textContent) {
      city.remove();
    }
  }
}