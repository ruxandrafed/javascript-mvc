define("Router", ["Controller"], function(Controller){

  var defaultRoute = '';
  var currentHash = '';

  function startRouting(){
    window.location.hash = window.location.hash || defaultRoute;
    _loadController("init");
    setInterval(_hashCheck, 100);
  }

  function _hashCheck(){
    if (window.location.hash != currentHash){
      if (window.location.hash.split("#")[1]) { // if a product or category url
        var urlInfo = window.location.hash.split("#")[1].split("--");
        _loadController(urlInfo[0], urlInfo[1]);
      } else {
        _loadController("init");
      }
      currentHash = window.location.hash;
    }
  }

  function _loadController(urlType, urlId=null){
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
