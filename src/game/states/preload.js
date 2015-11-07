'use strict';


function Preload() {
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.load.tilemap('map', 'assets/tiles/tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', 'assets/tiles/tiles.png');
        this.load.image('block', 'assets/images/block.png');
        this.load.image('block1', 'assets/images/block1.png');
        this.load.image('block2', 'assets/images/block2.png');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('muteButton', 'assets/images/mute_button.png');
        console.log('estoy en el estado preload');

    },
    create: function () {
        this.game.state.start('menu');
    }
};

module.exports = Preload;
