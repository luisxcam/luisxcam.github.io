var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: asteroid.ts
* Author: Luis Acevedo & Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 07
* Program Description: Body of the creation for the asteroid object
* Revision History:
* 2014 11 27
* Created the file
* Defined the movement
*
* 2014 12 04
* Ian Knutson
* updated assets
*
* 2014 12 07
* Finalized
*
*/
var objects;
(function (objects) {
    // Asteroid Class
    var Asteroid = (function (_super) {
        __extends(Asteroid, _super);
        //Constructor
        function Asteroid(stage, game) {
            //Call for the super
            _super.call(this, "asteroid");
            this.isAsteroidAlive = false;

            //Define game conditions
            this.stage = stage;
            this.game = game;

            //Show the asteoid
            this.reset();
        }
        //Moves the asteroid object on the screen
        Asteroid.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || !this.isAsteroidAlive) {
                this.reset();
            }
        };

        //Repositions the alien when collision or movement have been checked - Changes colour at random
        Asteroid.prototype.reset = function () {
            //Random position on Y
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //Movement speed of the asteroid
            this.dx = Math.floor(Math.random() * 2 + 6);

            //Starting position on X
            this.x = this.width + this.stage.canvas.width;

            if (!this.isAsteroidAlive) {
                //Asteroid active
                this.isAsteroidAlive = true;

                //add to game
                game.addChild(this);
            }
        };

        //Removes the asteroid model from visible screen
        Asteroid.prototype.destroy = function () {
            game.removeChild(this);
            this.isAsteroidAlive = false;
        };
        return Asteroid;
    })(objects.GameObject);
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map
