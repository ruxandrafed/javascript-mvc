define("Product", ["helpers"], function(helpers){

  var propsToKeep = [
    "highResImage",
    "name",
    "productUrl",
    "regularPrice",
    "salePrice",
    "shortDescription",
    "sku",
    "thumbnailImage"
  ];

  function Product(productDetails){
    helpers.mapProperties(productDetails, this, propsToKeep);
    if (productDetails.salePrice && productDetails.regularPrice) {
      this.isOnSale = productDetails.salePrice < productDetails.regularPrice;
    }
  }

  return Product;
});
