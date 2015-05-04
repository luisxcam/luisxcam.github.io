/**
 * Source file name: scoreboard.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 10 30
 * Program Description: Scoreboard object
 * Revision History:
 * 2014 10 30
 *      Downloaded
 */
module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
        }

        //Update scoreboard
        update() {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelText;
            game.addChild(this.label);
        }

        //Delete scoreboard
        destroy() {
            game.removeChild(this.label);
        }
    }
} 