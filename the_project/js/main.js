var $msnryContainer = $('#masonry-target'),
		$mapContainer = $('#map');

Modernizr.load({
	test: Modernizr.video,
	nope: 'bower_components/html5media/dist/api/1.1.8/html5media.min.js'
});

if($msnryContainer.length > 0){
	var msnry = new Masonry($msnryContainer[0], {
		isInitLayout: false
	});
	msnry.on('layoutComplete', function(){
		$msnryContainer.find('.image-wrapper').addClass('loaded');
	});
	imagesLoaded($msnryContainer, function(){
		msnry.layout();
	});
}

$(function(){
	if($mapContainer.length > 0){
		$mapContainer.find('.map-node').on('click', function(){
			$(this).siblings().find('.info-box').fadeOut();
			$(this).find('.info-box').fadeIn();
		});
	}
})