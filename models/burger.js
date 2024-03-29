var orm = require('../config/orm');

var burger = {
  selectAll: function(callBack){
    orm.selectAll('burgers', function(res){
      callBack(res);
    })
  },
  insertOne: function(col, val, callBack){
    orm.insertOne('burgers', col, val, function(res){
      callBack(res);
    })
  },
  updateOne: function(updateObj, condition, callBack){
    orm.updateOne('burgers', updateObj, condition, function(res){
      callBack(res);
    })
  }
}

module.exports = burger;