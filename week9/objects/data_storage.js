import {
  DEFAULT_STORAGE,
  EMPTY_STORAGE,
  STORAGE
} from './consts.js';
class Storage {
  constructor(key, storageType = DEFAULT_STORAGE) {
    this.key = key;
    this.storage = STORAGE[storageType];
    this.set(EMPTY_STORAGE);
  }

  get() {
    return this.storage.getItem(this.key);
  }
  
  set(value) {
    return this.storage.setItem(this.key, value);
  }
  
  clear() {
    return this.storage.setItem(this.key, EMPTY_STORAGE);
  }
  
  isEmpty() {
    return this.storage.getItem(this.key) === EMPTY_STORAGE;
  }
}

export {
  Storage
}