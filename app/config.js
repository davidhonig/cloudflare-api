const fs = require('fs');

function config() { 
    cfgdata = fs.readFileSync('.config');
    return JSON.parse(cfgdata);
}

module.exports = config;