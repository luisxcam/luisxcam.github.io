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
//# sourceMappingURL=game.js.map
