requirejs.config({
  paths: {
    'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    'materialize': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min'
  },
  "shim": {
    "materialize": ["jquery"]
  }
});

require(["jquery", "materialize"],

  function($) {
    $(document).ready(function(){

      // modals initialization
      for (ii=1; ii<=24; ii++) {
        $('.modal-trigger-' + ii).leanModal();
      }

    });
  }

);
