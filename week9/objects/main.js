import {
  Storage
} from './data_storage.js';
import {
  DEFAULT_STORAGE
} from './consts.js';

const dogsList = new Storage('dogs', DEFAULT_STORAGE);
dogsList.set('Sharik');
console.log(dogsList.isEmpty());
console.log(dogsList.get());
dogsList.clear();
console.log(dogsList.isEmpty());

const catsList = new Storage('dogs', 'session');
catsList.set('Murka');
console.log(catsList.isEmpty());
console.log(catsList.get());
catsList.clear();
console.log(catsList.isEmpty());