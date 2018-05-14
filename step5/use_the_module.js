var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

//var myHtml = httpHelper.getHtml(requestOptions));

getHTML(requestOptions, printHTML);


function printHTML(html) {
  console.log(html);
}