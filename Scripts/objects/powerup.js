var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: powerups.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Body of the creation for the powerup object
* Revision History:
* 2014 11 15
*      Black and white creation
*      Modified movement
*      Added assets
* 2014 12 04
*      No more colours. Faction modification
*/
var objects;
(function (objects) {
    // Powerup Class
    var Powerup = (function (_super) {
        __extends(Powerup, _super);
        //constructor
        function Powerup(stage, game) {
            //call to super
            _super.call(this, "capsule_f1");
            this.powerUpColour = false;

            //game control
            this.stage = stage;
            this.game = game;

            //movement to initial position
            this.reset();

            //add to canvas
            game.addChild(this);
        }
        //random generation of powerups
        Powerup.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width)) {
                this.reset();
            }
        };

        //random generation of colour and position on Y
        Powerup.prototype.reset = function () {
            //calculation of speed of movement and positon on the Y coordinate
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.x = this.width + this.stage.canvas.width;
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //changes the colour of the powerup
            if (Math.floor((Math.random() * 100) + 1) > 50) {
                this.gotoAndPlay("capsule_f2");
                this.powerUpColour = true;
            } else {
                this.gotoAndPlay("capsule_f1");
                this.powerUpColour = false;
            }
        };

        //removes the powerup from screen
        Powerup.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Powerup;
    })(objects.GameObject);
    objects.Powerup = Powerup;
})(objects || (objects = {}));
//# sourceMappingURL=powerup.js.map
