function wizard(magic) {
    console.log("My magic is at " + magic + " .");
}
wizard(10);

function soldier(health, strength) {
    return health + strength;
}
var ultimate = soldier(6,10);
console.log("My health and strength combined is " + ultimate + " .");

var superSpell = function () {
    console.log("Avada Kedavra!");
}
superSpell();

var moon = 15;
var transform;
if (moon == 100) {
    transform = true;
    console.log("The moon is full. Werewolves are out.");
} else {
    transform = false;
    console.log("We are safe from wolves tonight.");
}

var castTime = 10;
var spellType;
if (castTime <= 2) {
    spellType = "instant";
} else if (castTime >= 3 && castTime <= 6) {
    spellType = "timed";
} else {
    spellType = "ultimate";
}
console.log(spellType);

var health = "medium";
var helper;
switch (health) {
    case "low":
        helper = "You need a health potion.";
        break;
         case "medium":
        helper = "You'll need to drink a potion soon.";
        break;
         case "high":
        helper = "Your health is okay.";
        break;
    default:
        helper = "You are at full health."
        break;
}
console.log(helper);