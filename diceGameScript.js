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

// Dice Roll Function XXXXXXXXXXX
function rollDice(sides){
    let diceRoll = generateRandomNumber(sides);
    return diceRoll;
}

// Generate Random Number XXXXXXXXX
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

// Roll Attack Rating Value XXXXXX
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

// Lock in the stats before game starts
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
        attackingPlayer = playerOne.name;
        defendingPlayer = playerTwo.name;
    }
    else {
        attackingPlayer = playerTwo.name;
        defendingPlayer = playerOne.name;
    }
    console.log(attackingPlayer + " will be attacking first!");


    

    // postCombatUpdate();
}

// Who goes first
function whoGoesFirst(){
    if (rollDice(2) == 1) {
        return true;
    }
    else {
        return false;
    }
}

function calculateAttackDefenseOutcome(offense,defense){
    attackOutcome = offense - defense;
    if(attackDefenseOutcome < 0){
        attackDefenseOutcome = 1;
        damageAppliedToHealth(attackDefenseOutcome);
        return attackDefenseOutcome;
    }
    else {
        damageAppliedToHealth(attackDefenseOutcome);
        return attackDefenseOutcome;
    }
}

function weaponTypeBonusDamage(attackingPlayer, defendingPlayer){
    let weaponTypeBonus = false;
    
    if (
    (attackingPlayer == "sword" && defendingPlayer == "hammer") || 
    (attackingPlayer == "hammer" && defendingPlayer == "shield") || 
    (attackingPlayer == "shield" && defendingPlayer == "sword")
    ){
        weaponTypeBonus = true;
    }
    else {
        weaponTypeBonus = false;
    }

    return weaponTypeBonus;
}

function damageAppliedToHealth(damage, currentHealth){
    currentHealth -= damage;
    return currentHealth;
}

// Stagger Roll - if stagger on attack, you lose 1 defense.
function staggerChance(){

    let staggerDefenseModifier = -1;
    firstRoll = rollDice(6);
    secondRoll = rollDice(6);

    if ((firstRoll > 3 && secondRoll > 3) || firstroll <= 3 && secondRoll <= 3) {
        modifyStatistic(defenseRating, 0);
    }
    else {
        modifyStatistic(defenseRating, staggerDefenseModifier);
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

function postCombatUpdate(){
    document.getElementById("playerOne_weapon").value = playerOne.weapon;
    document.getElementById("playerTwo_weapon").value = playerTwo.weapon;

    document.getElementById("playerOne_attackRating").value = playerOne.attackRating;
    document.getElementById("playerTwo_attackRating").value = playerTwo.attackRating;

    document.getElementById("playerOne_defenseRating").value = playerOne.defenseRating;
    document.getElementById("playerTwo_defenseRating").value = playerTwo.defenseRating;

    document.getElementById("playerOne_healthTotal").value = playerOne.healthTotal;
    document.getElementById("playerTwo_healthTotal").value = playerTwo.healthTotal;
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