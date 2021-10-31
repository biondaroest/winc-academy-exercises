
// Opdracht Hey kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function (age) {
    const checkAdult = checkAge(23);
    if (checkAdult === true) {
        console.log("Hello there");
    } else {
        console.log("Hey kiddo");
    }
}

greeting();


// Opdracht 1 
const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const vatAmount = calculateVatAmount(basePrice, VATPercentage);
    console.log(vatAmount + basePrice);
    return vatAmount + basePrice;
}

const calculateVatAmount = function (basePrice, VATPercentage) {
    console.log(basePrice * VATPercentage);
    return basePrice * VATPercentage;
}

const result1 = calculatePriceIncludingVAT(100, 0.21);
console.log("Result 1: " + result1);



// Opdracht 2
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    console.log(priceIncludingVAT / VATPercentage);
    return (priceIncludingVAT / VATPercentage);
}

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    console.log(basePrice, VAT);
    return (basePrice, VAT);
};

const result2 = calculateBasePriceAndVAT(121, 1.21);
console.log("Result 2: " + result2);