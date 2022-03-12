const serverWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const serverForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

function getWeatherDatas(city) {
  const url = getWeatherUrl(city);
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Неверный город!");
      }
    })
    .then((weatherDatas) => {
      return {
        city: weatherDatas.name,
        temperature: Math.round(weatherDatas.main.temp - 273),
        feels_like: Math.round(weatherDatas.main.feels_like - 273),
        weather: weatherDatas.weather[0].main,
        sunrise: weatherDatas.sys.sunrise,
        sunset: weatherDatas.sys.sunset,
        icon: weatherDatas.weather[0].icon,
        lat: weatherDatas.coord.lat,
        lon: weatherDatas.coord.lon,
        isFavourite: false
      }
    })
    .catch(alert)
}

function getWeatherUrl(city) {
  const url = `${serverWeatherUrl}?q=${city}&appid=${apiKey}`;
  return url;
}

function getForecastDatas(city) {
  const url = getForecastUrl(city);
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Неверный город!");
      }
    })
    .then((forecastDatas) => {
      const hoursList = getForecastHourly(forecastDatas);
      return {
        city: forecastDatas.city.name,
        list: hoursList
      }
    })
    .catch(alert)
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

function getForecastUrl(city) {
  const url = `${serverForecastUrl}?q=${city}&appid=${apiKey}&units=metric&cnt=5`;
  return url;
}

export {
  getWeatherDatas,
  getForecastDatas
}