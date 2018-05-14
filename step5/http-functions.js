var https = require('https');

module.exports = function getHTML(options, callback){
  var bufferedStrings = '';
  https.get(options, function(response) {

    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log('chunk');
      bufferedStrings += data;
    });
    
    response.on('error', function(error) {
      bufferedStrings += error;
    });

    response.on('end', function(end) {
      console.log('in end');
      bufferedStrings += end;
      callback(bufferedStrings);
      
    });
  });
  
}