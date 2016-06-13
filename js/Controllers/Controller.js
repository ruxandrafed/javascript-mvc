define("Controller", ["Api", "Product", "Category", "View"], function(Api, Product, Category, View){

  PRODUCTLISTLOCATION = $('.all-products .products-list');
  CATEGORYLISTLOCATION = $('.categories-list');
  PRODUCTDETAILSLOCATION = $('.product-details');

  function init(){

    Api.getAllProducts(
      function(data) {
        var products = [];
        data.products.forEach(function(productData) {
          products.push(new Product(productData));
        });
        View.generateProductsHTML(products, PRODUCTLISTLOCATION);
      }
    );

    Api.getCategories(
      function(data) {
        var categories = [];
        data.subCategories.forEach(function(categoryData) {
          categories.push(new Category(categoryData));
        });
        View.generateCategoriesHTML(categories, CATEGORYLISTLOCATION);
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
          View.generateProductsHTML(products, PRODUCTLISTLOCATION);
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
          View.generateProductsHTML(products, PRODUCTLISTLOCATION);
        }
      );
    }
  }

  function viewProduct(productSKU) {
    if (productSKU) {
      Api.getProductInfo(productSKU,
        function(data) {
          var product = new Product(data);
          View.generateProductInfo(product, PRODUCTDETAILSLOCATION);
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
