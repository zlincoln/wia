var token = {
	public: 'bqDwlbsTwtTegZcIlTlyz6XPnEYir2MvU3ezLZAqDzBuPHQyU3',
	secret: 'hQ8V4cS9nrFf83eXCaPkJq1h5s59MaiNX3Ta643Bo2u5ykrtPu'
}

var request_data = {
	url: 'http://api.tumblr.com/v2/blog/willmstevenson.com/posts/?api_key='+token.public+'&jsonp=',
	method: 'GET'
}

$.ajax({
	url: request_data.url,
	method: request_data.method,
	dataType: 'jsonp',
	success: function(data){
		console.log(data);
		$.each(data.response.posts, function(index, post){
			var clone = $('#templates .post-template').clone(true),
					target = $('#post-target');
			console.log(post);
			clone.find('img').attr('src', post.photos[0].alt_sizes[1].url);
			target.append(clone);
		});
	}
});