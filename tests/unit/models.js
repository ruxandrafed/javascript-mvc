requirejs.config({
  paths: {
    'Product': 'Models/Product',
    'Category': 'Models/Category'
  }
});

require(["Product", "Category"],

  function(Product, Category) {

    QUnit.test( "Models: Product", function( assert ) {
      var product = new Product( { name: 'Product name', size: 25 });
      assert.equal(typeof(product), "object", "Products are objects." );
      assert.equal(product.name, "Product name", "Products have correct values for the properties we want to store (e.g. name)" );
      assert.equal(product.size, undefined, "Not all product properties retrieved from the API are passed to the obje ct created (e.g. size)." );
    });

    QUnit.test( "Models: Category", function( assert ) {
      var category = new Category( { name: 'Category name', size: 25 });
      assert.equal(typeof(category), "object", "Categoriess are objects." );
      assert.equal(category.name, "Category name", "Categories have correct values for properties we want to store (e.g. name)" );
      assert.equal(category.size, 25, "All category properties retrieved from the API are passed to the object created." );
    });

  }

);
