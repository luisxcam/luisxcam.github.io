/**
* Source file name: constants.ts
* Author: Luis Acevedo & Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: Game constants
* Revision History:
* 2014 11 15
*      Added boss properties
* 2014 11 11
*      Added amount of aliens
*      Added instructions text
*      Added bullet speed and bullet amount
* 2014 10 30
*      Downloaded
* 2014 12 03
*      Constants updated
* 2014 12 07
*      Deleted bullet constants, updated levels
*      Added control for the level transition
* 2014 12 09
*      Added END game conditions
*/
var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.INSTRUCTIONS_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.WIN_STATE = 3;
    constants.PLAY_STATE = 4;
    constants.LEVEL2_STATE = 5;
    constants.LEVEL3_STATE = 6;

    // Game Constants
    constants.ALIEN_NUM = 6;
    constants.PLAYER_SPEED = 6;
    constants.BOSS_HEALTH = 6;
    constants.BOSS_X_POSITION_TO_NEW_POSITION = 70;
    constants.BOSS_MOVEMENT_SPEED = 6;
    constants.SCORE_FOR_NEW_BOSS = 3000;
    constants.SCORE_FOR_LEVEL2 = 5000;
    constants.SCORE_FOR_LEVEL3 = 10000;
    constants.BOSS_KILLS_TO_WIN = 5;
    constants.SCORE_FOR_POWERUPS = 100;
    constants.SCORE_FOR_ENEMY_KILL = 250;
    constants.SCORE_FOR_BOSS_KILL = 500;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFFFF";
    constants.CONTENT_FONT = "18px Consolas";
    constants.CONTENT_COLOUR = "#FFFFFF";
    constants.PLAYER_LIVES = 3;
    constants.BULLET_SPEED = 15;

    // Instructions of the game
    constants.INSTRUCTIONS = "Welcome Soldier. You are controlling mankind's most powerful weapon, your mission is to end this war. The UNSCDF faction and the RED Eagles have been fighting for decades, with your upgraded stealth ship your mission is to destroy the ships in charge of communications with both factions. If you fail, all of humankind will forever be doomed. Fight along side whatever faction furthers your mission. Good Luck";
})(constants || (constants = {}));
/**
* Source file name: asset.ts
* Author: Luis Acevedo & Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 04
* Program Description: Loading of all the assets in the game
* Revision History:
* 2014 11 09
*      Added all new atlas for new game
* 2014 12 04
*      Added new assets, animations, screens
*/
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "start_screen", src: "assets/images/startScreen.png" },
        { id: "level1", src: "assets/images/Level1.png" },
        { id: "level2", src: "assets/images/Level2.png" },
        { id: "level3", src: "assets/images/Level3.png" },
        { id: "highcloud1", src: "assets/images/HighCloud1.png" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "boss_engine", src: "assets/sounds/boss_engine.wav" },
        { id: "boss_explosion", src: "assets/sounds/boss_explosion.wav" },
        { id: "enemy_engine", src: "assets/sounds/enemy_engine.wav" },
        { id: "enemy_explosion", src: "assets/sounds/enemy_explosion.wav" },
        { id: "enemy_shot", src: "assets/sounds/enemy_shot.wav" },
        { id: "space_engine", src: "assets/sounds/space_engine.wav" },
        { id: "space_explosion", src: "assets/sounds/space_explosion.wav" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "space_powerup", src: "assets/sounds/space_powerup.wav" },
        { id: "background", src: "assets/sounds/background.mp3" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/spriteSheet.png"],
        "frames": [
            [2218, 2, 160, 160],
            [2218, 164, 160, 160],
            [2180, 1532, 160, 160],
            [1414, 1834, 160, 160],
            [2203, 593, 160, 160],
            [2203, 755, 160, 160],
            [2180, 1694, 160, 160],
            [486, 1106, 300, 300],
            [788, 1106, 300, 300],
            [1204, 351, 300, 300],
            [1506, 351, 300, 300],
            [1808, 351, 300, 300],
            [1175, 653, 300, 300],
            [2, 1450, 400, 300],
            [1175, 955, 320, 151],
            [1497, 895, 320, 151],
            [1819, 895, 320, 151],
            [1090, 1350, 38, 17],
            [1574, 1290, 38, 17],
            [2140, 1774, 38, 17],
            [1090, 1369, 38, 17],
            [1130, 1592, 30, 30],
            [1614, 1532, 30, 30],
            [2, 1752, 240, 240],
            [1477, 653, 240, 240],
            [1719, 653, 240, 240],
            [244, 1752, 240, 240],
            [1090, 1108, 240, 240],
            [1332, 1108, 240, 240],
            [1574, 1048, 240, 240],
            [1961, 653, 240, 240],
            [1816, 1048, 240, 240],
            [2110, 351, 240, 240],
            [2058, 1048, 240, 240],
            [404, 1450, 240, 240],
            [646, 1408, 240, 240],
            [888, 1408, 240, 240],
            [1130, 1350, 240, 240],
            [1372, 1350, 240, 240],
            [1614, 1290, 240, 240],
            [1856, 1290, 240, 240],
            [2098, 1290, 240, 240],
            [486, 1692, 240, 240],
            [728, 1650, 240, 240],
            [970, 1650, 240, 240],
            [1212, 1592, 240, 240],
            [1454, 1592, 240, 240],
            [1696, 1532, 240, 240],
            [1938, 1532, 240, 240],
            [1696, 1774, 240, 240],
            [726, 1978, 65, 65],
            [793, 1978, 65, 65],
            [860, 1978, 65, 65],
            [927, 1978, 65, 65],
            [994, 1978, 65, 65],
            [1061, 1978, 65, 65],
            [1128, 1978, 65, 65],
            [2243, 917, 65, 65],
            [2310, 917, 65, 65],
            [1938, 1976, 65, 65],
            [1204, 2, 1012, 347],
            [2218, 326, 156, 15],
            [486, 1408, 156, 15],
            [2, 604, 1171, 500],
            [2, 1106, 482, 342],
            [1576, 1834, 118, 84],
            [1576, 1920, 118, 84],
            [486, 1934, 118, 84],
            [606, 1934, 118, 84],
            [2140, 1856, 118, 84],
            [2260, 1856, 118, 84],
            [728, 1892, 118, 84],
            [848, 1892, 118, 84],
            [968, 1892, 118, 84],
            [1088, 1892, 118, 84],
            [2140, 1942, 118, 84],
            [2260, 1942, 118, 84],
            [1574, 1309, 38, 17],
            [2140, 1793, 38, 17],
            [1090, 1388, 38, 17],
            [1574, 1328, 38, 17],
            [2141, 917, 100, 100],
            [1497, 1048, 35, 33],
            [404, 1692, 35, 33],
            [646, 1650, 35, 33],
            [1938, 1774, 200, 200],
            [1212, 1834, 200, 200],
            [2, 2, 1200, 600]
        ],
        "animations": {
            "asteroid": {
                frames: [0, 1, 2, 3, 4],
                speed: 0.1
            },
            "asteroid_explosion": {
                frames: [5, 6, 7, 8, 9, 10, 11, 12],
                speed: 0.1
            },
            "big_boss": [13],
            "boss": {
                frames: [14, 15, 16],
                speed: 0.1
            },
            "missile": {
                frames: [17, 18, 19, 20],
                speed: 1
            },
            "capsule_f1": [21],
            "capsule_f2": [22],
            "explosion": {
                frames: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                speed: 0.4
            },
            "faction1": {
                frames: [50, 51, 52, 53, 54],
                speed: 0.1
            },
            "faction2": {
                frames: [55, 56, 57, 58, 59],
                speed: 0.1
            },
            "frigate": [60],
            "laser": {
                frames: [61, 62],
                speed: 0.2
            },
            "low_cloud1": [63],
            "low_cloud2": [64],
            "ship_f1_forward": {
                frames: [65, 66],
                speed: 0.2
            },
            "ship_f1_left": {
                frames: [67, 68],
                speed: 0.2
            },
            "ship_f1_right": {
                frames: [69, 70],
                speed: 0.2
            },
            "ship_f2_forward": {
                frames: [71, 72],
                speed: 0.2
            },
            "ship_f2_left": {
                frames: [73, 74],
                speed: 0.2
            },
            "ship_f2_right": {
                frames: [75, 76],
                speed: 0.2
            },
            "boss_missile": {
                frames: [77, 78, 79, 80],
                speed: 0.2
            },
            "instructions": [81],
            "powerup": {
                frames: [82, 83, 84],
                speed: 0.2
            },
            "replay": [85],
            "start": [86],
            "start_screen_sprite": [87]
        }
    };

    // SpriteSheet Data Object
    var highCloudData = {
        "images": ["assets/images/HighCloud1.png"],
        "frames": [[5, 5, 3090, 1690]],
        "animations": {
            "highcloud1": [0]
        }
    };

    // SpriteSheet Data Object
    var asteroidBeltData = {
        "images": ["assets/images/LowAsteroidLayer.png"],
        "frames": [[5, 5, 4790, 590]],
        "animations": {
            "asteroidBelt": [0]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        //Loader for all elements defined
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.cloud = new createjs.SpriteSheet(highCloudData);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.asteroidbelt = new createjs.SpriteSheet(asteroidBeltData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Source file name: gameobjects.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Mold for the AI and PLayer objects. Inheretance from the sprite class
* Revision History:
* 2014 11 15
*      Created
*/
var objects;
(function (objects) {
    // game objects Class
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //constructor for the sprite class
        function GameObject(imageString) {
            //Call to super
            _super.call(this, managers.Assets.atlas, imageString);

            //Management of meassure of the object and definition of absolute positioning
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
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
/**
* Source file name: powerups.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Body of the creation for the powerup object
* Revision History:
* 2014 11 15
*      Black and white creation
*      Modified movement
*      Added assets
* 2014 12 04
*      No more colours. Faction modification
*/
var objects;
(function (objects) {
    // Powerup Class
    var Powerup = (function (_super) {
        __extends(Powerup, _super);
        //constructor
        function Powerup(stage, game) {
            //call to super
            _super.call(this, "capsule_f1");
            this.powerUpColour = false;

            //game control
            this.stage = stage;
            this.game = game;

            //movement to initial position
            this.reset();

            //add to canvas
            game.addChild(this);
        }
        //random generation of powerups
        Powerup.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width)) {
                this.reset();
            }
        };

        //random generation of colour and position on Y
        Powerup.prototype.reset = function () {
            //calculation of speed of movement and positon on the Y coordinate
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.x = this.width + this.stage.canvas.width;
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //changes the colour of the powerup
            if (Math.floor((Math.random() * 100) + 1) > 50) {
                this.gotoAndPlay("capsule_f2");
                this.powerUpColour = true;
            } else {
                this.gotoAndPlay("capsule_f1");
                this.powerUpColour = false;
            }
        };

        //removes the powerup from screen
        Powerup.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Powerup;
    })(objects.GameObject);
    objects.Powerup = Powerup;
})(objects || (objects = {}));
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
var managers;
(function (managers) {
    var BulletManager = (function () {
        function BulletManager(Stage, Player, game) {
            this.bullets = [];
            this.missilesPerFrame = 0;
            this.firing = false;
            this.game = game;
            this.player = Player;
            this.stage = Stage;
        }
        //Fires if the command is called
        BulletManager.prototype.fire = function () {
            // create two bullets on either side of  Player
            var missile = new objects.Bullet(this.game, this.player.playerColour);

            //Adds the bullet to the game in the position of the player
            this.game.addChild(missile);
            missile.x = this.player.x + 10;
            missile.y = this.player.y;

            //Add to the bullet array
            this.bullets.push(missile);
        };

        //Control the movement of the bullets if there is one or more on the screen
        BulletManager.prototype.update = function () {
            //Variables
            var len = this.bullets.length;
            var bullet;

            //Check if it is firing
            this.firing = (len > 0 ? true : false);

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
        };

        //Destroys bullet and deletes from array
        BulletManager.prototype.destroyBullet = function (bullet) {
            //varialbes
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.game.removeChild(bullet);
                    bullet.destroy();
                    this.bullets.splice(count, 1);
                }
            }
        };
        return BulletManager;
    })();
    managers.BulletManager = BulletManager;
})(managers || (managers = {}));
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
/**
* Source file name: background.ts
* Author: Luis Acevedo, Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 04
* Program Description: Background element image
* Revision History:
* 2014 11 15
*      Copy former ocean class, did modifications for new background
* 2014 12 04
*      Modified all assets for the background, and movement speed
*/
var objects;
(function (objects) {
    // Background Class
    var Background = (function () {
        //constructor
        function Background(stage, game, file) {
            //Relation to game canvas
            this.stage = stage;
            this.game = game;

            //Loads the image and information
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult(file));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;

            //Puts the background in position
            this.reset();

            switch (currentState) {
                case constants.PLAY_STATE:
                    this.dx = 4.5;
                    break;
                case constants.LEVEL2_STATE:
                    this.dx = 0.25;
                    break;
                default:
                    this.dx = 8;
            }

            //Add to canvas
            game.addChild(this.image);
        }
        //Moves the background of the game
        Background.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < stage.canvas.width - this.width) {
                this.reset();
            }
        };

        //Moves background to start position
        Background.prototype.reset = function () {
            this.image.x = 0;
        };

        //Removes background
        Background.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Background;
    })();
    objects.Background = Background;
})(objects || (objects = {}));
/**
* Source file name: scoreboard.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 10 30
* Program Description: Scoreboard object
* Revision History:
* 2014 10 30
*      Downloaded
*/
var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.stage = stage;
            this.game = game;
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
        }
        //Update scoreboard
        Scoreboard.prototype.update = function () {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString();
            this.label.text = this.labelText;
            game.addChild(this.label);
        };

        //Delete scoreboard
        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
/**
* Source file name: label.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 10 30
* Program Description: Label class
* Revision History:
* 2014 10 30
*      Downloaded
*/
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        //construtor
        function Label(x, y, labelText) {
            //call to super of createjs text
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);

            //definition of absolute positioning
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
/**
* Source file name: content.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 11
* Program Description: Body of the creation for the instructions content object
* Revision History:
* 2014 11 11
*      Created
*      Added functionallity
*      Managed size for the content on the screen
*/
var objects;
(function (objects) {
    var Content = (function (_super) {
        __extends(Content, _super);
        //constructor
        function Content(x, y, contentText) {
            //Call of the super for the create js text class
            _super.call(this, contentText, constants.CONTENT_FONT, constants.CONTENT_COLOUR);

            //Defined the position on the middle of the text
            this.regY = this.getBounds().height / 2;

            //positioning on screen
            this.x = x;
            this.y = y;

            //Line wrap
            this.lineWidth = stage.canvas.width - (this.x * 2);

            //inline separation
            this.lineHeight = 20;
        }
        return Content;
    })(createjs.Text);
    objects.Content = Content;
})(objects || (objects = {}));
/**
* Source file name: explosion.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: N/A
* Date Last Modified: 2014 12 04
* Program Description: Manages the explosion object
* Revision History:
2014 12 04
Tom's Original
*/
// Explosion Class
var objects;
(function (objects) {
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion(game) {
            _super.call(this, "explosion");
            this.game = game;
            this.game.addChild(this);
        }
        Explosion.prototype.remove = function () {
            this.game.removeChild(this);
        };
        return Explosion;
    })(objects.GameObject);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
/**
* Source file name: button.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 10 30
* Program Description: Body of the creation for the button object
* Revision History:
* 2014 11 15
*      Colour modification added
* 2014 10 30
*      Downloaded
*/
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //constructor
        function Button(x, y, buttonIDString) {
            //call of the super class for the sprite
            _super.call(this, managers.Assets.atlas, buttonIDString);

            //addition the button to be used
            this.buttonId = buttonIDString;

            //positioning
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;

            //add of listeners
            this.setButtonListeners();
        }
        Button.prototype.setButtonListeners = function () {
            //cursor listener
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };

        //on hover changes to the white button
        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };

        //on hover out goes back the the black one
        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
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
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        //Constructor for the collision class. Adding object that can collide
        function Collision(player, powerup, aliens, scoreboard, boss, levelObstacle, bullets) {
            // class variables
            this.alien = [];
            this.bullets = [];
            this.player = player;
            this.powerup = powerup;
            this.boss = boss;
            this.scoreboard = scoreboard;

            this.alien = aliens;
            this.bullets = bullets;
            this.levelObstacle = levelObstacle;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between rectangles
        Collision.prototype.rectangleCollision = function () {
            //variable definition
            var leftSide_obj1;
            var upperSide_obj1;
            var rightSide_obj1;
            var lowerSide_obj1;

            var leftSide_obj2;
            var upperSide_obj2;
            var rightSide_obj2;
            var lowerSide_obj2;

            var boxOffset = 20;

            var collisionFound = false;

            //Getting the data to compare
            leftSide_obj1 = this.player.x - (this.player.width / 2) + boxOffset;
            rightSide_obj1 = leftSide_obj1 + this.player.width - boxOffset;

            upperSide_obj1 = this.player.y - (this.player.height / 2) + boxOffset;
            lowerSide_obj1 = upperSide_obj1 + this.player.height - boxOffset;

            leftSide_obj2 = this.levelObstacle.x - (this.levelObstacle.width / 2) + boxOffset;
            rightSide_obj2 = leftSide_obj2 + this.levelObstacle.width - boxOffset;

            upperSide_obj2 = this.levelObstacle.y - (this.levelObstacle.height / 2) + boxOffset;
            lowerSide_obj2 = upperSide_obj2 + this.levelObstacle.height - boxOffset;

            // Check horizontal collision
            if ((leftSide_obj1 < leftSide_obj2 && rightSide_obj1 > leftSide_obj2) || (leftSide_obj1 < rightSide_obj2 && rightSide_obj1 > rightSide_obj2) || (leftSide_obj1 > leftSide_obj2 && rightSide_obj1 < rightSide_obj2)) {
                // Check vertical collision
                if ((upperSide_obj1 < upperSide_obj2 && lowerSide_obj1 > upperSide_obj2) || (upperSide_obj1 < lowerSide_obj2 && lowerSide_obj1 > lowerSide_obj2) || (upperSide_obj1 > upperSide_obj2 && lowerSide_obj1 < lowerSide_obj2)) {
                    collisionFound = true;
                }
            }

            //Return result
            return collisionFound;
        };

        // check collision between plane and any cloud object
        Collision.prototype.playerAndAlien = function (alien) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        //check collision between player and boss objects
        Collision.prototype.playerAndBoss = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        // check collision with asteroids and frigates
        Collision.prototype.playerAndObstacle = function () {
            //Check if both objects touched
            if (this.rectangleCollision() && !this.player.animationPlaying) {
                this.playerCollided(this.player.x, this.player.y);
            }
        };

        // check collision between bullet and boss objects
        Collision.prototype.bulletAndBoss = function (bullets) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });

                //Destroy bullet
                bullets.destroy();

                //Make boss suffer
                this.boss.bossHealth -= 1;

                //Kill boss if the health is done
                if (this.boss.bossHealth <= 0) {
                    this.killBoss();
                }
            }
        };

        // check collision between bullets and aliens
        Collision.prototype.bulletAndAlien = function (alien, bullets) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });

                //Destroy alien and bullet
                alien.destroy();
                bullets.destroy();

                this.scoreboard.score += constants.SCORE_FOR_ENEMY_KILL;
                alien.reset();
            }
        };

        // check collision between plane and island
        Collision.prototype.playerAndPowerup = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
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
        };

        //Player control
        Collision.prototype.playerCollided = function (x, y) {
            createjs.Sound.play("space_explosion");

            this.player.playerDestroyed();
            var explosion = new objects.Explosion(game);
            explosion.x = x;
            explosion.y = y;
            explosion.on("animationend", function (e) {
                explosion.remove();
            });
            setTimeout(function (e) {
                this.player.playerRevived();
            }, 3500);

            this.scoreboard.lives -= 1;
        };

        //Checks and destroy the boss. If boss is killed on level 3, it adds to the stats
        Collision.prototype.killBoss = function () {
            this.scoreboard.score += constants.SCORE_FOR_BOSS_KILL;
            this.boss.destroy();
            createjs.Sound.play("boss_explosion");

            if (currentState == constants.LEVEL3_STATE)
                timesDefeatedBossLevel3++;
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var x = 0; x < constants.ALIEN_NUM; x++) {
                this.playerAndAlien(this.alien[x]);

                //Check interaction of the bullets with the aliens and boss mob
                if (bulletManager.firing)
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
            if (this.boss.bossActive)
                this.playerAndBoss();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
/**
* Source file name: asteroidbelt.ts
* Author: Luis Acevedo, Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 07
* Program Description: Body of the creation for the asteoid object
* Revision History:
* 2014 12 07
* Created the file
* Defined the movement
*
*/
var objects;
(function (objects) {
    // game objects Class
    var AsteroidBelt = (function (_super) {
        __extends(AsteroidBelt, _super);
        //constructor for the sprite class
        function AsteroidBelt(stage, game) {
            //Call to super
            _super.call(this, managers.Assets.asteroidbelt, "asteroidBelt");
            this.isAsteroidBeltVisable = false;

            //Management of meassure of the object and definition of absolute positioning
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //Define game conditions
            this.stage = stage;
            this.game = game;

            this.reset();
        }
        //Moves the asteroid belt object on the screen
        AsteroidBelt.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width / 2) || !this.isAsteroidBeltVisable) {
                this.reset();
            }
        };

        //Repositions the asteroidbelt if it exits the screen
        AsteroidBelt.prototype.reset = function () {
            //Random position on Y
            this.y = this.stage.canvas.height / 2;

            //Movement speed of the asteroidbelt
            this.dx = Math.floor(Math.random() * 2 + 2);

            //Starting position on X
            this.x = (this.width / 2) + this.stage.canvas.width;

            if (!this.isAsteroidBeltVisable) {
                //asteroidbelt active
                this.isAsteroidBeltVisable = true;

                //add to game
                game.addChild(this);
            }
        };

        //Removes the asteroidbelt model from visible screen
        AsteroidBelt.prototype.destroy = function () {
            game.removeChild(this);
            this.isAsteroidBeltVisable = false;
        };
        return AsteroidBelt;
    })(createjs.Sprite);
    objects.AsteroidBelt = AsteroidBelt;
})(objects || (objects = {}));
/**
* Source file name: asteroid.ts
* Author: Luis Acevedo, Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 07
* Program Description: Body of the creation for the highcloud object
* Revision History:
* 2014 12 05
* Created the file
* Defined the movement
*/
var objects;
(function (objects) {
    // game objects Class
    var HighCloud = (function (_super) {
        __extends(HighCloud, _super);
        //constructor for the sprite class
        function HighCloud(stage, game) {
            //Call to super
            _super.call(this, managers.Assets.cloud, "highcloud1");
            this.isHighCloudVisable = false;

            //Management of meassure of the object and definition of absolute positioning
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //Define game conditions
            this.stage = stage;
            this.game = game;

            this.reset();
        }
        //Moves the cloud object on the screen
        HighCloud.prototype.update = function () {
            this.x -= this.dx;
            if (this.x < -1 * (this.width / 2) || !this.isHighCloudVisable) {
                this.reset();
            }
        };

        //Repositions the cloud if it exits the screen
        HighCloud.prototype.reset = function () {
            //Random position on Y
            this.y = Math.floor(Math.random() * this.stage.canvas.height);

            //Movement speed of the highcloud
            this.dx = Math.floor(Math.random() * 2 + 2);

            //Starting position on X
            this.x = (this.width / 2) + this.stage.canvas.width;

            if (!this.isHighCloudVisable) {
                //Highcloud active
                this.isHighCloudVisable = true;

                //add to game
                game.addChild(this);
            }
        };

        //Removes the asteroid model from visible screen
        HighCloud.prototype.destroy = function () {
            game.removeChild(this);
            this.isHighCloudVisable = false;
        };
        return HighCloud;
    })(createjs.Sprite);
    objects.HighCloud = HighCloud;
})(objects || (objects = {}));
/**
* Source file name: play.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo and Ian Knutson
* Date Last Modified: 2014 12 09
* Program Description: play functionallity for the game
* Revision History:
* 2014 12 09
*      Added level label
* 2014 11 15
*      Background modification
* 2014 11 11
*      Bullet addition
* 2014 11 09
*      Added new assets
*      Added new object updates
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    function playState() {
        //background control
        background.update();

        //populate clouds
        highcloud.update();

        //player and powerup update
        player.update();
        powerup.update();

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

        //bullets update
        bulletManager.update();

        //boss control
        if (scoreboard.score > currentScoreForBoss && !boss.bossActive) {
            console.log("New Boss");
            boss.reset();
            scoreboard.lives++;
            currentScoreForBoss += constants.SCORE_FOR_NEW_BOSS;
        }

        //boss update
        if (boss.bossActive)
            boss.update();

        //managers control
        collision.update();
        scoreboard.update();

        //game over state transition
        if (scoreboard.lives <= 0) {
            boss.destroy();
            stage.removeChild(game);
            player.destroy();
            highcloud.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //Check conditions for the next level
        if ((scoreboard.score > constants.SCORE_FOR_LEVEL2) && (!boss.bossActive)) {
            stage.removeChild(game);
            player.destroy();
            boss.destroy();
            highcloud.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        console.log("Level 1");

        // Declare new Game Container
        game = new createjs.Container();

        //Restart the win game condition
        timesDefeatedBossLevel3 = 0;

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level1");
        highcloud = new objects.HighCloud(stage, game);
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2) + 150, 10, "Level 1: Get to " + constants.SCORE_FOR_LEVEL2.toString());
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, asteroid, bulletManager.bullets);

        //Add all to the game
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
/**
* Source file name: menu.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo and Ian Knutson
* Date Last Modified: 2014 12 04
* Program Description: menu functionallity for the game
* Revision History:
* 2014 12 04
*      Name updated, background updated
* 2014 11 15
*      Background modification
*      Button modification for colour changes
* 2014 11 11
*      Added new assets
*      Added instructions button
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function menuState() {
        //background.update();
        player.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "FACTION WARS");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 4, 250, "start");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Instructions button
        instructionsButton = new objects.Button(stage.canvas.width / 4, 400, "instructions");
        game.addChild(instructionsButton);
        instructionsButton.addEventListener("click", states.instructionsButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
/**
* Source file name: instructionsState.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: instructionsState functionallity for the game
* Revision History:
* 2014 11 15
*      Background modification
*      Button modification for color testing
* 2014 11 11
*      Created
*      Added instructions body
*      Added instructions header
*      Tested
*/
var states;
(function (states) {
    //control for the instruction screen
    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    //Show all elements and update player movement
    function instructionsState() {
        background.update();
        player.update();
    }
    states.instructionsState = instructionsState;

    //Instruction display
    function instructions() {
        var instructionsHeaderLabel;
        var instructionsText;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");
        player = new objects.Player(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        instructionsHeaderLabel = new objects.Label(stage.canvas.width / 2, stage.canvas.height / 10, "Instructions:");
        game.addChild(instructionsHeaderLabel);

        //Display the instructions text
        instructionsText = new objects.Content(stage.canvas.width / 8, (stage.canvas.height / 10) * 2, constants.INSTRUCTIONS);
        game.addChild(instructionsText);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 450, "start");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);

        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
/**
* Source file name: gameover.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 11 15
* Program Description: Win state functionallity for the game
* Revision History:
* 2014 12 07
*  Copie gameover
* 2014 12 09
*  Added win label
*/
var states;
(function (states) {
    //Update the background
    function winState() {
        background.update();
    }
    states.winState = winState;

    // Game Over Scene
    function win() {
        var finalScoreLabel;
        var finalScore;
        var winLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        winLabel = new objects.Label(stage.canvas.width / 2, 40, "YOU WIN");
        game.addChild(winLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "replay");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", states.tryAgainClicked);

        //add to canvas
        stage.addChild(game);
    }
    states.win = win;
})(states || (states = {}));
/**
* Source file name: level3.ts
* Author: Luis Acevedo
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: play functionallity of level 3 for the game
* Revision History:
* 2014 12 09
*      Modified logic for WIN screen
* 2014 11 15
*      Background modification
* 2014 11 11
*      Bullet addition
* 2014 11 09
*      Added new assets
*      Added new object updates
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    function level3State() {
        //background control
        background.update();

        //player and powerup update
        player.update();
        powerup.update();

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

        //Frigate manager
        frigate.update();

        //bullets update
        bulletManager.update();

        //boss control
        if (scoreboard.score > currentScoreForBoss && !boss.bossActive) {
            console.log("New Boss");
            boss.reset();
            scoreboard.lives++;
            currentScoreForBoss += constants.SCORE_FOR_NEW_BOSS;
        }

        //boss update
        if (boss.bossActive)
            boss.update();

        //managers control
        collision.update();
        scoreboard.update();

        //game over state transition
        if (scoreboard.lives <= 0) {
            boss.destroy();
            player.destroy();
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //If you kill boss a n amount of times, you win
        if (timesDefeatedBossLevel3 >= constants.BOSS_KILLS_TO_WIN) {
            stage.removeChild(game);
            player.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.WIN_STATE;
            changeState(currentState);
        }
    }
    states.level3State = level3State;

    // play state Function
    function level3() {
        console.log("Level 3");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level3");
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);
        frigate = new objects.Frigate(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2) + 150, 10, "Level 3: Destroy " + constants.BOSS_KILLS_TO_WIN + " bosses");
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, frigate, bulletManager.bullets);

        stage.addChild(game);
    }
    states.level3 = level3;
})(states || (states = {}));
/**
* Source file name: level2.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: play functionallity of level 2 for the game
* Revision History:
* 2014 12 07
*      Created (copy of PLAY)
*      Added conditions to transition to level 3
* 2014 12 09
*      Cleaned up and ready to go
*/
var states;
(function (states) {
    function level2State() {
        //background control
        background.update();

        //asteroidbelt update
        asteroidbelt.update();

        //player and powerup update
        player.update();
        powerup.update();

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count].update();
        }

        //Asteroid
        asteroid.update();

        //bullets update
        bulletManager.update();

        //boss control
        if (scoreboard.score > currentScoreForBoss && !boss.bossActive) {
            console.log("New Boss");
            boss.reset();
            scoreboard.lives++;
            currentScoreForBoss += constants.SCORE_FOR_NEW_BOSS;
        }

        //boss update
        if (boss.bossActive)
            boss.update();

        //managers control
        collision.update();
        scoreboard.update();

        //game over state transition
        if (scoreboard.lives <= 0) {
            boss.destroy();
            player.destroy();
            stage.removeChild(game);
            game.removeAllChildren();

            //game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        //If the score > 15000 and Boss is dead. Next level
        if ((scoreboard.score > constants.SCORE_FOR_LEVEL3) && (!boss.bossActive)) {
            stage.removeChild(game);
            player.destroy();
            asteroidbelt.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL3_STATE;
            changeState(currentState);
        }
    }
    states.level2State = level2State;

    // play state Function
    function level2() {
        console.log("Level 2");

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "level2");
        asteroidbelt = new objects.AsteroidBelt(stage, game);
        player = new objects.Player(stage, game);
        powerup = new objects.Powerup(stage, game);
        boss = new objects.Boss(stage, game);
        asteroid = new objects.Asteroid(stage, game);

        //Add label to screen
        var currentLevelHeaderLabel;
        currentLevelHeaderLabel = new objects.Label((stage.canvas.width / 2) + 150, 10, "Level 2: Get to " + constants.SCORE_FOR_LEVEL3.toString());
        game.addChild(currentLevelHeaderLabel);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.ALIEN_NUM; count++) {
            alien[count] = new objects.Alien(stage, game);
        }

        // Create multiple bullets
        bulletManager = new managers.BulletManager(stage, player, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(player, powerup, alien, scoreboard, boss, asteroid, bulletManager.bullets);

        stage.addChild(game);
    }
    states.level2 = level2;
})(states || (states = {}));
/**
* Source file name: gameover.ts
* Author: Luis Acevedo and Ian Knutson
* Last Modified: Ian Knutson
* Date Last Modified: 2014 12 04
* Program Description: Gameover functionallity for the game
* Revision History:
* 2014 12 04
*      Changed the background
* 2014 11 15
*      Background modification
* 2014 11 11
*      Added new assets
* 2014 10 30
*      Downloaded
*/
var states;
(function (states) {
    //Update the background
    function gameOverState() {
        background.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function tryAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.tryAgainClicked = tryAgainClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game, "start_screen");

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "replay");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        //add to canvas
        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobjects.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/alien.ts" />
/// <reference path="objects/powerup.ts" />
/// <reference path="objects/boss.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="managers/bulletmanager.ts" />
/// <reference path="objects/asteroid.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/content.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/frigate.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/asteroidbelt.ts" />
/// <reference path="objects/highcloud.ts" />
/// <reference path="lib/stats.d.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/instructionsstate.ts" />
/// <reference path="states/win.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/gameover.ts" />
/**
* Source file name: game.ts
* Author: Luis Acevedo & Ian Knutson
* Last Modified: Luis Acevedo
* Date Last Modified: 2014 12 09
* Program Description: Game control and update
* Revision History:
* 2014 12 07
*      Added new resources
*      Updated game levels and screens
*      Added new objects
* 2014 11 15
*      Added boss
* 2014 11 11
*      Added new assets
*      Added bullet control with click listener
*      Added instruction screen state
*      Added player, alien, powerup objects
* 2014 10 30
*      Downloaded
*/
//Variables
//Atlas controls
var stage;
var game;

//Game objects
var player;
var powerup;
var boss;
var background;
var scoreboard;
var asteroid;
var highcloud;
var asteroidbelt;
var frigate;
var stats;
var alien = [];

//Game control
var currentScoreForBoss = constants.SCORE_FOR_NEW_BOSS;
var bulletWasShot = false;
var timesDefeatedBossLevel3 = 0;

//Managers
var bulletManager;
var collision;

//Menu objects
var tryAgain;
var playButton;
var instructionsButton;

//State machine
var currentState;
var currentStateFunction;

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    //Background music
    createjs.Sound.play('background', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

    //Bullet control
    stage.addEventListener("click", bulletShot);

    //Call configuration to start game
    gameStart();
}

//Starts the game
function gameStart() {
    //Call stats for framerate
    setupStats();

    //Start the game in the menu
    currentState = constants.MENU_STATE;
    changeState(currentState);
}

//Sets up the FPS visualization
function setupStats() {
    // Uses stats.js
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    console.log("Stats are setted up");
}

//Listener for the shooting of the bullet
function bulletShot(event) {
    if (currentState == constants.PLAY_STATE || currentState == constants.LEVEL2_STATE || currentState == constants.LEVEL3_STATE) {
        if (!player.animationPlaying)
            bulletWasShot = true;
    }
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    stats.begin();

    currentStateFunction();
    stage.update(event);

    return stats.end();
}

// State machine code
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            currentState = constants.MENU_STATE;
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.INSTRUCTIONS_STATE:
            currentState = constants.INSTRUCTIONS_STATE;
            currentStateFunction = states.instructionsState;
            states.instructions();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            currentState = constants.GAME_OVER_STATE;
            states.gameOver();
            break;

        case constants.WIN_STATE:
            currentStateFunction = states.winState;
            currentState = constants.WIN_STATE;
            states.win();
            break;

        case constants.PLAY_STATE:
            currentState = constants.PLAY_STATE;
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.LEVEL2_STATE:
            currentState = constants.LEVEL2_STATE;
            currentStateFunction = states.level2State;
            states.level2();
            break;

        case constants.LEVEL3_STATE:
            currentState = constants.LEVEL3_STATE;
            currentStateFunction = states.level3State;
            states.level3();
            break;
    }
}
//# sourceMappingURL=factionwars.js.map
