'use strict';
var gameData = require('../gameData/gameData');
var config = require('../config/main');
function SelectLevel() {
}

SelectLevel.prototype = {
    preload: function () {

    },

    create: function () {
        this.initMenu();
    },

    initMenu: function () {
        var levels = [];
        var pages = gameData.levelSelection.length / config.levelSelection.maxLevelsPerPage;
        for (var i = 0; i < pages; i++) {
            levels[i] = []
            var page = this.game.add.group();
            page.visible = false;
            levels[i].push(page);
        }
        var pagIndex = 0;
        var levelIndex = 0;
        var ceilIndex = 0
        var rowIndex = 0
        var self = this;
        gameData.levelSelection.forEach(function (levelConfig) {
            if(ceilIndex === config.levelSelection.maxLevelsPerRow){
                ceilIndex = 0;
                rowIndex++;
            }
            var levelButton = self.initLevelButton(levelConfig, ceilIndex, rowIndex);
            levels[pagIndex][levelIndex] = levelButton;

            levelIndex++;
            ceilIndex++;

            if(levelIndex === config.levelSelection.maxLevelsPerPage){
                pagIndex++;
                ceilIndex = 0;
                rowIndex = 0;
            }
        });


    },

    getPosition: function getPosition(ceilIndex, rowIndex) {
        var levelSelectionConfig = config.levelSelection;
        var x;
        if(ceilIndex === 0){
            x = levelSelectionConfig.group.offSetX;
        } else if (ceilIndex === 1){
            x = (levelSelectionConfig.buttons.width + levelSelectionConfig.buttons.offSetX + levelSelectionConfig.group.offSetX) * ceilIndex;
        } else {
            x = (levelSelectionConfig.buttons.width + (levelSelectionConfig.buttons.offSetX * 2)) * ceilIndex;
        }

        var y;
        if(rowIndex === 0){
            y = levelSelectionConfig.group.offSetY;
        } else {
            y = levelSelectionConfig.group.offSetY + ((levelSelectionConfig.buttons.height + levelSelectionConfig.buttons.offSetY) * rowIndex);
        }

        return {x: x, y: y};
    },

    initLevelButton: function initLevelButton(levelConfig, ceilIndex, rowIndex) {
        var positions = this.getPosition(ceilIndex, rowIndex);
        var buttonGp = this.game.add.group();
        var textConfig = config.levelSelection.buttons.text;
        var callback = function(){
            console.log('Level selected', levelConfig.level);
        };
        var buttonSprite = this.game.add.button(positions.x, positions.y, 'levelSelection', callback);//+ levelConfig.stars
        var style = {font: "32px Arial", fill: "#ff0044", wordWrap: true};

        var buttonText = this.game.add.text(positions.x + textConfig.x, positions.y + textConfig.y, levelConfig.level, style);

        buttonGp.add(buttonSprite);
        buttonGp.add(buttonText);

        return buttonGp;
    }
};

module.exports = SelectLevel;
