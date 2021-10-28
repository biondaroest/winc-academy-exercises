const age = 28;
const isFemale = true;
const driverStatus = "Bob";
const firstName = "Sarah";
const totalAmount = 20;

// Eerste statement kijkt of je oud genoeg bent.
if (age >= 18) {
    console.log("Welkom, veel plezier vanavond!");

} else {
    console.log("Sorry, je bent te jong. Ga nog maar even buitenspelen.");
}

// Tweede statement kijkt of je welkom bent op ladies night.
if (isFemale) {
    console.log("Geniet van Ladies Night!");
} else {
    console.log("Sorry, vandaag is ladies night. Je bent vanavond niet welkom.")
}

// Derde statement controleert of je de Bob bent.
if (driverStatus == "Bob") {
    console.log("Je bent de Bob, ik wens je een veilige rit!");
} else {
    console.log("Je bent niet de Bob, geef die sleutels maar aan mij.")
}

//Jonge mensen lokken. Je krijgt korting als je tussen de 18 en 25 jaar bent.
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Kaartje is €10,-");
}

//Ludieke actie. De kroeg bestaat 50 jaar.
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Gefeliciteerd! Je krijgt een gratis biertje!");
} else {
    console.log("Biertje is €5,-");
}

//Jubileum korting
if (totalAmount >= 25) {
    console.log("Je krijgt gratis bitterballen!");

} else if (totalAmount >= 50) {
    console.log("Je krijgt gratis nachos!");

} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne!");

} else {
    console.log("Je moet meer spenderen maat!")
}