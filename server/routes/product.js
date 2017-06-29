var express = require('express');
var router = express.Router();      //a constructor (.Router)

var products = [];
// Express removed the '/product' when we do an app.use

router.post('/', function(req,res){
  var product = req.body;
  products.push(product);
  console.log(product.productName + " " + product.productCost);
  res.send({message: 'Successfully added our product!'}); //putting this on server side = less updating
  //message here would go out to the desktop, mobile, etc.
});

router.get('/', function(req, res){
  res.send(products);
});

//Can also include things like: /product/add or /product/new
//And what we'd pass into the get or post requests would be /add or /new

module.exports = router;  //need this to return these routers to server.js
