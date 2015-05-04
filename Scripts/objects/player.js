var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: player.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Body of the creation for the player object
* Revision History:
* 2014 11 15
*      Black and white changes, added variables for color detection
* 2014 10 30
*      Modified orientation
*      Added new assets
* 2014 12 04
*      Updated Sprite
*      Movement delay added
*/
var objects;
(function (objects) {
    // Player Class
    var Player = (function (_super) {
        __extends(Player, _super);
        //constructor
        function Player(stage, game) {
            //call to the super
            _super.call(this, "ship_f1_forward");
            this.playerColour = false;
            this.playerChange = false;
            this.animationPlaying = false;
            this.movementFrameRate = 0;
            this.colourString = "f1";
            this.movementString = "_forward";

            //game control
            this.stage = stage;
            this.game = game;

            //starting position of spaceship
            this.y = 240;
            this.x = 75;

            //addition to canvas
            game.addChild(this);

            // Play engine sound forever
            this.engineSound = createjs.Sound.play("space_engine", 0, 0, 0, -1, 1, 0);
        }
        //Calculation of position on screen. Check the colour and change it if necessary
        Player.prototype.update = function () {
            //Update movement
            this.movement();

            //color changer
            if (this.playerChange) {
                if (this.playerColour) {
                    this.playerColour = false;
                    this.colourString = "f1";
                } else {
                    this.playerColour = true;
                    this.colourString = "f2";
                }
                this.gotoAndPlay("ship_" + this.colourString + this.movementString);
                this.playerChange = false;
            }
        };

        //Starts the process of revive
        Player.prototype.playerDestroyed = function () {
            this.animationPlaying = true;
            game.removeChild(this);
            this.x = 10 + this.width;
            this.y = this.stage.canvas.height / 2;
        };

        //Brings back the player
        Player.prototype.playerRevived = function () {
            this.animationPlaying = false;
            game.addChild(this);
        };

        //Movement control
        Player.prototype.movement = function () {
            //If player died, no movement allowed
            if (!this.animationPlaying) {
                //Allow movement delayed
                if (this.movementFrameRate % 1 == 0) {
                    //Move in X
                    if (this.x < this.stage.mouseX * 0.93 || this.x > this.stage.mouseX * 1.03) {
                        if (this.x < this.stage.mouseX) {
                            this.x += constants.PLAYER_SPEED;
                        } else {
                            this.x -= constants.PLAYER_SPEED;
                        }
                    }

                    //Move in Y
                    if (this.y < this.stage.mouseY * 0.93 || this.y > this.stage.mouseY * 1.03) {
                        if (this.y < this.stage.mouseY) {
                            this.y += constants.PLAYER_SPEED;
                            this.movementString = "_right";
                        } else {
                            this.y -= constants.PLAYER_SPEED;
                            this.movementString = "_left";
                        }
                    } else {
                        this.movementString = "_forward";
                    }

                    //Movement display
                    this.movementFrameRate = 0;
                    this.gotoAndPlay("ship_" + this.colourString + this.movementString);
                }

                //Add up to frames
                this.movementFrameRate++;
            }
        };

        //Destroys player class, remove sprite
        Player.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this);
        };
        return Player;
    })(objects.GameObject);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
