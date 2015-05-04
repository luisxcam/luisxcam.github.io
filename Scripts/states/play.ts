/**
 * Source file name: play.ts
 * Author: Luis Acevedo
 * Last Modified: Luis Acevedo and Ian Knutson
 * Date Last Modified: 2014 12 09
 * Program Description: play functionallity for the game
 * Revision History:
 * 2014 12 09
 *      Added level label
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
module states {
    export function playState() {

        //background control
        background.update();
        
        //populate clouds
        highcloud.update();
        
        //player and powerup update
        player.update();
        powerup.update();

        //aliens update
        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

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
            stage.removeChild(game);
            player.destroy();
            highcloud.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //Check conditions for the next level
        if ((scoreboard.score > constants.SCORE_FOR_LEVEL2) && (!boss.bossActive)) {
            stage.removeChild(game);
            player.destroy();
            boss.destroy();
            highcloud.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        console.log("Level 1");
        // Declare new Game Container
        game = new createjs.Container();

        //Restart the win game condition
        timesDefeatedBossLevel3 = 0;

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level1");
        highcloud = new objects.HighCloud(stage, game);
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel: objects.Label;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2)+150, 10, "Level 1: Get to " + constants.SCORE_FOR_LEVEL2.toString());
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, asteroid ,bulletManager.bullets);

        //Add all to the game
        stage.addChild(game);
    }
}