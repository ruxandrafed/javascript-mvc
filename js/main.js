requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min',
    "Handlebars": 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min',
    'helpers': 'Helpers/helpers',
    'Product': 'Models/Product',
    'Category': 'Models/Category',
  },
  "shim": {
    "materialize": ["jquery"]
  }
});

require(["jquery", "materialize", "Handlebars", "api", "Product", "Category"],

  function($, materialize, Handlebars, api, Product, Category) {

    api.getCategories(
      function(data) {
        var categories = [];
        data.subCategories.forEach(function(categoryData) {
          categories.push(new Category(categoryData));
        });
        generateCategoriesListHTML(categories);
        addCategoryFilterListeners();
      }
    );

    api.getAllProducts(
      function(data) {
        var products = [];
        data.products.forEach(function(productData) {
          products.push(new Product(productData));
        });
        generateProductsHTML(products);
        activateModals(products);
      }
    );

    // api.getProductInfo('10419361',
    //   function(data) {
    //     var product = new Product(data);
    //     console.log(product);
    //   }
    // );

    function activateModals(products) {
      $(document).ready(function(){
        for (ii=0; ii<products.length; ii++) {
          $('.modal-trigger-' + products[ii]["sku"]).leanModal();
        }
      });
    }

    function addCategoryFilterListeners() {
      $(".categories-list li").on("click", function() {
        var categoryId = $(this).data("index");

        if (categoryId) {
          api.getAllProductsForCategory(categoryId,
            function(data) {
              var products = [];
              data.products.forEach(function(productData) {
                products.push(new Product(productData));
              });
              generateProductsHTML(products);
              activateModals(products);
            }
          );
        } else {
            api.getAllProducts(
              function(data) {
                var products = [];
                data.products.forEach(function(productData) {
                  products.push(new Product(productData));
                });
                generateProductsHTML(products);
                activateModals(products);
              }
            );
        }

      });
    }

    function generateProductsHTML(data) {
      var list = $('.all-products .products-list');
      list.empty();
      var theTemplateScript = $("#products-template").html();
      var theTemplate = Handlebars.compile (theTemplateScript);
      list.append (theTemplate(data));
    }

    function generateCategoriesListHTML(data) {
      var list = $('.categories-list');
      var theTemplateScript = $("#categories-template").html();
      var theTemplate = Handlebars.compile (theTemplateScript);
      list.append(theTemplate(data));
    }

  }

);
