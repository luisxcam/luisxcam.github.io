var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: boss.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Body of the creation for the boss object
* Revision History:
* 2014 11 15
*      Created boss object
*      Added colour modifications
*      Movement added
* 2014 12 07
*      Deleted Boss colour
*
*/
var objects;
(function (objects) {
    // Player Class
    var Boss = (function (_super) {
        __extends(Boss, _super);
        //Constructor
        function Boss(stage, game) {
            //Call to super of sprite
            _super.call(this, "big_boss");
            this.bossActive = false;
            this.bossHealth = constants.BOSS_HEALTH;
            this.dy = constants.BOSS_MOVEMENT_SPEED;
            this.dx = constants.BOSS_MOVEMENT_SPEED;

            //Addition of game canvas
            this.stage = stage;
            this.game = game;

            //Sound effects
            this.engineSound = createjs.Sound.play("boss_engine", 0, 0, 0, -1, 1, 0);
            this.engineSound.stop();
        }
        //Check of the player boss movement
        Boss.prototype.update = function () {
            if (this.x < 0)
                this.moveFront();

            if (this.x > this.stage.canvas.width)
                this.dx = -1 * constants.BOSS_MOVEMENT_SPEED;

            if (this.y >= this.stage.canvas.height)
                this.dy = -1 * constants.BOSS_MOVEMENT_SPEED;

            if (this.y <= 0)
                this.dy = constants.BOSS_MOVEMENT_SPEED;

            this.y += this.dy;
            this.x += this.dx;
        };

        //Lets the player respawn
        Boss.prototype.moveFront = function () {
            this.dx = constants.BOSS_MOVEMENT_SPEED;
        };

        //Starts the boss mob, random colour generation
        Boss.prototype.reset = function () {
            this.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.x = this.stage.canvas.width + this.width * 2;

            this.bossHealth = constants.BOSS_HEALTH;

            if (currentState == constants.LEVEL3_STATE) {
                this.bossHealth = constants.BOSS_HEALTH * 2;
                this.gotoAndPlay("boss");
            }

            this.bossActive = true;

            this.rotation = 180;

            this.engineSound.play(0, 0, 0, -1, 1, 0);

            game.addChild(this);
        };

        //Remove boss when dead or at start
        Boss.prototype.destroy = function () {
            this.bossHealth = constants.BOSS_HEALTH;
            this.bossActive = false;
            this.x = -3 * (this.stage.canvas.width + this.width);
            this.engineSound.stop();

            game.removeChild(this);
        };
        return Boss;
    })(objects.GameObject);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
