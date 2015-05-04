/**
 * Source file name: bullet.ts
 * Author: Luis Acevedo
 * Last Modified: Luis Acevedo and Ian Knutson
 * Date Last Modified: 2014 11 15
 * Program Description: Body of the creation for the bullet object
 * Revision History:
 * 2014 11 15
 *      Black and white changes added, created variables for color detection
 * 2014 11 11
 *      Created bullet class
 *      Bullet movement updated
 */
module objects {
    // Bullet Class
    export class Bullet extends objects.GameObject {
        game: createjs.Container;
        bulletColour: boolean = false;

        //constructor
        constructor(game: createjs.Container, colour: boolean) {
            //call of the super sprite
            super("missile");

            //Set the ammo to be deadly for
            this.bulletColour = colour;

            //Game control
            this.game = game;

            //sound effects
            createjs.Sound.play("space_shot");

            //addition to canvas element
            game.addChild(this);
        }

        //Gets rid of the bullet
        public destroy(): void {
            this.y = 9999;
            game.removeChild(this);
        }
    }
}
