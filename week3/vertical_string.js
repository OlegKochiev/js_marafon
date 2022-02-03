function showVerticalMessage(string) {
  console.log(string[0] === "м" ? "М" : string[0]);
  for (let letter of (string.slice(1, 10))) {
    console.log(letter);
  }
}

showVerticalMessage("Здравствуй о дивный чудный мир");
showVerticalMessage("марафон");
showVerticalMessage("Марафон");