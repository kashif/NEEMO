(function() {
  var RenderCache, Step, express, fs, grainstore, path, _;
  express = require("express");
  grainstore = require("grainstore");
  RenderCache = require("./render_cache");
  _ = require("underscore");
  Step = require("step");
  fs = require("fs");
  path = require("path");
  module.exports = function(opts) {
    var app;
    opts = opts || {};
    return app = express.createServer();
  };
}).call(this);
