
// Checking if a number is bigger than 100.
const numberChecker = function (number) {
    const checkResult = (number > 100);
    return checkResult;
};

const result = numberChecker(103);
// console.log(result);

// Brenda the Bouncer Bot
const welcomeToTheClub = function (maxPeople, currentPeople, agePerson) {
    if (maxPeople <= currentPeople) {
        return "It's too busy now, come back later."
    }
    if (agePerson < 18) {
        return "This is a club for adults."
    } else {
        return "Come in!"
    }
}

// const result2 = welcomeToTheClub(100, 100, 14);
// const result2 = welcomeToTheClub(100, 88, 14);
const result2 = welcomeToTheClub(100, 23, 18);
console.log(result2);


//Calculating an average.
const averageNumber = function (number1, number2, number3, number4, number5) {
    const sumAverage = ((number1 + number2 + number3 + number4 + number5) / 5);
    return (Math.round(sumAverage));
}

// const result3 = averageNumber(23, 1, 12, 5, 4);
const result3 = averageNumber(1, 1, 1, 1, 1);

console.log(result3);