var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//# sourceMappingURL=content.js.map
