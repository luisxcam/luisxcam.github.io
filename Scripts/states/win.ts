/**
 * Source file name: gameover.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 15
 * Program Description: Win state functionallity for the game
 * Revision History:
 * 2014 12 07
 *  Copie gameover
 * 2014 12 09
 *  Added win label
 */
module states {
    //Update the background
    export function winState() {
        background.update();
    }

    // Game Over Scene
    export function win() {
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;
        var winLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        winLabel = new objects.Label(stage.canvas.width / 2, 40, "YOU WIN");
        game.addChild(winLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "replay");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        //add to canvas
        stage.addChild(game);

    }
} 