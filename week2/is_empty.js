function isEmpty(object) {
  for (key in object) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));
schedule.sayHello = "Hello";
console.log(isEmpty(schedule));