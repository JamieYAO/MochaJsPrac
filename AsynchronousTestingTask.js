const request = require('request');

const testImageUrl = 'http://tse3.mm.bing.net/th?id=OIP.M4dd2b74dcee43cfa9e8172f4343ce508o0&w=139&h=143&c=7&rs=1&qlt=90&o=4&pid=1.1';
const testImageUrl2 = 'http://google.com/doodle.png';

function fetchImageJpegOrPngAsync(imageUrl) {
	request
  	.get(imageUrl)
  	.on('response', function(response) {
    	console.log(response.statusCode); // 200
    	console.log(response.headers['content-type']); // 'image/png/jpeg'
			return response.headers['content-type'];
  	})
		.on('error', function(err) {
			console.log(err);
		})
}

fetchImageJpegOrPngAsync(testImageUrl2);


module.exports = fetchImageJpegOrPngAsync;
