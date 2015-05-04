/**
 * Source file name: background.ts
 * Author: Luis Acevedo, Ian Knutson
 * Last Modified: Ian Knutson
 * Date Last Modified: 2014 12 04
 * Program Description: Background element image
 * Revision History:
 * 2014 11 15
 *      Copy former ocean class, did modifications for new background
 * 2014 12 04
 *      Modified all assets for the background, and movement speed
 */ 
module objects {
    // Background Class
    export class Background {
        //Instance variables
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;

        //constructor
        constructor(stage: createjs.Stage, game: createjs.Container, file: string) {
            //Relation to game canvas
            this.stage = stage;
            this.game = game;
            

            //Loads the image and information
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(file));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            //Puts the background in position
            this.reset();

            //Speed of background movement
            switch (currentState) {
                case constants.PLAY_STATE:
                    this.dx = 4.5;
                    break;
                case constants.LEVEL2_STATE:
                    this.dx = 0.25;
                    break;
                default:
                    this.dx = 8;
            }

            //Add to canvas
            game.addChild(this.image);
        }

        //Moves the background of the game
        update() {
            this.image.x -= this.dx;
            if (this.image.x < stage.canvas.width - this.width) {
                this.reset();
            }
        }

        //Moves background to start position
        reset() {
            this.image.x = 0;
        }

        //Removes background
        destroy() {
            game.removeChild(this.image);
        }
    }

}