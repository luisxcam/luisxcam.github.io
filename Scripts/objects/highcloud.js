var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//# sourceMappingURL=highcloud.js.map
