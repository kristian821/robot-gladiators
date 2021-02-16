

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" = Player robot's health is zero or less

var fight = function(enemy) {
    var isPlayerTurn = true;

    if (Math.random() > .5) {
        isPlayerTurn = false;
    }

    console.log(enemy);

while(enemy.health > 0 && playerInfo.health > 0) {

    if (isPlayerTurn) {
    // ask player if they'd like to fight or run

        if (fightOrSkip()) {
            break;
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
    } else {
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
        isPlayerTurn = !isPlayerTurn;
    }
};

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    if (promptFight === "skip") {
        var skipConfirmation = window.confirm("Are you sure?")

        if (skipConfirmation) {
            // confirm player wants to skip
    
            window.alert(playerInfo.name + " has decided to skip the fight! Goodbye!");
            // subtract money from playerInfo.money for skipping
            playerInfo.money = playerInfo.money - 10;
            console.log("playerInfo.money", playerInfo.money);
            return true;
        }
    }
    return false;
}

var startGame = function() {
  playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            debugger;

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

    var highScore = localStorage.getItem("highscore");
    if (highscore === null) {
        highScore = 0;
    }

    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert.name(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
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
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE', or 3 for 'LEAVE'."
            );

        shopOptionPrompt = parseInt(shopOptionPrompt);
        switch(shopOptionPrompt) {
            
            case 1:
                if (playerInfo.money >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");

                    playerInfo.refillHealth
                } else {
                    window.alert("You don't have enough moeny!");
                }

                break;
         
            case 2:
                if (playerInfo.money >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");

                    playerInfo.upgradeAttack()
                } else {
                    window.alert("You don't have enough money!");
                }

                break;

            
            case 3:
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

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
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