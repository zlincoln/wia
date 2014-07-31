var $msnryContainer = $('#masonry-target'),
		$mapContainer = $('#map');

Modernizr.load([
	{
		test: Modernizr.video,
		nope: 'bower_components/html5media/dist/api/1.1.8/html5media.min.js'
	},
	{
		test: Modernizr.canvas,
		nope: 'bower_components/kineticjs/kinetic.min.js'
	}
]);

if($msnryContainer.length > 0){
	var msnry = new Masonry($msnryContainer[0], {
		isInitLayout: false
	});
	msnry.on('layoutComplete', function(){
		$msnryContainer.find('.image-wrapper').animate({opacity: '1'});
	});
	imagesLoaded($msnryContainer, function(){
		msnry.layout();
	});
}

$(function(){
	if($mapContainer.length > 0){
		$mapContainer.find('.map-node').on('click', function(){
			var $target = $(this).find('.info-box');
			if($target.css('display') != 'block'){
				$(this).siblings().find('.info-box').fadeOut();
				$target.fadeIn();
			}else{
				$target.fadeOut();
			}
		});
	}
})