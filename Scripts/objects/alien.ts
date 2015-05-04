/**
 * Source file name: alien.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Ian Knutson
 * Date Last Modified: 2014 11 15
 * Program Description: Body of the creation for the alien object
 * Revision History:
 * 2014 11 15
 *      Black and white changes, added variables for color detection
 * 2014 11 09
 *      Modified orientation for the alien class
 *      Added new graphics
 */ 
module objects {
    // Alien Class
    export class Alien extends objects.GameObject {
        //Variables
        stage: createjs.Stage;
        game: createjs.Container;
        alienColour: boolean = false;
        dy: number;
        dx: number;
        destroyed: boolean = false;

        //Constructor
        constructor(stage: createjs.Stage, game: createjs.Container) {
            //Call for the super
            super("faction1");

            //Define game conditions
            this.stage = stage;
            this.game = game;
            this.reset();

        }

        //Moves the alien object on the screen
        update() {
            this.y += this.dy;
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || this.destroyed) {
                this.reset();
            }
        }

        //Repositions the alien when collision or movement have been checked - Changes colour at random
        reset() {
            //Start engine sound
            createjs.Sound.play("enemy_engine");

            //Movement and placement
            this.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.x = this.width + this.stage.canvas.width;

            //Enemy random generation
            if (Math.floor((Math.random() * 100) + 1) > 50) {
                this.gotoAndPlay("faction2");
                this.alienColour = true;
            } else {
                this.gotoAndPlay("faction1");
                this.alienColour = false;
            }

            //Restored
            this.destroyed = false;

            //Add to canvas
            game.addChild(this);

        }

        //Removes the alien model from visible screen
        destroy() {
            this.destroyed = true;
            game.removeChild(this);
        }
    }

} 