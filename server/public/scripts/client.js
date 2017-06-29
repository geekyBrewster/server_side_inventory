$(document).ready(function(){

  refreshProducts();

  $('#submitButton').on('click', function(){
    var productName = $('#productName').val();
    var productCost = $('#cost').val();
    console.log("Product Name: ", productName);
    console.log("Product Name: ", productCost);

    $.ajax({
      type: 'POST',
      url: '/product',
      data: {productName: productName,
              productCost: productCost},
      success: function(response){
        console.log(response);
        refreshProducts();
      }
    });
  }); //End of button listener

}); //End of doc.ready

function refreshProducts(){
  $.ajax({
    type: 'GET',
    url: '/product',
    success: function(response){
      $('#productList').empty();
      var products = response;
      for(var i = 0; i < products.length; i++){
        var product = products[i];
        console.log("I have received: " + product);
        $('#productList').append('<p>' + product.productName + ": $" +
                                  product.productCost + '</p>');
      }
    }
  });
}
