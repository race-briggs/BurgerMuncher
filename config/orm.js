var connection = require('./connection');

function questionMarks(number){
  var array = [];

  for(var i = 0; i < number; i++){
    array.push('?');
  }

  return array.toString();
}

function objectToSQL(object){
  var array = [];

  for(var key in object){
    var value = object[key];
    
    if(Object.hasOwnProperty.call(object, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      array.push(key + "=" + value);
    }
  }

  return array;
};

var orm = {
  selectAll: function(tableName, callBack){
    var queryString = 'SELECT * FROM '+tableName+';'
    connection.query(queryString, function(error, results){
      if(error) throw error;
      callBack(results);
    })
  },
  insertOne: function(table, col, val, callBack){
    var queryString = 'INSERT INTO ' + table + '('+col.toString()+') VALUES ('+ questionMarks(val.length) + ');';

    console.log(queryString);

    connection.query(queryString, val, function(error, result){
      if (error) throw error;

      callBack(result);
    });
  },
  updateOne: function(tableName, updateObj, condition, callBack){
    console.log(updateObj)
    var queryString = "UPDATE " + tableName + " SET " + objectToSQL(updateObj) + " WHERE " + condition;

    console.log(queryString);

    connection.query(queryString, function(error, result){
      callBack(result);
    })
  }
}

module.exports = orm;