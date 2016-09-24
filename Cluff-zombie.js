/*

Steps/Project Plan:
-Set the stage/Intro
-Name Your Character
-Choose a class
-Scenario + Options
-Class check vs option requirements
-Outcome

*/

// Initalize, or declare, a variable that will store the outcome of the game (win or lose)
var outcome;

// Alert the introduction
window.alert("One day you wake up and the world around you has gone the way of the movies.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.");

// Store an array of possible beginning scenarios
var beginningScenarios = ["You wake up in a hospital.  You hope it won't be like the hospitals in the movies.  You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "You've seen the movies and played the games, you know exactly what to do.  You see a small convenience store up ahead and decide to loot it for goods." ];

// Random number function that generates a whole number between 0 and range
function randomNumber(range) {
  "use strict";
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}

// Alert a random scenario from the beginningScenarios array
window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

// Create a character object
var character = {
  health: 5,
  strength: 2,
  magic: 1,
  
  // Ask the player to choose a name for the character
  name: window.prompt("What is your name?"),
  
  // Ask the player to choose a class for the character
  characterClass: window.prompt("These times test the strengths of our character. What were you before the war? (Choose from: student, doctor, or wizard").toLowerCase()
  
};

if (character.name == "FRBLFRB") {
  window.alert("You remember who you are and the grand purpose you are there for. You feel your great power fill your body. The frail earth can no longer stop your conquest. You laugh as you fly off to establish yourself as the ruler of all creation.");
  outcome = "win";
}

if (outcome === "lose") {
  window.alert("You lose!");
} else if (outcome === "win") {
  window.alert("You win!");
}

// Check to see if player has entered a name...if not, give them another chance
if (!character.name) {
  character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");
  
  // If a name still has not been entered, assign a name to the character
  if (!character.name) {
    window.alert("Well I did try to warn you. Ricky it is then.");
    character.name = "Ricky";
  }
}

// If the character is a soldier, change the strength property from 0 to 5
if (character.characterClass === "student") {
  character.strength = 5;
  character.magic = 0;
}
// If the character is a politician, change the stealth property from 0 to 5
if (character.characterClass === "wizard") {
  character.magic = 5;
}
// If the character is a doctor, change the health property from 5 to 7
if (character.characterClass === "doctor") {
  character.health = 7;
  character.magic = 3;
}

if (character.name != "FRBLFRB") {
// Alert the zombie encounter scenario, and store the player's chosen response in the choice variable
var choice = window.prompt("The brave adventurer and former " + character.characterClass + " " + character.name + " enters a store for some loot.  You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or banish the zombie? ").toLowerCase();

// Check to see if the player's choice was attack
if (choice === "attack") {
  
  // If so, check to see if the character's strength is 5
  if (character.strength === 5) {
    
    // If the strength is 5, alert the result
    window.alert("You clutch at the zombies throat easily crushing its frail esophagus! You loot the store for goods and find an axe, a pack of batteries, and three cans of baked beans.");
    
    // Set outcome variable to win
    outcome = "win";
    
    // Increase stats if success
    character.strength++;
    
    // If the character's strength is less than 5, alert a different scenario
  } else if (character.strength <= 5) {
    window.alert("You fearlessly charge the zombie with all your strength.  Using your mighty powers you crush thy foe as if it were a paper cup.");
    window.alert("Just kidding. You are immediately bitten by the zombie and die. Well you don't exactly die. You'll wake up again feeling quite hungry for human flesh.");
    
    // Set outcome variable to lose
    outcome = "lose";
  }
}

// Check to see if the player's choice was to sneak by the zombie
if (choice === "banish" || choice === "banish the zombie") {
  
  //If the character's stealth is 5, they sneakby the zombie
  if (character.magic === 5) {
    window.alert("By the power of Greyskull you smite your foe and send them into the endless abyss.");
    
    // Set outcome variable to win
    outcome = "win";
  }
  
  //Check to see if the character's stealth is less than 5
  if (character.magic < 5) {
    
    // If stealth is less than 5, the zombie is alerted but the player can still win if their strength is high enough
    window.alert("You utter a mighty incantation to try to send the zombie back to the depths. The zombie turns to look at you as you remember you never learned how to use magic.");
    
    // Check to see if strength is 5
    if (character.strength === 5) {
      window.alert("Although you have alerted the zombie to your presence you jump kick the zombie in the head and it explodes into a bloody mess.");
      
      // Set outcome variable to win
      outcome = "win";
      
    // If stealth and strength are less than 5, the player loses
    } else {
      window.alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction.");
      
      // Set outcome variable to lose
      outcome = "lose";
    }
  }
}
}

// Check to see if outcome is win or lose, and alert the appropriate result
if (outcome === "lose") {
  window.alert("You lose!");
} else if (outcome === "win") {
  window.alert("You win!");
}
  