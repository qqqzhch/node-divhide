'use strict';

var _           = require("lodash"),
    Type        = require("../Type"),
    Safe        = require("../Safe"),
    Exception   = require("../Exception/Exception");



/**
 *
 * Test the max length of any kind of object
 *
 * @throws {Exception}
 *
 * @param {*} val
 * @return {*}
 *
 */
var Max = function(val, max){

    max = Safe.number(max);
    var length = Safe.length(val);

    if(length > max){
        throw new Exception("VALIDATION_MAX", { value: max });
    }

    return val;

};

module.exports = Max;
