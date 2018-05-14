var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
}

function getAndPrintHTMLChunks() {
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log('chunk ')
      console.log('Chunk Received:', data);
    })

  });
}
getAndPrintHTMLChunks();
