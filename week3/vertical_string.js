function showVerticalMessage(string) {
  if (string[0] === "м") {
    console.log("М");
  } else {
    console.log(string[0]);
  }
  for (let i = 1; i < (string.length > 10 ? 10 : string.length); i++) {
    console.log(string[i]);
  }
}

showVerticalMessage("Здравствуй о дивный чудный мир");