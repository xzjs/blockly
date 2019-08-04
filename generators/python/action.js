'use strict';

goog.provide('Blockly.Python.texts');

goog.require('Blockly.Python');

Blockly.Python['plant'] = function (block) {
    var fruit = Blockly.Python.valueToCode(block, 'Fruit', Blockly.Python.ORDER_NONE) || '\'\'';
    return 'print("种植了' + fruit + '")\n';
}

Blockly.Python['banana'] = function (block) {
    return ["香蕉", Blockly.Python.ORDER_ATOMIC];
}