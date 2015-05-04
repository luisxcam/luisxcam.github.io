var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: alien.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 11 15
* Program Description: Body of the creation for the alien object
* Revision History:
* 2014 11 15
*      Black and white changes, added variables for color detection
* 2014 11 09
*      Modified orientation for the alien class
*      Added new graphics
*/
var objects;
(function (objects) {
    // Alien Class
    var Alien = (function (_super) {
        __extends(Alien, _super);
        //Constructor
        function Alien(stage, game) {
            //Call for the super
            _super.call(this, "faction1");
            this.alienColour = false;
            this.destroyed = false;

            //Define game conditions
            this.stage = stage;
            this.game = game;
            this.reset();
        }
        //Moves the alien object on the screen
        Alien.prototype.update = function () {
            this.y += this.dy;
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || this.destroyed) {
                this.reset();
            }
        };

        //Repositions the alien when collision or movement have been checked - Changes colour at random
        Alien.prototype.reset = function () {
            //Start engine sound
            createjs.Sound.play("enemy_engine");

            //Movement and placement
            this.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.x = this.width + this.stage.canvas.width;

            //Enemy random generation
            if (Math.floor((Math.random() * 100) + 1) > 50) {
                this.gotoAndPlay("faction2");
                this.alienColour = true;
            } else {
                this.gotoAndPlay("faction1");
                this.alienColour = false;
            }

            //Restored
            this.destroyed = false;

            //Add to canvas
            game.addChild(this);
        };

        //Removes the alien model from visible screen
        Alien.prototype.destroy = function () {
            this.destroyed = true;
            game.removeChild(this);
        };
        return Alien;
    })(objects.GameObject);
    objects.Alien = Alien;
})(objects || (objects = {}));
//# sourceMappingURL=alien.js.map
