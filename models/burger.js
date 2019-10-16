var orm = require('../config/orm');

var burger = {
  all: function(callBack){
    orm.selectAll('burgers', function(res){
      callBack(res);
    })
  },
  create: function(col, val, callBack){
    orm.insertOne('burgers', col, val, function(res){
      callBack(res);
    })
  },
  update: function(updateObj, condition, callBack){
    orm.updateOne('burgers', updateObj, condition, function(res){
      callBack(res);
    })
  }
}

module.exports = burger;