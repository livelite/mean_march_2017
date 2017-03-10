// fs module allows us to read and write content for responses!!
var fs = require('fs');

module.exports = function(request, response) {
	fs.readFile('.' + request.url, function (errors, contents){
		if (errors) {
			response.end('404 not found');
		} else {
			var fileType
			var extention
			if (request.url.endsWith('css')) {
				fileType = 'text'; extention = 'css'
			}
			else if (request.url.endsWith('jpg')) {
				fileType = 'image'; extention = 'jpeg'
			}
			else if (request.url.endsWith('png')) {
				fileType = 'image'; extention = 'png'
			}
			else if (request.url.endsWith('js')) {
				fileType = 'text'; extention = 'js'
			}
			else {
				fileType = 'text'; extention = 'html'
			}
			response.writeHead(200, {'Content-Type': fileType + '/' + extention});
			response.write(contents); 
			response.end();
		}
	});
}