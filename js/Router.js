define("Router", ["Controller"], function(Controller){

  var defaultRoute = '';
  var currentHash = '';

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    loadController("init");
    setInterval(hashCheck, 100);
  }

  function hashCheck(){
    if (window.location.hash != currentHash){
      if (window.location.hash.split("#")[1]) { // if a product or category url
        var urlInfo = window.location.hash.split("#")[1].split("--");
        loadController(urlInfo[0], urlInfo[1]);
      }
      currentHash = window.location.hash;
    }
  }

  function loadController(urlType, urlId){
    switch (urlType) {
      case "category":
        Controller.filterProducts(urlId);
        break;
      case "product":
        Controller.viewProduct(urlId);
        break;
      default:
        Controller.init();
    }
  }

  return {
    startRouting:startRouting
  };
});
