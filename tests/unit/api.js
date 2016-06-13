requirejs.config({
  paths: {
    'Api': 'Api'
  }
});

require(["Api"],

  function(Api) {
    QUnit.test( "Api: getCategories", function(assert) {
      var done = assert.async();

      Api.getCategories(function(data) {
        assert.ok(true, "Api.getCategories enters the passed callback when done." );
        assert.equal(typeof(data), "object", "Api.getCategories returns an object.");
        assert.ok(data.subCategories, "The object returned by Api.getCategories has a 'subCategories' key.");
        done();
      });

    });

    QUnit.test( "Api: getAllProducts", function(assert) {
      var done = assert.async();

      Api.getAllProducts(function(data) {
        assert.ok(true, "Api.getAllProducts enters the passed callback when done." );
        assert.equal(typeof(data), "object", "Api.getAllProducts returns an object.");
        assert.ok(data.products, "The object returned by Api.getAllProducts has a 'products' key.");
        done();
      });

    });

    QUnit.test( "Api: getAllProductsForCategory", function(assert) {
      var done = assert.async();

      Api.getAllProductsForCategory('20001',function(data) {
        assert.ok(true, "Api.getAllProductsForCategory enters the passed callback when done." );
        assert.equal(typeof(data), "object", "Api.getAllProductsForCategory returns an object.");
        assert.ok(data.products, "The object returned by Api.getAllProductsForCategory has a 'products' key.");
        done();
      });

    });

    QUnit.test( "Api: getProductInfo", function(assert) {
      var done = assert.async();

      Api.getProductInfo('10394203',function(data) {
        assert.ok(true, "Api.getProductInfo enters the passed callback when done." );
        assert.equal(typeof(data), "object", "Api.getProductInfo returns an object.");
        assert.ok(data.name, "The object returned by Api.getProductInfo has a 'name' key.");
        done();
      });

    });

  }
);
