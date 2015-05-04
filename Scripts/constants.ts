
﻿/**
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
module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var INSTRUCTIONS_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var WIN_STATE: number = 3;
    export var PLAY_STATE: number = 4;
    export var LEVEL2_STATE: number = 5;
    export var LEVEL3_STATE: number = 6;

    // Game Constants
    export var ALIEN_NUM: number = 6;
    export var PLAYER_SPEED: number = 6;
    export var BOSS_HEALTH: number = 6;
    export var BOSS_X_POSITION_TO_NEW_POSITION: number = 70;
    export var BOSS_MOVEMENT_SPEED: number = 6;
    export var SCORE_FOR_NEW_BOSS: number = 3000;
    export var SCORE_FOR_LEVEL2: number = 5000;
    export var SCORE_FOR_LEVEL3: number = 10000;
    export var BOSS_KILLS_TO_WIN: number = 5;
    export var SCORE_FOR_POWERUPS: number = 100;
    export var SCORE_FOR_ENEMY_KILL: number = 250;
    export var SCORE_FOR_BOSS_KILL: number = 500;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFFFF";
    export var CONTENT_FONT = "18px Consolas";
    export var CONTENT_COLOUR = "#FFFFFF";
    export var PLAYER_LIVES = 3;
    export var BULLET_SPEED = 15;

    // Instructions of the game
    export var INSTRUCTIONS: string = "Welcome Soldier. You are controlling mankind's most powerful weapon, your mission is to end this war. The UNSCDF faction and the RED Eagles have been fighting for decades, with your upgraded stealth ship your mission is to destroy the ships in charge of communications with both factions. If you fail, all of humankind will forever be doomed. Fight along side whatever faction furthers your mission. Good Luck";
}