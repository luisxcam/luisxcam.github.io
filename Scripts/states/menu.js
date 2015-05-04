/**
* Source file name: menu.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo and Ian Knutson
* Date Last Modified: 2014 12 04
* Program Description: menu functionallity for the game
* Revision History:
* 2014 12 04
*      Name updated, background updated
* 2014 11 15
*      Background modification
*      Button modification for colour changes
* 2014 11 11
*      Added new assets
*      Added instructions button
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        //background.update();
        player.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "FACTION WARS");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 4, 250, "start");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Instructions button
        instructionsButton = new objects.Button(stage.canvas.width / 4, 400, "instructions");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", states.instructionsButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
