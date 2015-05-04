/**
 * Source file name: content.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 11
 * Program Description: Body of the creation for the instructions content object
 * Revision History:
 * 2014 11 11
 *      Created
 *      Added functionallity
 *      Managed size for the content on the screen
 */ 
module objects {
    export class Content extends createjs.Text {
        //constructor
        constructor(x: number, y: number, contentText: string) {
            //Call of the super for the create js text class
            super(contentText, constants.CONTENT_FONT, constants.CONTENT_COLOUR);

            //Defined the position on the middle of the text
            this.regY = this.getBounds().height / 2;

            //positioning on screen
            this.x = x;
            this.y = y;

            //Line wrap
            this.lineWidth = stage.canvas.width - (this.x * 2);

            //inline separation
            this.lineHeight = 20;
        }
    }
}  