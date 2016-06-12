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
          _activateModals();
        }
      );
    }
  }

  function _activateModals() {
    $(function() {
      $("[class*='modal-trigger-']").leanModal();
    });
  }

  function _addCategoryFilterListeners() {
    $(function() {
      $(".category-filter").on("click", function() {
        var categoryId = $(this).data("index");
        filterProducts(categoryId);
      });
    });
  }

  return {
    init: init,
    filterProducts: filterProducts
  };

});
