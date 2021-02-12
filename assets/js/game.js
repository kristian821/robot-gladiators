

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" = Player robot's health is zero or less

var fight = function(enemy) {
    console.log(enemy);
while(enemy.health > 0 && playerInfo.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
   
    if (promptFight === "skip" || promptFight === "SKIP") {
        var skipConfirmation = window.confirm("Are you sure?")

        if (skipConfirmation) {
            // confirm player wants to skip
        
                window.alert(playerInfo.name + " has decided to skip the fight! Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerInfo.money", playerInfo.money);
                break;
            
        }
    }

       

            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);

            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.")
            }
            var damage = randomNumber(enemy.attack - 3, playerInfo.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
        
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }

            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;
            }
        
    }
};

var startGame = function() {
  playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if(playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You know have a score of " + playerInfo.money + ".");
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
                if (playerInfo.money >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");

                    playerInfo.refillHealth
                } else {
                    window.alert("You don't have enough moeny!");
                }

                break;
            case "UPGRADE":
            case "upgrade":
                if (playerInfo.money >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");

                    playerInfo.upgradeAttack()
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

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        this.health += 20;
        this.money -= 7;
     },
    upgradeAttack: function() {
        this.attack += 6;
        this.money -= 7;
      }
};

var enemyInfo = [
{
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
    name: "Amy Android",
    attack: randomNumber(10, 14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
}
];




startGame();