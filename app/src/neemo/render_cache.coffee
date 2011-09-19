# caches render objects and purges them after 60 seconds of inactivity
# also has functions to purge all.

Step       = require "step"
_          = require "underscore"
grainstore = require "grainstore"

module.exports = (timeout, mml_store) ->
  renderKey = "<%= dbname %>:<%= table %>:<%= format %>:<%= geom_type %>:<%= sql %>:<%= interactivity %>:<%= cache_buster %>"
  baseKey   = "<%= dbname %>:<%= table %>:"

  me = {
    renderers: {},
    timeouts:{},
    timeout: timeout or 60000
  }

  # Create a string ID from a datasource.
  me.createKey = (params) ->
    opts =  _.extend({}, params); # as params is a weird arrayobj right here
    _.defaults(opts, {dbname:'', table:'', format:'', geom_type:'', sql:'', interactivity:'', cache_buster: ''})
    _.template(renderKey, opts)
  me  