(function() {
  var Step, grainstore, _;
  Step = require("step");
  _ = require("underscore");
  grainstore = require("grainstore");
  module.exports = function(timeout, mml_store) {
    var baseKey, me, renderKey;
    renderKey = "<%= dbname %>:<%= table %>:<%= format %>:<%= geom_type %>:<%= sql %>:<%= interactivity %>:<%= cache_buster %>";
    baseKey = "<%= dbname %>:<%= table %>:";
    me = {
      renderers: {},
      timeouts: {},
      timeout: timeout || 60000
    };
    me.createKey = function(params) {
      var opts;
      opts = _.extend({}, params);
      _.defaults(opts, {
        dbname: '',
        table: '',
        format: '',
        geom_type: '',
        sql: '',
        interactivity: '',
        cache_buster: ''
      });
      return _.template(renderKey, opts);
    };
    return me;
  };
}).call(this);
