

alert("It is the zombie apocaplypse. You are looting a store and a zombie bursts through the door.");
var weapon = prompt("You reach around frantically for a weapon. What do you grab? A wand, an axe, or a shotgun.");
var randomNumber = Math.round( Math.random() * 9);

alert("You attack the zombie with your " + weapon);

  if(randomNumber >= 0 && randomNumber <= 3){
  alert("The zombie bites you. You lose.");
}else if(randomNumber >= 3 && randomNumber <= 6){
  alert("You kill the zombie. You win!");
}else if(randomNumber >= 6 && randomNumber <= 9){
  alert("The zombie is looking for brains. It walks past you.");
}

  

console.log(randomNumber);