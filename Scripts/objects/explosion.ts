/**
 * Source file name: explosion.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: N/A
 * Date Last Modified: 2014 12 04
 * Program Description: Manages the explosion object
 * Revision History:
 2014 12 04
    Tom's Original
 */ 
// Explosion Class
module objects {
    export class Explosion extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("explosion");
            this.game = game;
            this.game.addChild(this);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
} 