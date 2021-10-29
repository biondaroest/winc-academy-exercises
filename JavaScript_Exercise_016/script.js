
// Function without the use of an argument.
const paintWallsRed = function () {
    console.log("The wall has been painted red.");

}

paintWallsRed();


// Function with the use of an argument.
const paintWallsColor = function (color) {
    console.log("The wall has been painted " + color + ".");
}

paintWallsColor("green");
paintWallsColor("yellow");

// Call function without an argument. Output: Undefined.
paintWallsColor();

// Function with multiple arguments.
const paintWallsPlaceAndColor = function (color, place) {
    console.log("The wall on the " + place + " has been painted " + color + ".");
}

paintWallsPlaceAndColor("north", "purple");

//Does the order of the arguments matter when calling the function? Yes.
paintWallsPlaceAndColor("grey", "south");

