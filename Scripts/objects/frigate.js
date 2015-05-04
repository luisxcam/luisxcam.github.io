var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: frigate.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo and Ian Knutson
* Date Last Modified: 2014 12 09
* Program Description: Body of the creation for the frigate object
* Revision History:
* 2014 12 07
*   Created
*   Modified from copy of asteroid
*/
var objects;
(function (objects) {
    // Asteroid Class
    var Frigate = (function (_super) {
        __extends(Frigate, _super);
        //Constructor
        function Frigate(stage, game) {
            //Call for the super
            _super.call(this, "frigate");
            this.isFrigateAlive = false;

            //Define game conditions
            this.stage = stage;
            this.game = game;

            //Turn the frigate around
            this.rotation = 180;

            //Show the asteoid
            this.reset();
        }
        //Moves the asteroid object on the screen
        Frigate.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width) || !this.isFrigateAlive) {
                this.reset();
            }
        };

        //Repositions the alien when collision or movement have been checked - Changes colour at random
        Frigate.prototype.reset = function () {
            //Random position on Y
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //Movement speed of the asteroid
            this.dx = Math.floor(Math.random() * 2 + 6);

            //Starting position on X
            this.x = this.width + this.stage.canvas.width;

            if (!this.isFrigateAlive) {
                //Asteroid active
                this.isFrigateAlive = true;

                //add to game
                game.addChild(this);
            }
        };

        //Removes the asteroid model from visible screen
        Frigate.prototype.destroy = function () {
            game.removeChild(this);
            this.isFrigateAlive = false;
        };
        return Frigate;
    })(objects.GameObject);
    objects.Frigate = Frigate;
})(objects || (objects = {}));
//# sourceMappingURL=frigate.js.map
