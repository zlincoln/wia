var $msnryContainer = $('#masonry-target'),
		$mapContainer = $('#map');

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
			$(this).siblings().removeClass('open');
			$(this).toggleClass('open');
		});
	}
})