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
module states {
    //control for the instruction screen
    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    //Show all elements and update player movement
    export function instructionsState() {
        background.update();
        player.update();
    }

    //Instruction display
    export function instructions() {
        var instructionsHeaderLabel: objects.Label;
        var instructionsText: objects.Content;

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
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
}  