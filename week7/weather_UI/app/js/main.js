import {
  REQUEST
} from './consts.js'

const serverWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const serverForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const forecastsCount = 5;
const apiKey = '1041b355b3b6422eb66d9f5e517f7b52';

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
        case REQUEST.WEATHER:
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
        case REQUEST.FORECAST:
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
    case REQUEST.WEATHER:
      url = `${serverWeatherUrl}?q=${city}&appid=${apiKey}`;
      break;
    case REQUEST.FORECAST:
      url = `${serverForecastUrl}?q=${city}&appid=${apiKey}&units=metric&cnt=5`;
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
