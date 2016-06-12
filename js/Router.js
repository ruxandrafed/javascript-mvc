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
      if (window.location.hash.split("#")[1]) {
        var urlInfo = window.location.hash.split("#")[1].split("--");
        var urlType = urlInfo[0];
        var urlId = urlInfo[1];
        loadController(urlType, urlId);
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
