"use strict"
/*
||||||||||||||| User Stories ||||||||||||||||||||||||||
As a player, I want the game to be fairly balanced.
As a player, I want to have 2 mullegans on some stat rolls.
As a player, I want my stats to be baserd off dice rolls.
As a player, I want the damage to be properly calculated based off damage roll and stat values.
As a player, I want he correct player to win the game when the other player's health reaches zero.

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

function Player(name, weapon, attackRating, defenseRating, healthTotal){
    this.name = name;
    this.weapon = weapon;
    this.attackRating = attackRating;
    this.defenseRating = defenseRating;
    this.healthTotal = healthTotal;
}

let player1 = {

}

let player2 = {
    
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
    let weaponType;

    if (weaponTypeRoll == 1){
        weaponType = sword;
        return weaponType;
    }
    else if (weaponTypeRoll == 2){
        weaponType = hammer;
        return weaponType;
    }
    else if (weaponTypeRoll == 3) {
        weaponType = shield;
        return weaponType;
    }
    else {
        console.log("error");
    }
}

// Roll Attack Rating Value XXXXXX
function attackRatingRoll(playerRolling){
    let attackRatingMax = 10;
    let attackRating = rollDice(attackRatingMax);

    if (playerRolling == 1){
        document.getElementById("playerOne_attackRating").value=attackRating;
        document.getElementById("playerOne_attackRatingRoll").classList.add("hide");
    }
    else {
        document.getElementById("playerTwo_attackRating").value=attackRating;
        document.getElementById("playerTwo_attackRatingRoll").classList.add("hide");
    }
}

function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    let defenseRating = rollDice(defenseRatingMax);

    if (playerRolling == 1){
        document.getElementById("playerOne_defenseRating").value=defenseRating;
        document.getElementById("playerOne_defenseRatingRoll").classList.add("hide");
    }
    else {
        document.getElementById("playerTwo_defenseRating").value=defenseRating;
        document.getElementById("playerTwo_defenseRatingRoll").classList.add("hide");
    }
}

function healthTotalRoll(playerRolling){
    let baseHealth = 10;
    let healthBonusMax = 20;
    let totalHealth = rollDice(healthBonusMax) + baseHealth;

    if (playerRolling == 1){
        document.getElementById("playerOne_healthTotal").value=totalHealth;
        document.getElementById("playerOne_healthTotalRoll").classList.add("hide");
    }
    else {
        document.getElementById("playerTwo_healthTotal").value=totalHealth;
        document.getElementById("playerTwo_healthTotalRoll").classList.add("hide");
    }
}

// Lock in the stats before game starts
function confirmCharacter(whichPlayerConfirmed){
    
    whichPlayerConfirmed = new Player(
        name = playerOne,
        weapon = 1, 
        attackRating = 10, 
        defenseRating = 12, 
        healthTotal= 30

    );
}

// Who goes first
function whoGoesFirst(){
    if (rollDice(2) == 1) {
        // player 1 goes first
    }
    else {
        // player 2 goes first
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

function weaponTypeBonusDamage(playerOne_weapon, playerTwo_weapon){
    let weaponTypeBonus;
    
    if (
    (playerOne_weapon == 1 && playerTwo_weapon == 2) || 
    (playerOne_weapon == 2 && playerTwo_weapon == 3) || 
    (playerOne_weapon == 3 && playerTwo_weapon == 1) ||

    (playerTwo_weapon == 1 && playerOne_weapon == 2) ||
    (playerTwo_weapon == 2 && playerOne_weapon == 3) ||
    (playerTwo_weapon == 3 && playerOne_weapon == 1)
    ) {
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

// Reroll statistic
function reRollStatistic(){

}

// Modify Statistic
function modifyStatistic(playerModifying, statisticToBeModified, amount){

}