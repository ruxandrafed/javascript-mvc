define("Product", ["helpers"], function(helpers){

  var propsToKeep = [
    "highResImage",
    "name",
    "productUrl",
    "regularPrice",
    "shortDescription",
    "sku",
    "thumbnailImage"
  ];

  function Product(productDetails){
    helpers.mapProperties(productDetails, this, propsToKeep);
  }

  return Product;
});
