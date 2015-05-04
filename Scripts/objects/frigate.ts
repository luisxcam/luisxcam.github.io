/**
* Source file name: frigate.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo and Ian Knutson
* Date Last Modified: 2014 12 09
* Program Description: Body of the creation for the frigate object
* Revision History:
* 2014 12 07
*   Created
*   Modified from copy of asteroid
*/
module objects {
    // Asteroid Class
    export class Frigate extends objects.GameObject {
        //Variables
        stage: createjs.Stage;
        game: createjs.Container;
        dx: number;
        isFrigateAlive: boolean = false;

        //Constructor
        constructor(stage: createjs.Stage, game: createjs.Container) {
            //Call for the super
            super("frigate");

            //Define game conditions
            this.stage = stage;
            this.game = game;

            //Turn the frigate around
            this.rotation = 180;

            //Show the asteoid
            this.reset();
        }

        //Moves the asteroid object on the screen
        update() {
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || !this.isFrigateAlive) {
                this.reset();
            }
        }

        //Repositions the alien when collision or movement have been checked - Changes colour at random
        reset() {
            //Random position on Y
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //Movement speed of the asteroid
            this.dx = Math.floor(Math.random() * 2 + 6);

            //Starting position on X
            this.x = this.width + this.stage.canvas.width;

            if (!this.isFrigateAlive) {
                //Asteroid active
                this.isFrigateAlive = true;

                //add to game
                game.addChild(this);
            }
        }

        //Removes the asteroid model from visible screen
        destroy() {
            game.removeChild(this);
            this.isFrigateAlive = false;
        }
    }

} 