requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min',
    'hammerjs': 'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min',
    "Handlebars": 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min',
    'helpers': 'Helpers/helpers',
    'Api': 'Api',
    'Controller': 'Controllers/Controller',
    'Product': 'Models/Product',
    'Category': 'Models/Category',
    'View': 'Views/View',
    'Templates': 'Templates/Templates'
  },
  "shim": {
    "materialize": ["jquery", "hammerjs"],
    "Controller": ["Api"]
  }
});

require(["jquery", "materialize", "Handlebars", "Api", "Router", "Controller", "Product", "Category", "View", "Templates"],

  function($, materialize, Handlebars, Api, Router, Controller, Product, Category, View, Templates) {

    Router.startRouting();

  }

);
