const storage = {
  initializeStorage() {
    if (localStorage.getItem('favouriteCities') === null) {
      const favouriteCities = new Set();
      storage.save(favouriteCities);
    }
    if (localStorage.getItem('currentCity') === null) {
      localStorage.setItem('currentCity', 'Moscow');
    }
  },

  setCurrentCity(city) {
    localStorage.setItem('currentCity', city)
  },

  getCurrentCity() {
    return localStorage.getItem('currentCity');
  },


  addFavouriteCity(city) {
    let favouriteCities = storage.getFavouriteCities();
    favouriteCities.add(city);
    storage.save(favouriteCities);
  },

  delFavouriteCity(cityRemovable) {
    let favouriteCities = storage.getFavouriteCities();
    favouriteCities.delete(cityRemovable);
    storage.save(favouriteCities);
  },

  getFavouriteCities() {
    const favouriteCities = localStorage.getItem('favouriteCities');
    return new Set(JSON.parse(favouriteCities));
  },

  save(favouriteCities) {
    localStorage.setItem('favouriteCities', JSON.stringify([...favouriteCities]));
  }
}

storage.initializeStorage();

export {
  storage
}