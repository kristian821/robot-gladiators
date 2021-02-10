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

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);

            if(playerHealth > 0 && i < enemyNames.length - 1) {
                shop();
            }
        } else {
            window.alert("You have lost you robot in battle! Game Over!")
            break;
        }
    }
    endGame();
};

var endGame = function() {
    window.alert("The Game has ended. Let's see how you did!");
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You know have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirmation = window.prompt("Would you like to play again?");
    if (playAgainConfirmation) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot-Gladiators! Come Back Soon!");
    }
};

var shop = function() {
    var storeConfirm = window.prompt("The fight is over, visit the shop before the next round?");

    if (storeConfirm) {
        console.log("entered the shop");
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
            );

        switch(shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");

                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough moeny!");
                }

                break;
            case "UPGRADE":
            case "upgrade":
                if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");

                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }

                break;

            case "LEAVE":
            case "leave":
                window.alert("Leaving the store.");

                break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                shop();
                break;
        }
    };
};

startGame();