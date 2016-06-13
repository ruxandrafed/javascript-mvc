requirejs.config({
  paths: {
    'Templates': 'Templates/Templates'
  }
});

require(["Templates", "Product", "Category"],

  function(Templates, Product, Category) {

    QUnit.test( "Templates: Product list", function(assert) {

      var product1 = new Product({name: "Product 1", shortDescription: "Description product 1"});
      var product2 = new Product({name: "Product 2", shortDescription: "Description product 2"});
      var products = [product1, product2];

      var productListTemplate = Templates.productListTemplate(products);
      assert.equal(typeof(productListTemplate), "string", "The product list template is a string." );
      assert.notEqual(productListTemplate.indexOf("card-content"), -1, 'The product list template string returns contains expected elements such as "<div class="card-content">".' );

    });

    QUnit.test( "Templates: Category list", function(assert) {

      var category1 = new Category({name: "Category 1", productCount: 123});
      var category2 = new Category({name: "Category 2", productCount: 34});
      var categories = [category1, category2];

      var categoryListTemplate = Templates.categoryListTemplate(categories);
      assert.equal(typeof(categoryListTemplate), "string", "The category list template is a string." );
      assert.notEqual(categoryListTemplate.indexOf("category-filter"), -1, 'The category list template string returns contains expected elements such as "<li class="category-filter">".' );

    });

    QUnit.test( "Templates: Product modal", function(assert) {

      var product = new Product({name: "Product", shortDescription: "Description product", thumbnailImage: "https://multimedia.bbycastatic.ca/multimedia/products/55x55/104/10406/10406357.jpg"});
      var productTemplate = Templates.productTemplate(product);
      assert.equal(typeof(productTemplate), "string", "The product template is a string." );
      assert.notEqual(productTemplate.indexOf("modal-content"), -1, 'The product template string returns contains expected elements such as "<div class="modal-content">".' );

    });

  }

);
