import {
  Storage
} from './data_storage.js';
import {
  STORAGE_TYPE
} from './consts.js';

const dogsList = new Storage('dogs', STORAGE_TYPE.LOCAL);
dogsList.set('Sharik');
console.log(dogsList.get());