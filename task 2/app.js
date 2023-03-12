function addToDisplay(value) {
	document.getElementById('result').value += value;
}

function clearDisplay() {
	document.getElementById('result').value = '';
}

function calculate() {
	var result = eval(document.getElementById('result').value);
	document.getElementById('result').value = result;
}
