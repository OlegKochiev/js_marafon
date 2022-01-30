function cloneObject(obj, newObj = {}) {
  console.log(obj);
  for (let key in obj) {
    if (typeof (obj[key]) === "object") {
      newObj.key = {};
      cloneObject(obj[key], newObj);
    } else {
      newObj.key = obj[key];
    }
  }
  return newObj;
}

let myObj = {
  name: "Jeny",
  size: {
    height: 100,
    massage: 20,
    food: {
      potato: true,
      pomodoro: false
    }
  }
}

console.log(cloneObject(myObj));

// not finished