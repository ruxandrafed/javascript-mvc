define("api", ["jquery"], function($) {

  function getCategories(successCallback) {
    return _getData({
      apiURL: "http://www.bestbuy.ca/api/v2/json/category/Departments",
      successCallback: successCallback
    });
  }

  function getAllProducts(successCallback) {
    return _getData({
      apiURL: "http://www.bestbuy.ca/api/v2/json/search?categoryid=departments",
      successCallback: successCallback
    });
  }

  function getAllProductsForCategory(categoryId, successCallback) {
    return _getData({
      apiURL: "http://www.bestbuy.ca/api/v2/json/search?categoryid=" + categoryId,
      successCallback: successCallback
    });
  }

  function getProductInfo(productSKU, successCallback) {
    return _getData({
      apiURL: "http://www.bestbuy.ca/api/v2/json/product/" + productSKU,
      successCallback: successCallback
    });
  }

  function _getData(options) {
    $.ajax({
      url: options.apiURL,
      dataType: options.format || "jsonp",
      method: options.method || "GET",
      success: options.successCallback,
      error: options.errorCallback || function() { console.error("Got error when calling " + options.apiURL) }
    });
  }

  return {
    getCategories: getCategories,
    getAllProducts: getAllProducts,
    getAllProductsForCategory: getAllProductsForCategory,
    getProductInfo: getProductInfo
  }

});
