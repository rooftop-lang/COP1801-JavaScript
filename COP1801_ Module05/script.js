// Create an object literal for Puff from The Proud Family
const myDog = {
    name: "Puff",
    breed: "Poodle",
    show: "The Proud Family",
    notes: "The family dog; about a 14-year-old and her wacky family and friends",
    mySound: "I may be small, but don't mess with me or Suga Mama!"
};

// Display the dog's information on the webpage
document.getElementById("dogInfo").innerHTML =
    "<h2>Object Literal</h2>" +
    "<p>My dog's name is " + myDog.name + ".</p>" +
    "<p>He is a " + myDog.breed + ".</p>" +
    "<p>He appears on " + myDog.show + ".</p>" +
    "<p>Wikipedia notes: " + myDog.notes + ".</p>" +
    "<p>Puff says: " + myDog.mySound + "</p>";

    // Create a constructor for the dog
function Dog(name, breed, show, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.show = show;
   this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display the dog's greeting
    this.myGreeting = function() {
        return "Hello! My name is " + this.name +
            ". I am a " + this.breed +
            " from " + this.show +
            ". Wikipedia notes: " + this.notes +
            ". Can I talk? " + this.canTalk +
            ". " + this.mySound;
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

// Display the greeting on the webpage
document.getElementById("dogGreeting").innerHTML =
    "<h2>Constructor Object</h2>" +
    "<p>" + myDogConst.myGreeting() + "</p>";