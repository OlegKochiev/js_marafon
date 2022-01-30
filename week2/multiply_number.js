function multiplyNumber(obj) {
  for (let key in obj) {
    if (typeof (obj[key]) === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 400,
  weight: "1ft"
}

console.log(menu);

multiplyNumber(menu)

console.log(menu);