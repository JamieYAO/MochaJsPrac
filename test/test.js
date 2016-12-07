var assert = require("assert"); // node.js core module
var request = require('request');
//var C = require('../cash.js'); // our module
var fetchImageJpegOrPngAsync = require('../AsynchronousTestingTask.js');

var testImageUrl = 'http://tse3.mm.bing.net/th?id=OIP.M4dd2b74dcee43cfa9e8172f4343ce508o0&w=139&h=143&c=7&rs=1&qlt=90&o=4&pid=1.1';
const testImageUrl2 = 'http://google.com/doodle.png';
var testOutput = 'image/jpeg';

/*
describe('asynchronous testing task', function(){
  describe('Request image', function(){
		it('shuld response image/jepg', function(done) {
			request
  			.get(testImageUrl)
  			.on('response', function(response) {
					assert.equal(testOutput, response.headers['content-type']);
					done()
  			})
				.on('err', function(err) {
					assert.throws(err, Error);
					console.log(err);
					done()
				})
		})
  })
});  
*/
describe('asynchronous testing task', function(){
  describe('Request image', function(){
		it('should complete this test', function (done) {
			assert.equal(testOutput, fetchImageJpegOrPngAsync(testImageUrl));
			done();
		})
  })
});  
