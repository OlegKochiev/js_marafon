const UI_ELEMETS = {
  BTN_NOW: document.getElementById('btnNow'),
  BTN_DETAILS: document.getElementById('btnDetails'),
  BTN_FORECAST: document.getElementById('btnForecast'),
  INPUT_SEARCH: document.getElementById('inputForm'),
  BTN_SEARCH: document.getElementById('btnForm'),
  BTN_FAVOURITE: document.querySelector('.common-info__favourite')
}

const TAB = {
  BNT_NOW: 'Now',
  BNT_DETAILS: 'Details',
  BNT_FORECAST: 'Forecast',
  TAB_NOW: document.querySelectorAll('.weather__main-item')[0],
  TAB_DETAILS: document.querySelectorAll('.weather__main-item')[1],
  TAB_FORECAST: document.querySelectorAll('.weather__main-item')[2],
}

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
  this.classList.toggle('common-info__favourite--active');
});


function getWeather(city) {
  const EMPTY_STRING = '';
  console.log(city);
  // if (city !== EMPTY_STRING) {
  //   console.log(city);
  //   let weather = fetch({
  //     url: 'http://api.openweathermap.org/data/2.5/weather',

  //   })
  // }
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