'use strict';

var BootState = require('./states/boot'),
    PlayState = require('./states/play'),
    MenuState = require('./states/menu'),
    SelectLevelState = require('./states/selectLevel'),
    PreloadState = require('./states/preload'),
    game;

window.onload = function () {
    game = new Phaser.Game(1080, 1920, Phaser.AUTO);

    game.state.add('boot', BootState);
    game.state.add('play', PlayState);
    game.state.add('menu', MenuState);
    game.state.add('selectLevel', SelectLevelState);
    game.state.add('preload', PreloadState);

    game.state.start('boot');


    if (!game.events) game.events = {};
};
