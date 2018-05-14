var https = require('https');


function getAndPrintHTMLChunks(){
	var requestOptions = {
		host: 'sytantris.github.io'.
		path: '/http-examples/step1.html'
	}
}

https.get(getAndPrintHTMLChunks.requestOptions, function (response){
	response.setEncoding('utf8');
}