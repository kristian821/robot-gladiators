var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" = Player robot's health is zero or less

var fight = function(enemyName) {
while(enemyHealth > 0 && playerHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
   
    if (promptFight === "skip" || promptFight === "SKIP") {
        var skipConfirmation = window.confirm("Are you sure?")

        if (skipConfirmation) {
            // confirm player wants to skip
        
                window.alert(playerName + " has decided to skip the fight! Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            
        }
    }

       

            enemyHealth = enemyHealth - playerAttack;

            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }
        
            playerHealth = playerHealth - enemyAttack;
        
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            }
        
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost you robot in battle! Game Over!")
        break;
    }
}
