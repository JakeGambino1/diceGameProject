/*
As a player, I want the game to be fairly balanced.
As a player, I want to have 2 mullegans on some stat rolls.
As a player, I want my stats to be baserd off dice rolls.
As a player, I want the damage to be properly calculated based off damage roll and stat values.
As a player, I want he correct player to win the game when the other player's health reaches zero.
*/

// Variables for player1/player2
// name -
// weapon - 
// attackRating - 
// defenseRating -
// healthTotal -

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

    return attackRating;
}

// Roll Defense Rating Value XXXXXX
function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    let defenseRating = rollDice(defenseRatingMax);

    return defenseRating;
}

// Roll Health Total Value XXXXXXXX
function healthTotalRoll(playerRolling){
    let baseHealth = 10;
    let healthBonusMax = 20;
    let totalHealth = rollDice(healthBonusMax) + baseHealth;

    return totalHealth;
}

function confirmCharacter(whichPlayerConfirmed){
    let player = new Player(playerOne_name,playerOne_weapon, playerOne_attackRating, playerOne_defenseRating, playerOne_healthTotal);

}

// Who goes first roll
function whoGoesFirst(){
    if (rollDice(2) == 1) {
        // player 1 goes first
    }
    else {
        // player 2 goes first
    }
}

// Attack Damage Calculation XXXXXXXX
function calculateAttackOutcome(offense,defense){
    attackOutcome = offense - defense;
    if(attackOutcome < 0){
        attackOutcome = 1;
        damageAppliedToHealth(attackOutcome);
        return attackOutcome;
    }
    else {
        damageAppliedToHealth(attackOutcome);
        return attackOutcome;
    }
}

// Attack Damage Application
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
function modifyStatistic(statisticToBeModified, amount){

}