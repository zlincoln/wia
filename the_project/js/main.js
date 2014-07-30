var $msnryContainer = $('#masonry-target');

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