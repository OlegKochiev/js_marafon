export const UI_ELEMETS = {
  BTN_NOW: document.getElementById('btnNow'),
  BTN_DETAILS: document.getElementById('btnDetails'),
  BTN_FORECAST: document.getElementById('btnForecast'),
  INPUT_SEARCH: document.getElementById('inputForm'),
  BTN_SEARCH: document.getElementById('btnForm'),
  BTN_FAVOURITE: document.querySelector('.common-info__favourite')
}

export const TAB = {
  BNT_NOW: 'Now',
  BNT_DETAILS: 'Details',
  BNT_FORECAST: 'Forecast',
  TAB_NOW: document.querySelectorAll('.weather__main-item')[0],
  TAB_DETAILS: document.querySelectorAll('.weather__main-item')[1],
  TAB_FORECAST: document.querySelectorAll('.weather__main-item')[2],
}