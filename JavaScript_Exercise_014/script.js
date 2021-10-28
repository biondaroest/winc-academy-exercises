//Deel 1 - Objecten
let person = {
    name: 'Bionda',
    age: 28
};
//Log volledig object.
console.log(person);

//Log enkel naam van object middels dot notation.
console.log(person.name);

//Log enkel leeftijd van object middels bracket notation.
console.log(person['age']);

//Maak een array.
let evaluations = [7, 10, 9];
console.log(evaluations);

//Deel 2 - Arrays
let colors = ["groen", "blauw", "rood"];
console.log(colors);

console.log(colors.length);

console.log(colors[0]);

//Log het laatste element van de array.
console.log(colors[colors.length - 1]);

//Voeg een kleur toe aan de array.
colors.push("geel");

console.log(colors);

//Voeg een cijfer toe aan de array.
colors.push(5);

console.log(colors);

//Voeg een object toe aan de array.
let greeting = {
    greeting: "hi ik ben een object"
};

colors.push(greeting);

console.log(colors);

//Log het laatste element van de array.
console.log(colors[colors.length - 1]);


//Deel 3 - Katten objecten

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

//Log de naam van het laatste kattenras.
console.log("Naam kattensoort kat 1:", catBreeds[2].name);

//Log de energy levels van de eerste kat.
console.log("Energylevel kattensoort 1:", catBreeds[0].energy_level);

//Log het eerste temperament van de temperamenten van de tweede kat.
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);

//Log het laatst temperament van de temperamenten van de derde kat.
console.log("Laatste temperament kat 3:", catBreeds[2].temperament[4]);

//Log het favoriete voedsel van de derde kat.
console.log("Favo voedsel van kat 3:", catBreeds[2].food.favourite_food);