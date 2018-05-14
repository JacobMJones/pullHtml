var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


function getHtml(options, callback) {

  var bufferedStrings = '';
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log('chunk');
      bufferedStrings += data;
    });

    response.on('error', function(error) {
      bufferedStrings += error;
    });

    response.on('end', function(end) {
      bufferedStrings += end;
      callback(bufferedStrings);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

getHtml(requestOptions, printHTML);