/**
 * Source file name: bulletManager.ts
 * Author: Luis Acevedo & Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 07
 * Program Description: Loading of all the assets in the game
 * Revision History:
 * 2014 12 04
 *      Created
 *      Tested
 * 2014 12 07
 *      Fixed boss instant kill bug
 */ 

module managers {
    export class BulletManager {
        //variables
        game: createjs.Container;
        player: objects.Player;
        stage: createjs.Stage;
        bullets = [];
        missilesPerFrame: number = 0;
        firing: boolean = false;
        constructor(Stage: createjs.Stage, Player: objects.Player, game: createjs.Container) {
            this.game = game;
            this.player = Player;
            this.stage = Stage;
        }

        //Fires if the command is called
        fire() {
            // create two bullets on either side of  Player
            var missile: objects.Bullet = new objects.Bullet(this.game, this.player.playerColour);

            //Adds the bullet to the game in the position of the player
            this.game.addChild(missile);
            missile.x = this.player.x + 10;
            missile.y = this.player.y;

            //Add to the bullet array
            this.bullets.push(missile);
        } // end fire

        //Control the movement of the bullets if there is one or more on the screen
        update() {
            //Variables
            var len: number = this.bullets.length;
            var bullet: objects.Bullet;

            //Check if it is firing
            this.firing = (len > 0 ? true : false);

            //go through all bullets and ...
            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];
                // move current bullet
                bullet.x += constants.BULLET_SPEED;
                // check to see if the bullet has left the stage
                if (bullet.x > this.stage.canvas.width) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((bulletWasShot) && (this.missilesPerFrame % 15 == 0)) {
                this.fire();
                this.missilesPerFrame = 0;
                bulletWasShot = false;
            }
            //increment bullet count to limit number of bullets being fired
            this.missilesPerFrame++;
        } // end update

        //Destroys bullet and deletes from array
        destroyBullet(bullet: objects.Bullet) {
            //varialbes
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.game.removeChild(bullet);
                    bullet.destroy();
                    this.bullets.splice(count, 1);
                    
                }//if
            }//for
        } // end destroyBullet
    }
}  