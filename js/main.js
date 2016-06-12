requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min',
    "Handlebars": 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min',
    'helpers': 'Helpers/helpers',
    'Controller': 'Controllers/Controller',
    'Product': 'Models/Product',
    'Category': 'Models/Category',
    'View': 'Views/View'
  },
  "shim": {
    "materialize": ["jquery"],
    "Controller": ["api"]
  }
});

require(["jquery", "materialize", "Handlebars", "api", "Controller", "Product", "Category", "View"],

  function($, materialize, Handlebars, api, Controller, Product, Category, View) {

    Controller.init();

  }

);
