var http = require('http');
var qs = require('qs');

function paste(message) {
	var postData = qs.stringify({
		api_dev_key : '8af4ed4ee8f32e932744b1e66f08ed97',
		api_option : 'paste',
		api_paste_code : message,
		api_paste_format : 'json',
		api_paste_private : 1
	});

	var postOptions = {
		hostname : 'pastebin.com',
		port : 80,
		path : '/api/api_post.php',
		method : 'POST',
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded',
		}
	};

	var postReq = http.request(postOptions, function(res) {
		// we don't really need to do anything here
		return;
	});

	postReq.end(postData);
}

module.exports = paste;
