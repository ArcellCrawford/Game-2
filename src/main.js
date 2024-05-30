
// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1400,
    height: 800,
    scene: [Load, MainMenu, Gamescene]
}

var cursors
const SCALE = 2.0;
var my = {sprite: {}, text: {}};

const game = new Phaser.Game(config);