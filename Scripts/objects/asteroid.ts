/**
* Source file name: asteroid.ts
* Author: Luis Acevedo & Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 07
* Program Description: Body of the creation for the asteroid object
* Revision History:
* 2014 11 27
* Created the file
* Defined the movement
* 
* 2014 12 04
* Ian Knutson
* updated assets
* 
* 2014 12 07
* Finalized
* 
*/
module objects {
    // Asteroid Class
    export class Asteroid extends objects.GameObject {
        //Variables
        stage: createjs.Stage;
        game: createjs.Container;
        dx: number;
        isAsteroidAlive: boolean = false;

        //Constructor
        constructor(stage: createjs.Stage, game: createjs.Container) {
            //Call for the super
            super("asteroid");

            //Define game conditions
            this.stage = stage;
            this.game = game;

            //Show the asteoid
            this.reset();
        }

        //Moves the asteroid object on the screen
        update() {
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || !this.isAsteroidAlive) {
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

            if (!this.isAsteroidAlive) {
                //Asteroid active
                this.isAsteroidAlive = true;

                //add to game
                game.addChild(this);
            }
        }

        //Removes the asteroid model from visible screen
        destroy() {
            game.removeChild(this);
            this.isAsteroidAlive = false;
        }
    }

} 