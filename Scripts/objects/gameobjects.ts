/**
 * Source file name: gameobjects.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 15
 * Program Description: Mold for the AI and PLayer objects. Inheretance from the sprite class
 * Revision History:
 * 2014 11 15
 *      Created
 */ 
module objects {
    // game objects Class
    export class GameObject extends createjs.Sprite {
        //variables
        width: number;
        height: number;

        //constructor for the sprite class
        constructor(imageString: string) {
            //Call to super
            super(managers.Assets.atlas, imageString);

            //Management of meassure of the object and definition of absolute positioning
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
    }

} 