/**
 * Source file name: label.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 10 30
 * Program Description: Label class
 * Revision History:
 * 2014 10 30
 *      Downloaded
 */ 
module objects {
    export class Label extends createjs.Text {
        //construtor
        constructor(x: number, y: number, labelText: string) {
            //call to super of createjs text
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);

            //definition of absolute positioning
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
} 