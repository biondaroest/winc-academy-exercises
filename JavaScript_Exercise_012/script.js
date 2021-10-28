const age = 28;
const isFemale = false;
const driverStatus = "Bob";

// Eerste statement kijkt of je oud genoeg bent.
if (age >= 18) {
    console.log("Welkom, veel plezier vanavond!");

    // Tweede statement kijkt of je welkom bent op ladies night.
    if (isFemale) {
        console.log("Geniet van Ladies Night!");

        // Derde statement controleert of je de Bob bent.
        if (driverStatus == "Bob") {
            console.log("Je bent de Bob, ik wens je een veilige rit!");
        } else {
            console.log("Je bent niet de Bob, geef die sleutels maar aan mij.")
        }
    } else {
        console.log("Sorry, vandaag is ladies night. Je bent vanavond niet welkom.")
    }

} else {
    console.log("Sorry, je bent te jong. Ga nog maar even buitenspelen.");
}



