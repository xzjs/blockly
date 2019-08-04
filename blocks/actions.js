'use strict';

goog.provide('Blockly.Blocks.texts');  // Deprecated
goog.provide('Blockly.Constants.Text');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Text.HUE = 160;

Blockly.Blocks['plant'] = {
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg['PLANT'],
            "args0": [
                {
                    "type": "input_value",
                    "name": "Fruit"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "style": "text_blocks",
            "tooltip": "种",
            "helpUrl": ""
        });
    }
};

Blockly.Blocks['banana'] = {
    /**
     * Block to represent a picture.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "type": "banana",
            "message0": "%1",
            "args0": [{
                "type": "field_image",
                "src": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564922442658&di=575d08fa27005e540f7d5f6544f7509d&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F92%2F08%2F5abcb85d1e854_610.jpg",
                "width": 50,
                "height": 50,
                "alt": "*",
                "flipRtl": false
            }],
            "output": "String",
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
        });
    },
};
