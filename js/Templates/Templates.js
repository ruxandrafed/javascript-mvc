define("Templates", ["jquery", "Handlebars"], function($, Handlebars){

  PRODUCTLIST = [
    '{{#each this}}',
      '<li data-index="{{sku}}">',
        '<div class="col l3 m6 s12">',
          '<a href="#product--{{sku}}--{{uri name}}">',
            '<div class="card modal-trigger-{{sku}}" data-target="modal-{{sku}}">',
              '<div class="card-content">',
                '<img src="{{thumbnailImage}}">',
                '<span class="card-title">{{name}}</span>',
              '</div>',
              '<div class="card-action">',
                '<div class="price">',
                  '{{#if isOnSale }}',
                    '<strike>${{regularPrice}}</strike> <span style="color:red">${{ salePrice }}</span>',
                  '{{else}}',
                    '${{regularPrice}}',
                  '{{/if}}',
                '</div>',
                '<button class="btn btn-flat indigo darken-4 waves-effect waves-light white-text modal-trigger-{{sku}}" data-target="modal-{{sku}}">Details</button>',
              '</div>',
            '</div>',
          '</a>',
      '</li>',
    '{{/each}}'
  ].join("\n");

  CATEGORYLIST = [
    '<li class="category-filter"><a href="#">All products</a></li>',
    '{{#each this}}',
    '<li class="category-filter" data-index="{{id}}"><a href="#category--{{id}}--{{uri name}}">{{name}} ({{productCount}})</a></li>',
    '{{/each}}'
  ].join("\n");

  PRODUCT = [
    '<div id="modal-{{sku}}" class="modal modal-fixed-footer">',
      '<div class="modal-content">',
        '<h4>{{name}}</h4>',
          '<img src="{{fetchHighResImage thumbnailImage}}">',
        '<p>{{shortDescription}}</p>',
        '<p>SKU: {{sku}}</p>',
        '<h5>Price:',
          '{{#if isOnSale }}',
            '<strike>${{regularPrice}}</strike> <span style="color:red">${{ salePrice }}</span>',
          '{{else}}',
            '${{regularPrice}}',
          '{{/if}}',
        '</h5>',
      '</div>',
      '<div class="modal-footer">',
        '<a href="#" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>',
      '</div>',
    '</div>'
  ].join("\n");

  var productListTemplate = Handlebars.compile(PRODUCTLIST);
  var categoryListTemplate = Handlebars.compile(CATEGORYLIST);
  var productTemplate = Handlebars.compile(PRODUCT);

  // Builds category string URLs
  Handlebars.registerHelper('uri', function(string) {
    string = string.replace(/[&,\/"'()]/g, '').replace(/\s+/g, '-').toLowerCase();
    return string;
  });

  // Gets the path for a higher resolution image as product details only returns thumbnail
  Handlebars.registerHelper('fetchHighResImage', function(thumbnailImagePath) {
    thumbnailImagePath = thumbnailImagePath.replace(/55x55/g, '300x300');
    return thumbnailImagePath;
  });

  return {
    productListTemplate: productListTemplate,
    categoryListTemplate: categoryListTemplate,
    productTemplate: productTemplate
  };

});
