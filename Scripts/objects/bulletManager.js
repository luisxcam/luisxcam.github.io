/// <reference path="../managers/asset.ts" />
var managers;
(function (managers) {
    var BulletManager = (function () {
        function BulletManager(Stage, Player, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
            this.player = Player;
            this.stage = Stage;
        }
        BulletManager.prototype.fire = function () {
            // create two bullets on either side of  Player
            var missile = new objects.Bullet(this.game, this.player.playerColour);

            this.game.addChild(missile);
            missile.x = this.player.x - 10;
            missile.y = 400;
            this.bullets.push(missile);
        };

        BulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];

                // move current bullet
                bullet.x += 25;

                // check to see if the bullet has left the stage
                if (bullet.x > this.stage.canvas.width) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((bulletWasShot) && (this.bulletCount % 10 == 0)) {
                this.fire();
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        BulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bulletManager.js.map
