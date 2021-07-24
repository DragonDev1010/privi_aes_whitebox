'use strict';

var fs = require('fs');

// var getHmac = require('../../src/hmac-generator.js'),
var getAes = require('../aes-src/aes-generator.js');

// var generateHmac = function(k, options) {
//     var code = getHmac(k, options);
//     fs.writeFileSync(options.file, code);
// };

var generateAes = function(k, options) {
    var code = getAes(k, options);
    // var k = '/tmp/wbaes-smoke-umd.js'
    fs.writeFileSync(options.file, code);
    // fs.writeFileSync(k, code);
};

// module.exports = {generateAes: generateAes, generateHmac: generateHmac};
module.exports = {generateAes: generateAes};

