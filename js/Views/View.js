define("View", ["jquery", "Handlebars"], function($, Handlebars){

  var productsList = $('.all-products .products-list');
  var categoriesList = $('.categories-list');
  var productDetails = $('.product-details');

  function generateProductsHTML(data) {
    productsList.empty();
    var productTemplateScript = $("#products-template").html();
    var productTemplate = Handlebars.compile(productTemplateScript);
    productsList.append (productTemplate(data));
  }

  function generateCategoriesHTML(data) {
    var categoryTemplateScript = $("#categories-template").html();
    var categoryTemplate = Handlebars.compile (categoryTemplateScript);
    categoriesList.append(categoryTemplate(data));
  }

  function generateProductInfo(data) {
    var productTemplateScript = $("#product-modal-template").html();
    var productTemplate = Handlebars.compile(productTemplateScript);
    productDetails.append(productTemplate(data));
    $("#modal-" + data.sku).openModal();
  }

  // Builds category string URLs
  Handlebars.registerHelper('uri', function(string) {
    string = string.replace(/[&,\/"'()]/g, '').replace(/\s+/g, '-').toLowerCase();
    return string;
  });

  // Gets the path for a higher resolution image as product details only returns thumbnail
  Handlebars.registerHelper('fetchHighResImage', function(thumbnailImagePath) {
    thumbnailImagePath = thumbnailImagePath.replace(/55x55/g, '300x300');
    return thumbnailImagePath;
  });

  return {
    generateProductsHTML: generateProductsHTML,
    generateCategoriesHTML: generateCategoriesHTML,
    generateProductInfo: generateProductInfo
  };

});
