import {
  REQUEST_TYPE,
  URLS
} from './consts.js'

const forecastsCount = 5;
const apiKey = '3d8af9f7ae111ad0770a6a9d37546134';

function doWeatherRequest(city, requestType) {
  const url = getUrl(city, requestType);
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Укажите верное название города!");
      }
    })
    .then((weatherDatas) => {
      switch (requestType) {
        case REQUEST_TYPE.WEATHER:
          return {
            city: weatherDatas.name,
              temperature: Math.round(weatherDatas.main.temp - 273),
              feels_like: Math.round(weatherDatas.main.feels_like - 273),
              weather: weatherDatas.weather[0].main,
              sunrise: weatherDatas.sys.sunrise,
              sunset: weatherDatas.sys.sunset,
              icon: weatherDatas.weather[0].icon,
              isFavourite: false
          };
        case REQUEST_TYPE.FORECAST:
          return {
            city: weatherDatas.city.name,
              list: getForecastHourly(weatherDatas)
          }
      }
    })
}

function getUrl(city, requestType) {
  let url;
  switch (requestType) {
    case REQUEST_TYPE.WEATHER:
      url = `${URLS.WEATHER}?q=${city}&appid=${apiKey}`;
      break;
    case REQUEST_TYPE.FORECAST:
      url = `${URLS.FORECAST}?q=${city}&appid=${apiKey}&units=metric&cnt=${forecastsCount}`;
      break;
  }
  return url;
}

function getForecastHourly(forecastDatas) {
  let forecastHours = forecastDatas.list.map((item) => {
    return {
      date: (new Date(item.dt * 1000)).toString().substring(4, 11),
      time: (new Date(item.dt * 1000)).toLocaleTimeString().substring(0, 5),
      temperature: item.main.temp,
      feelsLike: item.main.feels_like,
      weather: item.weather[0].main,
      icon: item.weather[0].icon
    }
  });
  return forecastHours;
}

export {
  doWeatherRequest
}