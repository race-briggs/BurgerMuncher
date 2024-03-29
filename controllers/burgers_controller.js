var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

router.get('/', function(req, res){
  burger.selectAll(function(data){
    var resObject = {
      burgers: data
    };
    console.log(resObject);
    res.render('index', resObject);
  })
})

router.post('/api/burgers', function(req, res){
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result){
    res.json({id: result.insertId})
  });
})

router.put('/api/burgers/:id', function(req, res){
  var condition = 'id=' + req.params.id;

  console.log(condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(response){
    if(response.changedRows == 0){
      return res.status(404).end();
    } else{
      res.status(200).end();
    }
  });
});

module.exports = router;