requirejs.config({
  paths: {
    'helpers': 'Helpers/helpers'
  }
});

require(["helpers"],

  function(Helpers) {

    QUnit.test( "Helpers: Map properties", function(assert) {

      var fromObject = {color: "blue", size: 25, price: "$12"}
      var toObject = {};
      var propsToKeep = ["color", "size"];

      Helpers.mapProperties(fromObject, toObject);
      assert.equal(toObject.price, "$12", "All properties are copied from one object to another when no array of filters is passed." );

      var toObject = {};
      Helpers.mapProperties(fromObject, toObject, propsToKeep);
      assert.equal(toObject.price, undefined, "Properties not found in the array of filters are not copied to the destination object." );

    });

  }

);
