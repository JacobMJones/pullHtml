var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

//var myHtml = httpHelper.getHtml(requestOptions));

getHTML(requestOptions, printLowerCase);


function printLowerCase(html) {
   console.log(html.toLowerCase());
}