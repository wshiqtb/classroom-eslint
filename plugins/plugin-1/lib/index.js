/**
 * @fileoverview plugin-1
 * @author plugin-1
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



// import processors
module.exports.processors = {
  // add your processors here
};

// import environments
module.exports.environments = requireIndex(__dirname + '/envs');

// import extends
module.exports.configs = {
  skylar: {
    rules: {
      "semi": 2
    }
  }
}

