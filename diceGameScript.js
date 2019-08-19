
// Dice Roll Function
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

function attackRatingRoll(playerRolling){
    let attackRatingMax = 10;
    let attackRating = rollDice(attackRatingMax);

    return attackRating;
}

function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    let defenseRating = rollDice(defenseRatingMax);
    
    return defenseRating;
}

function healthTotalRoll(playerRolling){
    let baseHealth = 10;
    let healthBonusMax = 20;
    let totalHealth = rollDice(healthBonusMax) + baseHealth;

    return totalHealth;
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

// Attack Damage Calculation
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

// Confirm Character Statistics
function characterCreation(){

}

// Modify Statistic
function modifyStatistic(statisticToBeModified, amount){

}