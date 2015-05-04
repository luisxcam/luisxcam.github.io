/**
* Source file name: level2.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: play functionallity of level 2 for the game
* Revision History:
* 2014 12 07
*      Created (copy of PLAY)
*      Added conditions to transition to level 3
* 2014 12 09
*      Cleaned up and ready to go
*/
var states;
(function (states) {
    function level2State() {
        //background control
        background.update();

        //asteroidbelt update
        asteroidbelt.update();

        //player and powerup update
        player.update();
        powerup.update();

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

        //Asteroid
        asteroid.update();

        //bullets update
        bulletManager.update();

        //boss control
        if (scoreboard.score > currentScoreForBoss && !boss.bossActive) {
            console.log("New Boss");
            boss.reset();
            scoreboard.lives++;
            currentScoreForBoss += constants.SCORE_FOR_NEW_BOSS;
        }

        //boss update
        if (boss.bossActive)
            boss.update();

        //managers control
        collision.update();
        scoreboard.update();

        //game over state transition
        if (scoreboard.lives <= 0) {
            boss.destroy();
            player.destroy();
            stage.removeChild(game);
            game.removeAllChildren();

            //game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //If the score > 15000 and Boss is dead. Next level
        if ((scoreboard.score > constants.SCORE_FOR_LEVEL3) && (!boss.bossActive)) {
            stage.removeChild(game);
            player.destroy();
            asteroidbelt.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL3_STATE;
            changeState(currentState);
        }
    }
    states.level2State = level2State;

    // play state Function
    function level2() {
        console.log("Level 2");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level2");
        asteroidbelt = new objects.AsteroidBelt(stage, game);
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);
        asteroid = new objects.Asteroid(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2) + 150, 10, "Level 2: Get to " + constants.SCORE_FOR_LEVEL3.toString());
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, asteroid, bulletManager.bullets);

        stage.addChild(game);
    }
    states.level2 = level2;
})(states || (states = {}));
//# sourceMappingURL=level2.js.map
