var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //constructor
        function Button(x, y, buttonIDString) {
            //call of the super class for the sprite
            _super.call(this, managers.Assets.atlas, buttonIDString);

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
        Button.prototype.setButtonListeners = function () {
            //cursor listener
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };

        //on hover changes to the white button
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };

        //on hover out goes back the the black one
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map
