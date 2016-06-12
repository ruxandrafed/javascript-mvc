define("Controller", ["api", "Product", "Category", "View"], function(api, Product, Category, View){

  function init(){

    api.getAllProducts(
      function(data) {
        var products = [];
        data.products.forEach(function(productData) {
          products.push(new Product(productData));
        });
        View.generateProductsHTML(products);
        _activateModals(products);
      }
    );

    api.getCategories(
      function(data) {
        var categories = [];
        data.subCategories.forEach(function(categoryData) {
          categories.push(new Category(categoryData));
        });
        View.generateCategoriesHTML(categories);
        _addCategoryFilterListeners();
      }
    );
  }

  function filterProducts(categoryId = null) {

    if (categoryId) {
      api.getAllProductsForCategory(categoryId,
        function(data) {
          var products = [];
          data.products.forEach(function(productData) {
            products.push(new Product(productData));
          });
          View.generateProductsHTML(products);
          _activateModals(products);
        }
      );
    }
    else {
      api.getAllProducts(
        function(data) {
          var products = [];
          data.products.forEach(function(productData) {
            products.push(new Product(productData));
          });
          View.generateProductsHTML(products);
          _activateModals(products);
        }
      );
    }
  }

  function _activateModals(products) {
    $(document).ready(function(){
      for (ii=0; ii<products.length; ii++) {
        $('.modal-trigger-' + products[ii]["sku"]).leanModal();
      }
    });
  }

  function _addCategoryFilterListeners() {
    $(".categories-list li").on("click", function() {
      var categoryId = $(this).data("index");
      filterProducts(categoryId);
    });
  }

  return {
    init: init,
    filterProducts: filterProducts
  };

});
