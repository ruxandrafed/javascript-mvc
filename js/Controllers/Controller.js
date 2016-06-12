define("Controller", ["Api", "Product", "Category", "View"], function(Api, Product, Category, View){

  function init(){

    Api.getAllProducts(
      function(data) {
        var products = [];
        data.products.forEach(function(productData) {
          products.push(new Product(productData));
        });
        View.generateProductsHTML(products);
      }
    );

    Api.getCategories(
      function(data) {
        var categories = [];
        data.subCategories.forEach(function(categoryData) {
          categories.push(new Category(categoryData));
        });
        View.generateCategoriesHTML(categories);
      }
    );
  }

  function filterProducts(categoryId = null) {

    if (categoryId) {
      Api.getAllProductsForCategory(categoryId,
        function(data) {
          var products = [];
          data.products.forEach(function(productData) {
            products.push(new Product(productData));
          });
          View.generateProductsHTML(products);
        }
      );
    }
    else {
      Api.getAllProducts(
        function(data) {
          var products = [];
          data.products.forEach(function(productData) {
            products.push(new Product(productData));
          });
          View.generateProductsHTML(products);
        }
      );
    }
  }

  function viewProduct(productSKU) {
    if (productSKU) {
      Api.getProductInfo(productSKU,
        function(data) {
          var product = new Product(data);
          View.generateProductInfo(product);
        }
      );
    }
  }

  return {
    init: init,
    filterProducts: filterProducts,
    viewProduct: viewProduct
  };

});
