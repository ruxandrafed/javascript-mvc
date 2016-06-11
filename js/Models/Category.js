define("Category", ["helpers"], function(helpers){

  function Category(categoryDetails){
    helpers.mapProperties(categoryDetails, this);
  }

  return Category;
});
