var token = {
	public: 'bqDwlbsTwtTegZcIlTlyz6XPnEYir2MvU3ezLZAqDzBuPHQyU3',
	secret: 'hQ8V4cS9nrFf83eXCaPkJq1h5s59MaiNX3Ta643Bo2u5ykrtPu'
}

var oauth = OAuth({
	consumer: token,
	signature_method: 'HMAC-SHA1'
});

var request_data = {
	url: 'http://api.tumblr.com/v2/blog/willmstevenson.com/posts/',
	method: 'GET'
}

$.ajax({
	url: request_data.url,
	method: request_data.method,
	success: function(data){
		console.log(data)
	}
});