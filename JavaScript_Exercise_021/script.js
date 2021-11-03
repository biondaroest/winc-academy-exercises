
let colors = ['yellow', 'blue', 'red', 'orange'];

//While loop
let start = 0

while (start < colors.length) {
    console.log(colors[start]);
    start++;
}

console.log(" ");

//For loop
for (empty = 0; empty < colors.length; empty++) {
    console.log(colors[empty]);
}

console.log(" ");

//For Each Array
colors.forEach(element => console.log(element));


console.log(" ");
// Hoeveel regels neemt mijn for loop en mijn while loop in beslag? For loop: 2 regels, While loop: 4 regels.
// Hoeveel regels neemt mijn forEach method in beslag? 1 regel.
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? Ik vind de for loop het fijnst lezen. Omdat deze kort is, maar alles staat er wel volledig uitgeschreven op.
// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object. The for ... in statement.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?


let dog = {
    name: 'Fred',
    age: 7,
    breed: 'Labrador',
    color: 'Brown',
    skills: ['Sit', ' Fetch', ' Lay-down']
};

for (const property in dog) {
    console.log(`${property}: ${dog[property]}`);
}
