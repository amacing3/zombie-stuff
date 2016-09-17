

alert("It is the zombie apocaplypse. You are looting a store and a zombie bursts through the door.");
var weapon = prompt("You reach around frantically for a weapon. What do you grab? A wand, an axe, or a shotgun.");
var randomNumber = Math.round( Math.random() * 9);
var gameLevel = 1;


//randomNumber = 4;

function newLevel() {
  switch (gameLevel) {
    case 1:
      if (randomNumber >= 0 && randomNumber <= 3) {
        alert("The zombie bites you. You lose.");
      } else if (randomNumber >= 3 && randomNumber <= 6) {
        switch (weapon) {
          case weapon = "wand":
            alert("The zombie bursts into flames.");
            break;

          case weapon = "axe":
            alert("You hack the zombie to bits.");
            break;

          case weapon = "shotgun":
            alert("You blast the zombies head off.");
            break;

          default:
            alert("You can't do that.")
            break;
        }
        
      } else if (randomNumber >= 6 && randomNumber <= 9) {
        alert("The zombie is looking for brains. It walks past you.");
      }
      //if the result of the randomNumber var is greater than or equal to 3 go to level 2.
      if (randomNumber >= 3) {
        gameLevel = 2;
        newLevel();
      }
      break;

    case 2:
      alert(gameLevel);
      /*alert("You walk out into the street and see a small child huddled by a car.");
      var choice = prompt("What do you do? Touch the childs shoulder or run away?");
      switch (choice) {
        case "touch the childs shoulder":
          alert("The child feels cold. He tells you that a dog named fluffy bit him once.");
          break;

        case "run away":
          alert("You trip on a crack in the street and fall to the depths of hell.");
          break;

        default:
          alert("YOU CAN'T DO THAT.");
          break;
      }
      break;

    default:
      break;*/
  }
}

newLevel();

  