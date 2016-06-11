requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min',
    'helpers': 'Helpers/helpers',
    'Product': 'Models/Product',
    'Category': 'Models/Category',
  },
  "shim": {
    "materialize": ["jquery"]
  }
});

require(["jquery", "materialize", "api", "Product", "Category"],

  function($, materialize, api, Product, Category) {

    api.getCategories(
      function(data) {
        data.subCategories.forEach(function(categoryData) {
          var category = new Category(categoryData);
          // console.log(category);
        })
      }
    );

    // api.getAllProductsForCategory('20003',
    //   function(data) { console.log(data); }
    // );

    api.getAllProducts(
      function(data) {
        data.products.forEach(function(productData) {
          var product = new Product(productData);
          console.log(product);
        })
      }
    );

    // api.getProductInfo('10419361',
    //   function(data) {
    //     var product = new Product(data);
    //     console.log(product);
    //   }
    // );

    $(document).ready(function(){
      // modals initialization
      for (ii=1; ii<=24; ii++) {
        $('.modal-trigger-' + ii).leanModal();
      }
    });

  }

);
