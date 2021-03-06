var Rectangle = require('./Rectangle');

/**
 * [description]
 *
 * @function Phaser.Geom.Rectangle.Union
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - [description]
 * @param {Phaser.Geom.Rectangle} rectB - [description]
 * @param {Phaser.Geom.Rectangle} [out] - [description]
 *
 * @return {Phaser.Geom.Rectangle} [description]
 */
var Union = function (rectA, rectB, out)
{
    if (out === undefined) { out = new Rectangle(); }

    var x = Math.min(rectA.x, rectB.x);
    var y = Math.min(rectA.y, rectB.y);

    return out.setTo(
        x,
        y,
        Math.max(rectA.right, rectB.right) - x,
        Math.max(rectA.bottom, rectB.bottom) - y
    );
};

module.exports = Union;
