/**
 * Source file name: button.ts
 * Author: Luis Acevedo and Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 10 30
 * Program Description: Body of the creation for the button object
 * Revision History:
 * 2014 11 15
 *      Colour modification added
 * 2014 10 30
 *      Downloaded
 */
module objects {
    export class Button extends createjs.Sprite {
        //variables
        private buttonId: string;
        
        //constructor
        constructor(x: number, y: number, buttonIDString: string) {
            
            //call of the super class for the sprite
            super(managers.Assets.atlas, buttonIDString);

            //addition the button to be used 
            this.buttonId = buttonIDString;

            //positioning
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;

            //add of listeners
            this.setButtonListeners();
        }

        setButtonListeners() {
            //cursor listener
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        //on hover changes to the white button
        onButtonOver() {
            this.alpha = 0.8;
        }

        //on hover out goes back the the black one
        onButtonOut() {
            this.alpha = 1;
        }
    }
} 