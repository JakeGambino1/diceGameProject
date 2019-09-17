"use strict"
/*
||||||||||||||| User Stories ||||||||||||||||||||||||||
As a player, I want the game to be fairly balanced.  X
As a player, I want to have 2 mulligans on some stat rolls. 
As a player, I want my stats to be based off dice rolls.  X
As a player, I want the damage to be properly calculated based off damage roll and stat values.  X
As a player, I want he correct player to win the game when the other player's health reaches zero.  X

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
            $("playerOne_weapon").value = "sword";
        }
        else if (weaponTypeRoll == 2){
            $("playerOne_weapon").value = "hammer";
        }
        else if (weaponTypeRoll == 3) {
            $("playerOne_weapon").value = "shield";
        }
        else {
            console.log("error");
        }
        $("playerOne_weapon").setAttribute("disabled", true);
        $("playerOne_weaponRoll").classList.add("hide");
        $("playerOne_weaponRoll-inputArea").classList.add("s12", "center-align");
    }
    else {
        if (weaponTypeRoll == 1){
            $("playerTwo_weapon").value = "sword";
        }
        else if (weaponTypeRoll == 2){
            $("playerTwo_weapon").value = "hammer";
        }
        else if (weaponTypeRoll == 3) {
            $("playerTwo_weapon").value = "shield";
        }
        else {
            console.log("error");
        }
        $("playerTwo_weapon").setAttribute("disabled", true);
        $("playerTwo_weaponRoll").classList.add("hide");
        $("playerTwo_weaponRoll-inputArea").classList.add("s12", "center-align");
    }
}

function attackRatingRoll(playerRolling){
    let attackRatingMax = 10;
    let attackRating = rollDice(attackRatingMax);

    if (playerRolling == 1){
        $("playerOne_attackRating").value=attackRating;
        $("playerOne_attackRatingRoll").classList.add("hide");
        $("playerOne_attackRating").setAttribute("disabled", true);
        $("playerOne_attackRatingRoll-inputArea").classList.add("s12", "center-align");
        
    }
    else {
        $("playerTwo_attackRating").value=attackRating;
        $("playerTwo_attackRatingRoll").classList.add("hide");
        $("playerTwo_attackRating").setAttribute("disabled", true);
        $("playerTwo_attackRatingRoll-inputArea").classList.add("s12", "center-align");
    }
}

function defenseRatingRoll(playerRolling){
    let defenseRatingMax = 12;
    let defenseRating = rollDice(defenseRatingMax);

    if (playerRolling == 1){
        $("playerOne_defenseRating").value=defenseRating;
        $("playerOne_defenseRatingRoll").classList.add("hide");
        $("playerOne_defenseRating").setAttribute("disabled", true);
        $("playerOne_defenseRatingRoll-inputArea").classList.add("s12", "center-align");
    }
    else {
        $("playerTwo_defenseRating").value=defenseRating;
        $("playerTwo_defenseRatingRoll").classList.add("hide");
        $("playerTwo_defenseRating").setAttribute("disabled", true);
        $("playerTwo_defenseRatingRoll-inputArea").classList.add("s12", "center-align");
    }
}

function healthTotalRoll(playerRolling){
    let baseHealth = 10;
    let healthBonusMax = 20;
    let totalHealth = rollDice(healthBonusMax) + baseHealth;

    if (playerRolling == 1){
        $("playerOne_healthTotal").value=totalHealth;
        $("playerOne_healthTotalRoll").classList.add("hide");
        $("playerOne_healthTotal").setAttribute("disabled", true);
        $("playerOne_healthTotalRoll-inputArea").classList.add("s12", "center-align");
    }
    else {
        $("playerTwo_healthTotal").value=totalHealth;
        $("playerTwo_healthTotalRoll").classList.add("hide");
        $("playerTwo_healthTotal").setAttribute("disabled", true);
        $("playerTwo_healthTotalRoll-inputArea").classList.add("s12", "center-align");
    }
}

function mulliganRoll(playerRolling){
    let weapon = 1;
    let attackRating = 2;
    let defenseRating = 3;
    let healthTotal = 4;
    let statToMulligan = rollDice(4);

    if(statToMulligan == weapon){
        weaponRoll(playerRolling);
        alert("Player " + playerRolling + " has rerolled their weapon.");
    }
    else if(statToMulligan == attackRating){
        attackRatingRoll(playerRolling);
        alert("Player " + playerRolling + " has rerolled their attack rating. FEAR THAT ATTACK RATING!");
    }
    else if(statToMulligan == defenseRating){
        defenseRatingRoll(playerRolling);
        alert("Player " + playerRolling + " has rerolled their defense rating. They are scared!");
    }
    else if(statToMulligan == healthTotal){
        healthTotalRoll(playerRolling);
        alert("Player " + playerRolling + " has attempted to gain more health!!");
    }
}

function confirmPlayer(whichPlayerConfirmed){
    alert("Once confirming, you will have an option to mulligan random stats to random values. Use it if you have a gambling problem... or really bad rolls across the board.")
    if (whichPlayerConfirmed == 1){
        playerOne = new Player(
            name = prompt("What name would you like to use for Player 1?"),$("playerOne_weapon").value,
            $("playerOne_attackRating").value,
            $("playerOne_defenseRating").value,
            $("playerOne_healthTotal").value
        )
        $("playerOne_confirm").classList.add("hide");
        $("playerOneName").innerHTML = name;
        $("playerOne_mulligan").classList.remove("hide");
        $("playerOne_currentHealth").value = document.getElementById("playerOne_healthTotal").value;
    }
    else if (whichPlayerConfirmed == 2){
        playerTwo = new Player(
            name = prompt("What name would you like to use for Player 2?"),
            $("playerTwo_weapon").value, 
            $("playerTwo_attackRating").value, 
            $("playerTwo_defenseRating").value, 
            $("playerTwo_healthTotal").value
            )    
            $("playerTwo_confirm").classList.add("hide"); 
            $("playerTwoName").innerHTML = name;
            $("playerTwo_mulligan").classList.remove("hide");
            $("playerTwo_currentHealth").value = document.getElementById("playerTwo_healthTotal").value;
    }
}

function quickSetup(){
    weaponRoll(1);
    weaponRoll(2);
    attackRatingRoll(1);
    attackRatingRoll(2);
    defenseRatingRoll(1);
    defenseRatingRoll(2);
    healthTotalRoll(1);
    healthTotalRoll(2);
    confirmPlayer(1);
    confirmPlayer(2);
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

    while (attackingPlayer.healthTotal > 0 && defendingPlayer.healthTotal > 0) {
        combatPhase(attackingPlayer, defendingPlayer);
        combatPhase(defendingPlayer, attackingPlayer);
    }
}

function combatPhase(attackingPlayer, defendingPlayer){
    let didStagger = staggerChance(attackingPlayer);
    let didMiss = missChance();
    let attackDamage = calculateAttackDefenseOutcome(attackingPlayer, defendingPlayer);
    let weaponTypeBonusDmg = weaponTypeBonusDamage(attackingPlayer, defendingPlayer);
    let totalDamageDealt = attackDamage + weaponTypeBonusDmg;

    if(didStagger == false){
        attackingPlayer.defenseRating = attackingPlayer.defenseRating - 1;
    }

    if(didMiss == false){
        damageAppliedToHealth(defendingPlayer, totalDamageDealt);
        console.log(defendingPlayer.name + " took " + totalDamageDealt + " damage!");
        console.log(defendingPlayer.name + " has " + defendingPlayer.healthTotal + " health remaining!");
    }
    else {
        console.log(attackingPlayer.name + " missed like a scrub! What are they doing?!");
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
        console.log("calculateAttackDefenseOutcome damage = " + damageDealt);
        return damageDealt;
    }
    else {
        damageDealt = damageDealt;
        console.log("calculateAttackDefenseOutcome damage = " + damageDealt);
        return damageDealt;
    }
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
        console.log(defendingPlayer.name + " braces for impact!");
        return false;
    }
}

function damageAppliedToHealth(defendingPlayer, damageDealt){
    console.log(defendingPlayer.name + " is going to take " + damageDealt + ".");
    defendingPlayer.healthTotal -= damageDealt;
}

function staggerChance(attackingPlayer){
    let firstRoll = rollDice(6);
    console.log(attackingPlayer.name + "'s first stagger roll is " + firstRoll + ".");
    let secondRoll = rollDice(6);
    if ((firstRoll > 3 && secondRoll > 3) || firstRoll <= 3 && secondRoll <= 3) {
        console.log(attackingPlayer.name + "'s second roll was " + secondRoll + ". " + attackingPlayer.name + " almost fell over wielding their weapon. Their muscles are atrophied after years of living a beta lifestyle.");
        return true;
    }
    else {
        console.log(attackingPlayer.name + "'s second roll was " + secondRoll + ". " + attackingPlayer.name + " has great control over their weapon and keeps their balance.")
        return false;
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
    $("playerOne_weapon").value = playerOne.weapon;
    $("playerTwo_weapon").value = playerTwo.weapon;

    $("playerOne_attackRating").value = playerOne.attackRating;
    $("playerTwo_attackRating").value = playerTwo.attackRating;

    $("playerOne_defenseRating").value = playerOne.defenseRating;
    $("playerTwo_defenseRating").value = playerTwo.defenseRating;

    $("playerOne_healthTotal").value = playerOne.healthTotal;
    $("playerTwo_healthTotal").value = playerTwo.healthTotal;

    $("playerOne_currentHealth").value = document.getElementById("playerOne_healthTotal").value;
    $("playerTwo_currentHealth").value = document.getElementById("playerTwo_healthTotal").value;
}

function $ (x) {
    return document.getElementById(x);
}

M.AutoInit();
