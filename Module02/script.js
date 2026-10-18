// Ask the user to enter their first name
let Fname = prompt("What is your first name?");

// Display a welcome message using the user's name
document.getElementById("welcome").innerHTML =
    "Welcome, " + Fname + "!";

// Create a constant to store the value of Pi
const piValue = 3.1415926;

// Ask the user to enter their favorite number
let myFavNum = Number(prompt("What is your favorite number?"));

// Calculate the area of a circle using the favorite number as the radius
let myArea = piValue * (myFavNum ** 2);

// Display the variables and calculated area on the webpage
document.getElementById("result").innerHTML =
    "Hello " + Fname +
    ", you entered " + myFavNum +
    " as your favorite number. " +
    "Using " + piValue + " as Pi, " +
    "the area of a circle with that radius would be " + myArea + ".";