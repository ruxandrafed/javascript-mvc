requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min'
  },
  "shim": {
    "materialize": ["jquery"]
  }
});

require(["jquery", "materialize", "api"],

  function($, materialize, api) {

    api.getCategories(
      function(data) { console.log(data); }
    );

    api.getAllProducts(
      function(data) { console.log(data); }
    );

    api.getAllProductsForCategory('20001',
      function(data) { console.log(data); }
    );

    api.getProductInfo('10419361',
      function(data) { console.log(data); }
    );

    $(document).ready(function(){
      // modals initialization
      for (ii=1; ii<=24; ii++) {
        $('.modal-trigger-' + ii).leanModal();
      }
    });

  }

);
