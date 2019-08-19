
// Dice Roll Function
function rollDice(sides){

}

function weaponRoll(playerRolling){
    let weaponOne;
    let weaponTwo;
    let weaponThree;

    rollDice(3);
}

function attackRatingRoll(playerRolling){
    let attackRatingMax = 10;

    rollDice(attackRatingMax);
}

function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    
    rollDice(defenseRatingMax);

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
    }
    else {
        damageAppliedToHealth(attackOutcome);
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