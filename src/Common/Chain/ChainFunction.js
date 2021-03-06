'use strict';

var _    = require("lodash"),
    Type = require("../Type"),
    Safe = require("../Safe");

/**
 * @class
 * The ChainFunction wraps the functionality of a function executed
 * on a chain context.
 *
 * @param {Object} options
 *
 * @example
 * new ChainFunction({
 *     fn   : function(){},
 *     args : []
 * });
 *
 */
var ChainFunction = function(options){

    options = Safe.object(options);

    this.name   = Safe.string(options.name, "?");
    this.fn     = Safe.function(options.fn, function(){});
    this.args   = Safe.array(options.args);

};

/**
 *
 * Execute the function within the context of the given scope and args.
 *
 * The arguments of the function will be the concatenation of the given
 * args and the instance arguments.
 *
 * @param  {*} scope
 * @param  {*} args
 * @param  {*} extraArgs
 *
 * @return {*}
 *
 */
ChainFunction.prototype.apply = function(scope, args, extraArgs) {

    scope       = Safe.object(scope);
    args        = Safe.array(args);
    extraArgs   = Safe.array(extraArgs);

    /// the given args should always exist
    if(args.length === 0) args = [ null ];

    /// concatenate the given arguments with the instance
    args = args.concat(this.args).concat(extraArgs);

    /// execute function with obj scope and the given arguments
    return this.fn.apply(scope, args);

};


module.exports = ChainFunction;
