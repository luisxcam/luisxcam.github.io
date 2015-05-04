/**
* Source file name: instructionsState.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: instructionsState functionallity for the game
* Revision History:
* 2014 11 15
*      Background modification
*      Button modification for color testing
* 2014 11 11
*      Created
*      Added instructions body
*      Added instructions header
*      Tested
*/
var states;
(function (states) {
    //control for the instruction screen
    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    //Show all elements and update player movement
    function instructionsState() {
        background.update();
        player.update();
    }
    states.instructionsState = instructionsState;

    //Instruction display
    function instructions() {
        var instructionsHeaderLabel;
        var instructionsText;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        instructionsHeaderLabel = new objects.Label(stage.canvas.width / 2, stage.canvas.height / 10, "Instructions:");
        game.addChild(instructionsHeaderLabel);

        //Display the instructions text
        instructionsText = new objects.Content(stage.canvas.width / 8, (stage.canvas.height / 10) * 2, constants.INSTRUCTIONS);
        game.addChild(instructionsText);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 450, "start");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
//# sourceMappingURL=instructionsState.js.map
