define("View", ["jquery", "Handlebars"], function($, Handlebars){

  var productsList = $('.all-products .products-list');
  var categoriesList = $('.categories-list');

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

  return {
    generateProductsHTML: generateProductsHTML,
    generateCategoriesHTML: generateCategoriesHTML
  };

});
