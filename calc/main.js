function calc(operator, numberA, numberB) {
	if (typeof numberA === "number" && typeof numberB === "number" && arguments.length === 3) {
		switch (operator) {
			case "+":
				return numberA + numberB;
			case "-":
				return numberA - numberB;
			case "*":
				return numberA * numberB;
			case "/":
				if (numberB !== 0) {
					return numberA / numberB;
				} else {
					return "Error: Деление на 0 запрещено!";
				};
			case "%":
				if (numberB !== 0) {
					return numberA % numberB;
				} else {
					return "Error: Деление на 0 запрещено!";
				};
			case "pow":
				return numberA ** numberB;
			default:
				return "Error: Введите верный оператор!";
		}
	} else {
		return "Error: Введите число!";
	}
}

console.log(calc("%", 1, 0))