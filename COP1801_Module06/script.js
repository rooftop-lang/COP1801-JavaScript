


// Create a constructor for the dog
function Dog(name, breed, show, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.show = show;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to determine if the dog can talk
    this.myGreeting = function () {
        if (this.canTalk === true) {
            return "Hello! My name is " + this.name +
                ". I can talk! " + this.mySound;
        } else {
            return "Hello! My name is " + this.name +
                ". I cannot talk.";
        }
    };
}

// Create the dog object using the constructor
const myDogConst = new Dog(
    "Puff",
    "Poodle",
    "The Proud Family",
    "The family dog; about a 14-year-old and her wacky family and friends",
    "I may be small, but don't mess with me or Suga Mama!",
    false
);


// Create a second dog using the constructor
const dog2 = new Dog(
    "Scooby-Doo",
    "Great Dane",
    "Scooby-Doo, Where Are You!",
    "A talking dog who solves mysteries with his friends",
    "Scooby-Dooby-Doo!",
    true
);

// Create a third dog using the constructor
const dog3 = new Dog(
    "Brian Griffin",
    "Labrador Retriever",
    "Family Guy",
    "The Griffin family's talking dog",
    "Hello, I'm Brian.",
    true
);

// Function to display the selected dog's information
function displayDog(dog) {
    let dogInfo = "<h2>You selected " + dog.name + "!</h2>";

    // Loop through the dog's properties
    for (let property in dog) {
        if (property !== "myGreeting") {
            let label = property;
            let value = dog[property];

            if (property === "mySound") {
                label = "My Sound";
            } else if (property === "canTalk") {
                label = "Can Talk";
                value = value ? "Yes" : "No";
            } else {
                label = property.charAt(0).toUpperCase() + property.slice(1);
            }

            dogInfo += "<p>" + label + ": " + value + "</p>";
        }
    }
    // Display the dog's greeting
    dogInfo += "<p>" + dog.myGreeting() + "</p>";

    document.getElementById("dogGreeting").innerHTML = dogInfo;
}

// Ask the user to select a dog
let choice = prompt("Choose a dog: Puff, Scooby-Doo, or Brian Griffin");

// Check which dog the user selected
if (choice !== null) {
    choice = choice.trim().toLowerCase();

    if (choice === "puff") {
        displayDog(myDogConst);
    } else if (choice === "scooby-doo") {
        displayDog(dog2);
    } else if (choice === "brian griffin") {
        displayDog(dog3);
    } else {
        document.getElementById("dogGreeting").innerHTML =
            "<p>Error: The dog you selected does not exist.</p>";
    }
} else {
    document.getElementById("dogGreeting").innerHTML =
        "<p>No dog was selected.</p>";
}