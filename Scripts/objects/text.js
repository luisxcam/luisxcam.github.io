var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../constants.ts" />
var objects;
(function (objects) {
    var Text = (function (_super) {
        __extends(Text, _super);
        function Text(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
        return Text;
    })(createjs.Text);
    objects.Text = Text;
})(objects || (objects = {}));
//# sourceMappingURL=text.js.map
