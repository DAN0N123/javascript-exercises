const add = function(number1, number2) {
	return number1 + number2
};

const subtract = function(number1, number2) {
	return number1 - number2
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {sum += element});
  return sum
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {result *= element});
  return result
};

const power = function(number1,number2) {
	return Math.pow(number1, number2)
};

const factorial = function(number) {
	if (number == 0){
    return 1
  }
  else{
    let result = 1;
    for (let i=1; i<number+1; i++){
      result *= i;
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
