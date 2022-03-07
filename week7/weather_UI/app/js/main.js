const UI_ELEMETS = {
  BTN_NOW: document.getElementById('btnNow'),
  BTN_DETAILS: document.getElementById('btnDetails'),
  BTN_FORECAST: document.getElementById('btnForecast'),
  INPUT_FORM: document.getElementById('inputForm'),
  BTN_FORM: document.getElementById('btnForm')
}

UI_ELEMETS.BTN_NOW.addEventListener('click', switchBtnToActive)
UI_ELEMETS.BTN_DETAILS.addEventListener('click', switchBtnToActive)
UI_ELEMETS.BTN_FORECAST.addEventListener('click', switchBtnToActive)

function switchBtnToActive(event) {
  removeActiveClasses();
  const btn = event.target;
  btn.classList.add('weather__nav-btn--active');
  switch (btn.textContent) {
    case 'Now':
      document.querySelectorAll('.weather__main-item')[0].classList.add('weather__main-item--active');
      break;
    case 'Details':
      document.querySelectorAll('.weather__main-item')[1].classList.add('weather__main-item--active');
      break;
    case 'Forecast':
      document.querySelectorAll('.weather__main-item')[2].classList.add('weather__main-item--active');
      break;
  }

}

function removeActiveClasses() {
  const navBtns = document.querySelectorAll('.weather__nav-btn');
  const weatherMainItems = document.querySelectorAll('.weather__main-item');
  for (const btn of navBtns) {
    btn.classList.remove('weather__nav-btn--active');
  }
  for (const item of weatherMainItems) {
    item.classList.remove('weather__main-item--active');
  }
}