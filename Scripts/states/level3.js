/**
* Source file name: level3.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: play functionallity of level 3 for the game
* Revision History:
* 2014 12 09
*      Modified logic for WIN screen
* 2014 11 15
*      Background modification
* 2014 11 11
*      Bullet addition
* 2014 11 09
*      Added new assets
*      Added new object updates
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    function level3State() {
        //background control
        background.update();

        //player and powerup update
        player.update();
        powerup.update();

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

        //Frigate manager
        frigate.update();

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
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //If you kill boss a n amount of times, you win
        if (timesDefeatedBossLevel3 >= constants.BOSS_KILLS_TO_WIN) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.WIN_STATE;
            changeState(currentState);
        }
    }
    states.level3State = level3State;

    // play state Function
    function level3() {
        console.log("Level 3");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level3");
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);
        frigate = new objects.Frigate(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2) + 150, 10, "Level 3: Destroy " + constants.BOSS_KILLS_TO_WIN + " bosses");
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, frigate, bulletManager.bullets);

        stage.addChild(game);
    }
    states.level3 = level3;
})(states || (states = {}));
//# sourceMappingURL=level3.js.map
