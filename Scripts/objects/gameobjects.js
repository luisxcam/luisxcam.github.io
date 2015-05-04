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
//# sourceMappingURL=gameobjects.js.map
