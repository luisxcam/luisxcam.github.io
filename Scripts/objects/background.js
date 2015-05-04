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
//# sourceMappingURL=background.js.map
