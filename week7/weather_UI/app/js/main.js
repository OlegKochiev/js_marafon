const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

function getWeatherDatas(city) {
  const url = getUrl(city);
  return fetch(url)
    .then(response => response.json())
    .then((weatherDatas) => {
      return {
        cityName: weatherDatas.name,
        temperature: Math.round(weatherDatas.main.temp - 273),
        feels_like: Math.round(weatherDatas.main.feels_like - 273),
        weather: weatherDatas.weather[0].main,
        sunrise: weatherDatas.sys.sunrise,
        sunset: weatherDatas.sys.sunset,
        icon: weatherDatas.weather[0].icon,
        isFavourite: false
      }
    })
    .catch(error => {
      alert('Введите верное название города!');
    })

}

function getUrl(city) {
  const url = `${serverUrl}?q=${city}&appid=${apiKey}`;
  return url;
}

export {
  getWeatherDatas
}