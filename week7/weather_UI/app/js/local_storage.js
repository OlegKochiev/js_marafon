const storage = {

  initializeStorage() {
    localStorage.setItem('currentCity', '')
    localStorage.setItem('favouriteCities', '[]');
  },

  setCurrentCity(city) {
    localStorage.setItem('currentCity', city)
  },

  getCurrentCity() {
    return localStorage.getItem('currentCity');
  },

  addFavouriteCity(city) {
    let favoutiteCities = JSON.parse(localStorage.getItem('favouriteCities'));
    favoutiteCities.push(city);
    localStorage.setItem('favouriteCities', JSON.stringify(favoutiteCities));
  },

  delFavouriteCity(cityRemovable) {
    let favoutiteCities = JSON.parse(localStorage.getItem('favouriteCities'));
    const cityIndex = favoutiteCities.findIndex((city) => city === cityRemovable);
    favoutiteCities.splice(cityIndex, 1);
    localStorage.setItem('favouriteCities', JSON.stringify(favoutiteCities));
  },

  getFavouriteCities() {
    const favoutiteCities = localStorage.getItem('favouriteCities');
    return JSON.parse(favoutiteCities);
  }
}

export {
  storage
}