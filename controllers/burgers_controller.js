var express = require('express');

var router = express.Router();

var burger = require('../model/burger.js');

router.get('/', (req,res) => {
   burger.selectAll(function(burgers){
       console.log('Burgers: ', burgers);
       res.render("index", {burgers})
   });
})

router.post( (req, res) => {
  var burgerName = req.body.burgerName;
  var column = "burger_name";
  console.log(column);
  console.log(burgerName);
  burger.insertOne(column, burgerName, function(data){
      console.log(data);
    res.redirect("/");
  });
})

module.exports = router;
