// // var casper = require('casper').create();
var fs = require('fs');
var filePath = 'file:///' + fs.workingDirectory + '/index.html';

casper.test.begin('Page title', 2, function suite(test) {
  casper.start(filePath, function() {
    test.assertExists('title');
    test.assertSelectorHasText('title', 'Best Buy MVC');
  }).run(function() {
    test.done();
  });
});

casper.test.begin('Category list', 1, function suite(test) {
  casper.start(filePath, function() {
    this.waitForPageLoaded(function() {
      test.assertExists('.category-filter');
    });
  }).run(function() {
    test.done();
  });
});

// this.wait(5000, function() {
//   console.log(this.getHTML());
// });
