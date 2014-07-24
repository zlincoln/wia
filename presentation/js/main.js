var token = {
	public: 'bqDwlbsTwtTegZcIlTlyz6XPnEYir2MvU3ezLZAqDzBuPHQyU3',
	secret: 'hQ8V4cS9nrFf83eXCaPkJq1h5s59MaiNX3Ta643Bo2u5ykrtPu'
}

var callback = '';

var request_data = {
	url: 'http://api.tumblr.com/v2/blog/willmstevenson.com/posts/?offset=',
	method: 'GET',
	data: {
		api_key: token.public,
		limit: 10,
		offset: 0,
		jsonp: callback
	}
}

var makeRequest = function(){
	$.ajax({
		url: request_data.url,
		method: request_data.method,
		dataType: 'jsonp',
		data: request_data.data,
		success: function(data){
			var $target = $('#post-target');
			$.each(data.response.posts, function(index, post){
				var $clone = $('#templates .post-template').clone(true);
				$clone.find('img').attr('src', post.photos[0].alt_sizes[1].url);
				$target.append($clone);
				request_data.data.offset++;
			});
			imagesLoaded($target, function(){
				msnry = new Masonry($target[0]);
			});
		}
	});
}

$(function(){
	makeRequest();
	$('#request-more').on('click', makeRequest);
});