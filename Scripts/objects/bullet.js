var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
var objects;
(function (objects) {
    // Bullet Class
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        //constructor
        function Bullet(game, colour) {
            //call of the super sprite
            _super.call(this, "missile");
            this.bulletColour = false;

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
        Bullet.prototype.destroy = function () {
            this.y = 9999;
            game.removeChild(this);
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map
