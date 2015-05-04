/**
 * Source file name: gameover.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Ian Knutson
 * Date Last Modified: 2014 12 04
 * Program Description: Gameover functionallity for the game
 * Revision History:
 * 2014 12 04
 *      Changed the background
 * 2014 11 15
 *      Background modification
 * 2014 11 11
 *      Added new assets
 * 2014 10 30
 *      Downloaded
 */
module states {
    //Update the background
    export function gameOverState() {
        background.update();
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

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