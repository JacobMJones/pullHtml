var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


function getAndPrintHTMLChunks(host, path) {
  

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
      console.log(bufferedStrings);
    });
  });
}


getAndPrintHTMLChunks(requestOptions.host, requestOptions.path);