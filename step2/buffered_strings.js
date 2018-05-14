var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

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
    response.on('finish', function(finish) {
      bufferedStrings += finish;
    });
  });
  
}
getAndPrintHTMLChunks();
