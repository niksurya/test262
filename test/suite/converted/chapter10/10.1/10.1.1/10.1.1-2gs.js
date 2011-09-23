

/**
 * @path chapter10/10.1/10.1.1/10.1.1-2gs.js
 * @description Strict Mode - Use Strict Directive Prologue is ''use strict'' which lost the last character ';'
 * @strictOnly
 * @negative EarlyErrorRePat
 */

"use strict"
throw NotEarlyError;
var public = 1;