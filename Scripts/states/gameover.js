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
var states;
(function (states) {
    //Update the background
    function gameOverState() {
        background.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;

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
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
