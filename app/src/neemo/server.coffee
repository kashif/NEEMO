express     = require "express"
grainstore  = require "grainstore"
RenderCache = require "./render_cache"
_           = require "underscore"
Step        = require "step"
fs          = require "fs"
path        = require "path"

module.exports = (opts) ->
  opts = opts or {}

  app = express.createServer()
  
  