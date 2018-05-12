
var orm = require("../config/orm.js");

var burger = {
  all: function(call) {
    orm.all("burgers", function(res) {
      call(res);
    });
  },
 
  create: function(cols, vals, call) {
    orm.create("burgers", cols, vals, function(res) {
      call(res);
    });
  },
  update: function(objColVals, condition, call) {
    orm.update("burgers", objColVals, condition, function(res) {
      call(res);
    });
  }
};


module.exports = burger;