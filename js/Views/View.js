define("View", ["jquery", "Templates"], function($, Templates){

  var productList = $('.all-products .products-list');
  var categoryList = $('.categories-list');
  var productDetails = $('.product-details');

  function generateProductsHTML(data) {
    productList.empty();
    productList.append (Templates.productListTemplate(data));
  }

  function generateCategoriesHTML(data) {
    categoryList.append(Templates.categoryListTemplate(data));
  }

  function generateProductInfo(data) {
    productDetails.append(Templates.productTemplate(data));
    setTimeout(100); // enough time to build high res image path & fetch it
    $("#modal-" + data.sku).openModal();
  }

  return {
    generateProductsHTML: generateProductsHTML,
    generateCategoriesHTML: generateCategoriesHTML,
    generateProductInfo: generateProductInfo
  };

});
