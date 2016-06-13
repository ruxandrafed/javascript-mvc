requirejs.config({
  paths: {
    'View': 'Views/View'
  }
});

require(["View"],

  function(View) {

    QUnit.test( "View: Product list", function(assert) {
      var fixture = $("#qunit-fixture");
      var products = [{name: "Product 1", shortDescription: "Description product 1"}, {name: "Product 2", shortDescription: "Description product 2"}]
      View.generateProductsHTML(products, fixture);
      assert.equal($("li",fixture).length, 2, "Passing data with 2 products generates code corresponding to 2 products and appends it to the specified destination." );
    });

    QUnit.test( "View: Category list", function(assert) {
      var fixture = $("#qunit-fixture");
      var categories = [{name: "Category 1", productCount: 123}, {name: "Category 2", productCount: 34}]
      View.generateCategoriesHTML(categories, fixture);
      assert.equal($("li",fixture).length, 3, "Passing data with 2 categories generates code corresponding to 2 categories (+ 'All products') and appends it to the specified destination." );
    });

    QUnit.test( "View: Product info", function(assert) {
      var fixture = $("#qunit-fixture");
      var product = {sku: '1234', name: "Product", shortDescription: "Description product", thumbnailImage: "https://multimedia.bbycastatic.ca/multimedia/products/55x55/104/10406/10406357.jpg"};
      View.generateProductInfo(product, fixture);
      assert.equal($("#modal-1234",fixture).length, 1, "Passing a product generates div with a specific ID (that contains the product's SKU) and appends it to the specified destination." );
    });


  }

);
