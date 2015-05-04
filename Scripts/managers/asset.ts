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
module managers {
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
        { id: "background", src: "assets/sounds/background.mp3" },
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
                speed: 0.1,
            },

            "asteroid_explosion": {
                frames: [5, 6, 7, 8, 9, 10, 11, 12],
                speed: 0.1,
            },
            "big_boss": [13],
            "boss": {
                frames: [14, 15, 16],
                speed: 0.1,
            },
            "missile": {
                frames: [17, 18, 19, 20],
                speed: 1,
            },
            "capsule_f1": [21],
            "capsule_f2": [22],
            "explosion": {
                frames: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                speed: 0.4,
            },
            "faction1": {
                frames: [50, 51, 52, 53, 54],
                speed: 0.1,
            },
            "faction2": {
                frames: [55, 56, 57, 58, 59],
                speed: 0.1,
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
        },

    };

    // SpriteSheet Data Object
    var highCloudData = {
        "images": ["assets/images/HighCloud1.png"],
        "frames": [
            [5, 5, 3090, 1690]],
        "animations": {
            "highcloud1": [0]
        }
    };

    // SpriteSheet Data Object
    var asteroidBeltData = {
        "images": ["assets/images/LowAsteroidLayer.png"],
        "frames": [
            [5, 5, 4790, 590]],
        "animations": {
            "asteroidBelt": [0]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;
        

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static cloud: createjs.SpriteSheet;
        public static asteroidbelt: createjs.SpriteSheet;

        //Loader for all elements defined
        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.cloud = new createjs.SpriteSheet(highCloudData)
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.asteroidbelt = new createjs.SpriteSheet(asteroidBeltData);
        }

    }
} 