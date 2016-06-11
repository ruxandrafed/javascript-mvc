define("helpers", function(){

  function mapProperties(fromObject, toObject, propsToKeep = null){
    if (propsToKeep) {
      for (var key in fromObject) {
         if (fromObject.hasOwnProperty(key) && propsToKeep.indexOf(key) !== -1) {
            toObject[key] = fromObject[key];
         }
      }
    } else {
      for (var key in fromObject) {
         if (fromObject.hasOwnProperty(key)) {
            toObject[key] = fromObject[key];
         }
      }
    }
  }

  return {
    mapProperties: mapProperties
  }

});
