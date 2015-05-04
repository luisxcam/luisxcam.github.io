/**
 * Source file name: powerups.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 15
 * Program Description: Body of the creation for the powerup object
 * Revision History:
 * 2014 11 15
 *      Black and white creation
 *      Modified movement
 *      Added assets
 * 2014 12 04
 *      No more colours. Faction modification
 */
module objects {
    // Powerup Class
    export class Powerup extends objects.GameObject {

        //variables
        stage: createjs.Stage;
        game: createjs.Container;
        powerUpColour: boolean = false;
        dx: number;

        //constructor
        constructor(stage: createjs.Stage, game: createjs.Container) {
            //call to super
            super("capsule_f1");

            //game control
            this.stage = stage;
            this.game = game;

            //movement to initial position
            this.reset();
            
            //add to canvas
            game.addChild(this);
        }

        //random generation of powerups
        update() {
            this.x -= this.dx;
            if (this.x < -1 * (this.width)) {
                this.reset();
            }
        }

        //random generation of colour and position on Y
        reset() {
            //calculation of speed of movement and positon on the Y coordinate
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.x = this.width + this.stage.canvas.width;
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //changes the colour of the powerup
            if (Math.floor((Math.random() * 100) + 1) > 50) {
                this.gotoAndPlay("capsule_f2");
                this.powerUpColour = true;
            } else {
                this.gotoAndPlay("capsule_f1");
                this.powerUpColour = false;
            }
        }

        //removes the powerup from screen
        destroy() {
            game.removeChild(this);
        }
    }

} 