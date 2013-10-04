/*
 * assemble-yaml
 * https://github.com/assemble/assemble-yaml
 *
 * Copyright (c) 2013 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

var YAML = require('to').format.yaml;
function sortObject(obj) {
  keys = [];
  var key, sorted = {};

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  keys.sort();
  for (var index in keys) {
    key = keys[index];
    sorted[key] = obj[key];
  }
  return YAML.stringify(sorted);
}

module.exports = sortObject;