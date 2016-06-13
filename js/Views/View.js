define("View", ["jquery", "Templates"], function($, Templates){

  function generateProductsHTML(data, location) {
    location.empty();
    location.append (Templates.productListTemplate(data));
  }

  function generateCategoriesHTML(data, location) {
    location.append(Templates.categoryListTemplate(data));
  }

  function generateProductInfo(data, location) {
    location.append(Templates.productTemplate(data));
    setTimeout(100); // enough time to build high res image path & fetch it
    $("#modal-" + data.sku).openModal();
  }

  return {
    generateProductsHTML: generateProductsHTML,
    generateCategoriesHTML: generateCategoriesHTML,
    generateProductInfo: generateProductInfo
  };

});
