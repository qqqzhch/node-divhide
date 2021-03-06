'use strict';

var _           = require("lodash"),
    Type        = require("../Type"),
    Safe        = require("../Safe"),
    Exception   = require("../Exception/Exception");

/**
 *
 * Test the regex
 *
 * @throws {Exception}
 *
 * @param {*}               val
 * @param {String|Regex}    regex
 * @return {*}
 *
 */
var Regex = function(val, regex){

    regex = Safe.regexp(regex);

    var isValid = !!regex.exec(val);

    if(!isValid){
        throw new Exception("REGEXP", { value: val });
    }

    return val;

};

module.exports = Regex;