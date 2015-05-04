/**
 * Source file name: collision.ts
 * Author: Luis Acevedo & Ian Knutson
 * Last Modified: Luis Acevedo
 * Date Last Modified: 2014 11 15
 * Program Description: Manager for the collision between all the objects of the game
 * Revision History:
 * 2014 11 15
 *      Modified collision for new objects
 *      Added boss collision for player and bullets
 * 2014 11 11
 *      Added collision for bullets
 * 2014 12 07
 *      Fixed collision with bullets and boss
 *      Fixed phantom collision with boss
 * 2014 12 09
 *      Fixed asteroid and frigate collision
 */ 

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private alien = [];
        private bullets = [];

        private player: objects.Player;
        private boss: objects.Boss;
        private powerup: objects.Powerup;
        private scoreboard: objects.Scoreboard;

        private levelObstacle: any;

        //Constructor for the collision class. Adding object that can collide
        constructor(player: objects.Player, powerup: objects.Powerup, aliens, scoreboard: objects.Scoreboard, boss: objects.Boss, levelObstacle?, bullets?) {
            this.player = player;
            this.powerup = powerup;
            this.boss = boss;
            this.scoreboard = scoreboard;

            this.alien = aliens;
            this.bullets = bullets;
            this.levelObstacle = levelObstacle;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between rectangles
        private rectangleCollision(): boolean {
            //variable definition
            var leftSide_obj1: number;
            var upperSide_obj1: number;
            var rightSide_obj1: number;
            var lowerSide_obj1: number;

            var leftSide_obj2: number;
            var upperSide_obj2: number;
            var rightSide_obj2: number;
            var lowerSide_obj2: number;

            var boxOffset: number = 20;

            var collisionFound: boolean = false;

            //Getting the data to compare
            leftSide_obj1 = this.player.x - (this.player.width /2) + boxOffset;
            rightSide_obj1 = leftSide_obj1 + this.player.width - boxOffset;

            upperSide_obj1 = this.player.y - (this.player.height / 2) + boxOffset;
            lowerSide_obj1 = upperSide_obj1 + this.player.height - boxOffset;

            leftSide_obj2 = this.levelObstacle.x - (this.levelObstacle.width / 2) + boxOffset;
            rightSide_obj2 = leftSide_obj2 + this.levelObstacle.width - boxOffset;

            upperSide_obj2 = this.levelObstacle.y - (this.levelObstacle.height / 2) + boxOffset;
            lowerSide_obj2 = upperSide_obj2 + this.levelObstacle.height - boxOffset;

            // Check horizontal collision
            if((leftSide_obj1 < leftSide_obj2 && rightSide_obj1 > leftSide_obj2)||(leftSide_obj1 < rightSide_obj2 && rightSide_obj1 > rightSide_obj2)||(leftSide_obj1 > leftSide_obj2 && rightSide_obj1 < rightSide_obj2)) {
                // Check vertical collision
                if((upperSide_obj1 < upperSide_obj2 && lowerSide_obj1 > upperSide_obj2)||(upperSide_obj1 < lowerSide_obj2 && lowerSide_obj1 > lowerSide_obj2)||(upperSide_obj1 > upperSide_obj2 && lowerSide_obj1 < lowerSide_obj2)) {
                    collisionFound = true;
                }
            }

            //Return result
            return collisionFound;
        }

        // check collision between plane and any cloud object
        private playerAndAlien(alien: objects.Alien) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;

            p2.x = alien.x;
            p2.y = alien.y;

            //Check if collided. Modify score, lives, enemy position, play sounds
            if ((this.distance(p1, p2) < ((this.player.height / 2) + (alien.height / 2))) && (player.playerColour != alien.alienColour) && !player.animationPlaying) {
                createjs.Sound.play("enemy_explosion");
                alien.destroy();

                //Call player collision
                this.playerCollided(p1.x, p1.y);

                //Restore alien
                alien.reset();
            }
        }

        //check collision between player and boss objects
        private playerAndBoss() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;

            p2.x = this.boss.x;
            p2.y = this.boss.y;

            //Check if collided. Modify score, boss health, player lives
            if ((this.distance(p1, p2)) < ((this.player.height / 2) + (this.boss.height / 2)) && !player.animationPlaying) {
                createjs.Sound.play("boss_explosion");
                this.boss.bossHealth -= 1;
                this.boss.moveFront();

                //Call player collision
                this.playerCollided(p1.x, p1.y);

                //If boss health is done, destroy boss
                if (this.boss.bossHealth <= 0) {
                    this.killBoss();
                }
            }
        }

        // check collision with asteroids and frigates
        private playerAndObstacle() {
            //Check if both objects touched
            if(this.rectangleCollision() && !this.player.animationPlaying) {
                this.playerCollided(this.player.x, this.player.y);
            }
        }

        // check collision between bullet and boss objects
        private bulletAndBoss(bullets: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullets.x;
            p1.y = bullets.y;
            p2.x = this.boss.x;
            p2.y = this.boss.y;

            //Check if collided. Modify score, boss health, check if boss is dead
            if (this.distance(p1, p2) < ((bullets.height / 2) + (this.boss.height / 2))) {
                createjs.Sound.play("boss_explosion");

                //Call explosion for enemy
                var explosion = new objects.Explosion(game);
                explosion.x = p1.x;
                explosion.y = p1.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                //Destroy bullet
                bullets.destroy();

                //Make boss suffer
                this.boss.bossHealth -= 1;

                //Kill boss if the health is done
                if (this.boss.bossHealth <= 0) {
                    this.killBoss();
                }
            }
        }

        // check collision between bullets and aliens
        private bulletAndAlien(alien: objects.Alien, bullets: objects.Bullet) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = bullets.x;
            p1.y = bullets.y;
            p2.x = alien.x;
            p2.y = alien.y;

            //Check if collided. Modify score, bullet position, alien position
            if ((this.distance(p1, p2) < ((bullets.height / 2) + (alien.height / 2))) && (alien.alienColour != bullets.bulletColour)) {
                createjs.Sound.play("enemy_explosion");

                //Make explosion
                var explosion = new objects.Explosion(game);
                explosion.x = p1.x;
                explosion.y = p1.y;
                explosion.on("animationend", function (e) { explosion.remove(); });

                //Destroy alien and bullet
                alien.destroy();
                bullets.destroy();

                this.scoreboard.score += constants.SCORE_FOR_ENEMY_KILL;
                alien.reset();
            }
        }

        // check collision between plane and island
        private playerAndPowerup() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.player.x;
            p1.y = this.player.y;

            p2.x = this.powerup.x;
            p2.y = this.powerup.y;

            //Check if collided. Modify score
            if (this.distance(p1, p2) < ((this.player.height / 2) + (this.powerup.height / 2))) {
                createjs.Sound.play("space_powerup");
                this.scoreboard.score += constants.SCORE_FOR_POWERUPS;

                //check the colour of the powerup, if different proceed with player colour change
                if (powerup.powerUpColour != player.playerColour) {
                    this.player.playerChange = true;
                }

                //move powerup
                this.powerup.reset();
            }
        }

        //Player control
        private playerCollided(x: number, y:number) {
            createjs.Sound.play("space_explosion");

            this.player.playerDestroyed();
            var explosion = new objects.Explosion(game);
            explosion.x = x;
            explosion.y = y;
            explosion.on("animationend", function (e) { explosion.remove(); });
            setTimeout(function (e) {
                this.player.playerRevived();
            }, 3500);

            this.scoreboard.lives -= 1;
        }

        //Checks and destroy the boss. If boss is killed on level 3, it adds to the stats
        private killBoss() {
            this.scoreboard.score += constants.SCORE_FOR_BOSS_KILL;
            this.boss.destroy();
            createjs.Sound.play("boss_explosion");

            if (currentState == constants.LEVEL3_STATE)
                timesDefeatedBossLevel3++;
        }

        // Utility Function to Check Collisions
        update() {
            for (var x = 0; x < constants.ALIEN_NUM; x++) {
                this.playerAndAlien(this.alien[x]);

                //Check interaction of the bullets with the aliens and boss mob
                if(bulletManager.firing)
                    for (var y = 0; y < this.bullets.length; y++) {
                        this.bulletAndAlien(this.alien[x], this.bullets[y]);
                        if (this.boss.bossActive)
                            this.bulletAndBoss(this.bullets[y]);
                    }
            }
            //Check if player picked up power up
            this.playerAndPowerup();

            //Check if player collided with obstacles
            if (currentState == constants.LEVEL2_STATE || currentState == constants.LEVEL3_STATE)
                this.playerAndObstacle();

            //Check if Boss is on the screen
            if(this.boss.bossActive)
                this.playerAndBoss();
        }
    }
} 