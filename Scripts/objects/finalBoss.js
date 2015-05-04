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
    var FinalBoss = (function (_super) {
        __extends(FinalBoss, _super);
        //Constructor
        function FinalBoss(stage, game) {
            //Call to super of sprite
            _super.call(this, "big_boss");
            this.bossActive = false;
            this.bossMovement = 5;
            this.bossHealth = constants.BOSS_HEALTH;

            //Addition of game canvas
            this.stage = stage;
            this.game = game;

            //Sound effects
            this.engineSound = createjs.Sound.play("boss_engine", 0, 0, 0, -1, 1, 0);
            this.engineSound.stop();
        }
        //Check of the player boss movement
        FinalBoss.prototype.update = function () {
            if (this.x > constants.BOSS_X_POSITION) {
                this.bossMovement = 5;
                this.x -= this.bossMovement;
            } else {
                if (this.y > this.stage.canvas.height || this.y < 0)
                    this.bossMovement *= -1;

                this.y += this.bossMovement;
            }
        };

        //Starts the boss mob, random colour generation
        FinalBoss.prototype.reset = function () {
            this.y = 320;
            this.x = this.stage.canvas.width + this.width * 2;

            this.bossHealth = constants.BOSS_HEALTH * 2;
            this.bossActive = true;

            this.rotation = 180;

            this.engineSound.play(0, 0, 0, -1, 1, 0);

            game.addChild(this);
        };

        //Remove boss when dead or at start
        FinalBoss.prototype.destroy = function () {
            this.bossHealth = constants.BOSS_HEALTH;
            this.bossActive = false;
            this.x = -3 * (this.stage.canvas.width + this.width);
            this.engineSound.stop();

            game.removeChild(this);
        };
        return FinalBoss;
    })(objects.GameObject);
    objects.FinalBoss = FinalBoss;
})(objects || (objects = {}));
//# sourceMappingURL=finalBoss.js.map
