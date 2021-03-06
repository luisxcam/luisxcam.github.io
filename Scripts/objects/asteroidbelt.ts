﻿/**
* Source file name: asteroidbelt.ts
* Author: Luis Acevedo, Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 07
* Program Description: Body of the creation for the asteoid object
* Revision History:
* 2014 12 07
* Created the file
* Defined the movement
* 
*/
module objects {
    // game objects Class
    export class AsteroidBelt extends createjs.Sprite {
        //variables
        width: number;
        height: number;
        stage: createjs.Stage;
        game: createjs.Container;
        dx: number;
        isAsteroidBeltVisable: boolean = false;

        //constructor for the sprite class
        constructor(stage: createjs.Stage, game: createjs.Container) {
            //Call to super
            super(managers.Assets.asteroidbelt, "asteroidBelt");

            //Management of meassure of the object and definition of absolute positioning
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //Define game conditions
            this.stage = stage;
            this.game = game;

            this.reset();
        }



        //Moves the asteroid belt object on the screen
        update() {
            this.x -= this.dx;
            if (this.x < -1 * (this.width / 2) || !this.isAsteroidBeltVisable) {
                this.reset();
            }
        }

        //Repositions the asteroidbelt if it exits the screen
        reset() {
            //Random position on Y
            this.y = this.stage.canvas.height / 2;

            //Movement speed of the asteroidbelt
            this.dx = Math.floor(Math.random() * 2 + 2);

            //Starting position on X
            this.x = (this.width / 2) + this.stage.canvas.width;

            if (!this.isAsteroidBeltVisable) {
                //asteroidbelt active
                this.isAsteroidBeltVisable = true;
                //add to game
                game.addChild(this);
            }
        }

        //Removes the asteroidbelt model from visible screen
        destroy() {
            game.removeChild(this);
            this.isAsteroidBeltVisable = false;
        }
    }

} 