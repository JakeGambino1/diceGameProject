"use strict"
/*
||||||||||||||| User Stories ||||||||||||||||||||||||||
As a player, I want the game to be fairly balanced.
As a player, I want to have 2 mullegans on some stat rolls.
As a player, I want my stats to be baserd off dice rolls.
As a player, I want the damage to be properly calculated based off damage roll and stat values.
As a player, I want he correct player to win the game when the other player's health reaches zero.

Nice to Haves:
Roll all stats and Begin (quickplay button);

Goal: Build a functional, console-based dice game utilizing JavaScript and its best practices.

Technologies: JavaScript

User stories:
(5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.
(10 points): As a developer, I want to come up with a game concept played with dice, ensuring that my game concept is more complicated than “War”.
(10 points): As a developer, I want my game concept to be approved by an instructor, with part of the process being that I walk the instructor through my gameidea so that project user stories can be written out with the instructor.
(20 points): As a developer, I want my game to have gameplay functionality.
(10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number), regardless of the number of sides.
(10 points): As a developer, I want to utilize six different dice within my game. (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided.Different dice may be substituted. No 2-sided die.)

*/

class Player{
    constructor(name, weapon, attackRating, defenseRating, healthTotal){
    this.name = name;
    this.weapon = weapon;
    this.attackRating = attackRating;
    this.defenseRating = defenseRating;
    this.healthTotal = healthTotal;
    }
} 

let playerOne = {

}

let playerTwo = {
    
}

function rollDice(sides){
    let diceRoll = generateRandomNumber(sides);
    return diceRoll;
}

function generateRandomNumber(maxRoll){
    let randomNumber = 1 + Math.floor(Math.random() * maxRoll);
    return randomNumber;
}

function weaponRoll(playerRolling){
    let weaponTypeRoll = rollDice(3);

    if (playerRolling == 1){
        if (weaponTypeRoll == 1){
            document.getElementById("playerOne_weapon").value = "sword";
        }
        else if (weaponTypeRoll == 2){
            document.getElementById("playerOne_weapon").value = "hammer";
        }
        else if (weaponTypeRoll == 3) {
            document.getElementById("playerOne_weapon").value = "shield";
        }
        else {
            console.log("error");
        }
        document.getElementById("playerOne_weapon").setAttribute("disabled", true);
        document.getElementById("playerOne_weaponRoll").classList.add("hide");
    }
    else {
        if (weaponTypeRoll == 1){
            document.getElementById("playerTwo_weapon").value = "sword";
        }
        else if (weaponTypeRoll == 2){
            document.getElementById("playerTwo_weapon").value = "hammer";
        }
        else if (weaponTypeRoll == 3) {
            document.getElementById("playerTwo_weapon").value = "shield";
        }
        else {
            console.log("error");
        }
        document.getElementById("playerTwo_weapon").setAttribute("disabled", true);
        document.getElementById("playerTwo_weaponRoll").classList.add("hide");
    }
}

function attackRatingRoll(playerRolling){
    let attackRatingMax = 10;
    let attackRating = rollDice(attackRatingMax);

    if (playerRolling == 1){
        document.getElementById("playerOne_attackRating").value=attackRating;
        document.getElementById("playerOne_attackRatingRoll").classList.add("hide");
        document.getElementById("playerOne_attackRating").setAttribute("disabled", true);
    }
    else {
        document.getElementById("playerTwo_attackRating").value=attackRating;
        document.getElementById("playerTwo_attackRatingRoll").classList.add("hide");
        document.getElementById("playerTwo_attackRating").setAttribute("disabled", true);
    }
}

function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    let defenseRating = rollDice(defenseRatingMax);

    if (playerRolling == 1){
        document.getElementById("playerOne_defenseRating").value=defenseRating;
        document.getElementById("playerOne_defenseRatingRoll").classList.add("hide");
        document.getElementById("playerOne_defenseRating").setAttribute("disabled", true);
    }
    else {
        document.getElementById("playerTwo_defenseRating").value=defenseRating;
        document.getElementById("playerTwo_defenseRatingRoll").classList.add("hide");
        document.getElementById("playerTwo_defenseRating").setAttribute("disabled", true);
    }
}

function healthTotalRoll(playerRolling){
    let baseHealth = 10;
    let healthBonusMax = 20;
    let totalHealth = rollDice(healthBonusMax) + baseHealth;

    if (playerRolling == 1){
        document.getElementById("playerOne_healthTotal").value=totalHealth;
        document.getElementById("playerOne_healthTotalRoll").classList.add("hide");
        document.getElementById("playerOne_healthTotal").setAttribute("disabled", true);
    }
    else {
        document.getElementById("playerTwo_healthTotal").value=totalHealth;
        document.getElementById("playerTwo_healthTotalRoll").classList.add("hide");
        document.getElementById("playerTwo_healthTotal").setAttribute("disabled", true);
    }
}

function confirmPlayer(whichPlayerConfirmed){

    if (whichPlayerConfirmed == 1){
        playerOne = new Player(
            name = prompt("What name would you like to use for Player 1?"),
            document.getElementById("playerOne_weapon").value,
            document.getElementById("playerOne_attackRating").value,
            document.getElementById("playerOne_defenseRating").value,
            document.getElementById("playerOne_healthTotal").value
        )
        document.getElementById("playerOne_confirm").classList.add("hide");
        document.getElementById("playerOneName").innerHTML = name;
    }
    else if (whichPlayerConfirmed == 2){
        playerTwo = new Player(
            name = prompt("What name would you like to use for Player 2?"),
            document.getElementById("playerTwo_weapon").value, 
            document.getElementById("playerTwo_attackRating").value, 
            document.getElementById("playerTwo_defenseRating").value, 
            document.getElementById("playerTwo_healthTotal").value
            )    
            document.getElementById("playerTwo_confirm").classList.add("hide"); 
            document.getElementById("playerTwoName").innerHTML = name;
    }
}

function beginGame(){
    let attackingPlayer;
    let defendingPlayer;
    if (whoGoesFirst(2) == true){
        attackingPlayer = playerOne;
        defendingPlayer = playerTwo;
    }
    else {
        attackingPlayer = playerTwo;
        defendingPlayer = playerOne;
    }

    console.log(attackingPlayer.name + " will be attacking first!");

    while (defendingPlayer.healthTotal > 0) {
        combatPhase(attackingPlayer, defendingPlayer);
    }

    while (defendingPlayer.healthTotal > 0) {
        combatPhase(defendingPlayer, attackingPlayer);
    }
}

function combatPhase(attackingPlayer, defendingPlayer){
    let didStagger = staggerChance();
    let didMiss = missChance();
    let attackDamage = calculateAttackDefenseOutcome(attackingPlayer, defendingPlayer);
    let weaponTypeBonusDmg = weaponTypeBonusDamage(attackingPlayer, defendingPlayer);
    let totalDamageDealt = attackDamage + weaponTypeBonusDmg;

    if(didStagger){
        attackingPlayer.defenseRating = attackingPlayer.defenseRating - 1;
    }

    if(didMiss == false){
        damageAppliedToHealth(defendingPlayer, totalDamageDealt);
        console.log(defendingPlayer.name + " took " + totalDamageDealt + " damage!");
        console.log(defendingPlayer.name + " has " + defendingPlayer.healthTotal + " health remaining!");
    }

    postCombatUpdate();
    checkWinCondition(defendingPlayer, attackingPlayer);
}

function whoGoesFirst(){
    if (rollDice(2) == 1) {
        return true;
    }
    else {
        return false;
    }
}

function calculateAttackDefenseOutcome(attackingPlayer,defendingPlayer){
    let damageDealt = attackingPlayer.attackRating - defendingPlayer.defenseRating;
    
    if(damageDealt < 0){
        damageDealt = 1;
    }
    else {
        damageDealt = damageDealt;
    }
    console.log("calculateAttackDefenseOutcome damage = " + damageDealt);
    return damageDealt;
}

function weaponTypeBonusDamage(attackingPlayer, defendingPlayer){
    if (
    (attackingPlayer == "sword" && defendingPlayer == "hammer") || 
    (attackingPlayer == "hammer" && defendingPlayer == "shield") || 
    (attackingPlayer == "shield" && defendingPlayer == "sword")
    ){
        console.log(attackingPlayer.name + " is doing extra damage because " + attackingPlayer.weapon + " beats" + defendingPlayer.weapon + "!");
        return true;
    }
    else {
        console.log(defendingPlayer.name + "'s " + defendingPlayer.weapon + "  is strong against " + attackingPlayer.name + "'s " + attackingPlayer.weapon + " and will take no extra damage!");
        return false;
    }
}

function damageAppliedToHealth(defendingPlayer, damageDealt){
    console.log(defendingPlayer.name + " is going to take " + damageDealt + ".");
    defendingPlayer.healthTotal -= damageDealt;
}

// Stagger Roll - if stagger on attack, you lose 1 defense.
function staggerChance(){
    let firstRoll = rollDice(6);
    console.log("first stagger roll is " + firstRoll + ", if your next roll is on the same side of 3, you will stagger and have reduced defense.");
    let secondRoll = rollDice(6);
    console.log("second roll is " + secondRoll + ".");

    if ((firstRoll > 3 && secondRoll > 3) || firstRoll <= 3 && secondRoll <= 3) {
        console.log("first roll was " + firstRoll + ", second roll was " + secondRoll + ", no stagger debuff applied.");
        return false;
    }
    else {
        console.log("first roll was " + firstRoll + ", second roll was " + secondRoll + ", no stagger debuff (-1 Defense Rating) will be applied at end of turn.")
        return true;
    }
}

function missChance(){
    let miss = false;
    let missRoll = rollDice(8);
    if(missRoll > 7) {
        miss = true;
    }
    else {
        miss = false;
    }
    return miss;
}

function checkWinCondition(defendingPlayer, attackingPlayer){
    if(defendingPlayer.healthTotal < 1) {
        alert(attackingPlayer.name + " has won the game and is now the ultimate alpha!");
    }
}

function postCombatUpdate(){
    document.getElementById("playerOne_weapon").value = playerOne.weapon;
    document.getElementById("playerTwo_weapon").value = playerTwo.weapon;

    document.getElementById("playerOne_attackRating").value = playerOne.attackRating;
    document.getElementById("playerTwo_attackRating").value = playerTwo.attackRating;

    document.getElementById("playerOne_defenseRating").value = playerOne.defenseRating;
    document.getElementById("playerTwo_defenseRating").value = playerTwo.defenseRating;

    document.getElementById("playerOne_healthTotal").value = playerOne.healthTotal;
    document.getElementById("playerTwo_healthTotal").value = playerTwo.healthTotal;

    // playerOne.weapon = document.getElementById("playerOne_weapon").value;
    // playerTwo.weapon = document.getElementById("playerTwo_weapon").value;

    // playerOne.attackRating = document.getElementById("playerOne_attackRating").value;
    // playerTwo.attackRating = document.getElementById("playerTwo_attackRating").value;

    // playerOne.defenseRating = document.getElementById("playerOne_defenseRating").value;
    // playerTwo.defenseRating = document.getElementById("playerTwo_defenseRating").value;

    // playerOne.healthTotal = document.getElementById("playerOne_healthTotal").value;
    // playerTwo.healthTotal = document.getElementById("playerTwo_healthTotal").value;
}

// Reroll statistic
function reRollStatistic(){

}

// Modify Statistic
function modifyStatistic(playerModifying, statisticToBeModified, amount){

}


// Nice to Haves
function quickPlay(){

}