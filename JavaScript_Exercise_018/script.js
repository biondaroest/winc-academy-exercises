

// Functione Declaration - Oudere manier
function sumSquared1(number1, number2) {
    const sum1 = number1 * number1;
    console.log(sum1);
    const sum2 = number2 * number2;
    console.log(sum2);
    const sum3 = sum1 + sum2;
    console.log(sum3);
    return sum3 * sum3;
}

const result1 = sumSquared1(2, 5);
console.log("Function Declaration " + result1);

console.log(" ");


// Function expression - Moderne manier
const sumSquared2 = function (firstNumber, secondNumber) {
    const sumResult1 = ((firstNumber * firstNumber) + (secondNumber * secondNumber));
    console.log(sumResult1);
    return sumResult1 * sumResult1;
};

const result2 = sumSquared2(2, 5);
console.log("Function Expression: " + result2);

console.log(" ");

// Arrow function - Nieuwe hippe manier
const sumSquared3 = (inputNumber1, inputNumber2) => {
    const squaredResult1 = ((inputNumber1 * inputNumber1) + (inputNumber2 * inputNumber2));
    return squaredResult1 * squaredResult1;
}

const result3 = sumSquared3(2, 5);
console.log("Arrow Function: " + result3);
