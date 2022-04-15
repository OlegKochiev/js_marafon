import {
  STORAGE_TYPE,
  EMPTY_STORAGE
} from './consts'
class Storage {
  constructor(key, storageType = STORAGE_TYPE.DEFAULT) {
    this.key = key;
    this.storageType = storageType;
    this.set(EMPTY_STORAGE);
  }

  get() {
    return this.#isLocalStorage ? localStorage.getItem(this.key) : sessionStorage.getItem(this.key);
  }
  
  set(value) {
    return this.#isLocalStorage ? localStorage.setItem(this.key, value) : sessionStorage.setItem(this.key, value);
  }
  
  clear() {
    return this.#isLocalStorage ? localStorage.setItem(this.key, EMPTY_STORAGE) : sessionStorage.setItem(this.key, EMPTY_STORAGE);
  }
  
  isEmpty() {
    return this.#isLocalStorage ? localStorage.getItem(this.key) === EMPTY_STORAGE : sessionStorage.getItem(this.key) === EMPTY_STORAGE;
  }

  #isLocalStorage() {
    return this.storageType === STORAGE_TYPE.LOCAL;
  }
}

export {
  Storage
}