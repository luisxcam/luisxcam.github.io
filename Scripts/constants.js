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
//# sourceMappingURL=constants.js.map
