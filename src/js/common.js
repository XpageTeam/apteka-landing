import $ from "jquery";

window.jQuery = $
window.$ = $
// window.is = is

require("./jquery.fancybox.js");

document.addEventListener("DOMContentLoaded", function(){
	$(".fancybox").fancybox({
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "close", "thumbs"],
		image: {
			preload: true,
		},
		transitionEffect: "slide",
	});
});


document.addEventListener("DOMContentLoaded", function(){
	

	const mainSlider = document.querySelector('.main-slider .swiper-list');
	
	if (!mainSlider)
		return


	import("swiper/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, EffectFade, Pagination, Lazy, Autoplay} = Module;

		Swiper.use([Navigation, EffectFade, Pagination, Lazy, Autoplay]);

		
		var slider = new Swiper(mainSlider, {
			effect: "fade",
			preloadImages: false,
			autoplay: true,
		    lazy: {
				loadPrevNext: true,
			},
			fadeEffect: {
			    crossFade: true
			},
			loop: false,
			navigation: {
		        nextEl: '.main-slider .swiper-button-next',
		        prevEl: '.main-slider .swiper-button-prev',
		    },
		    pagination: {
		        el: '.main-slider .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})


document.addEventListener("DOMContentLoaded", function(){
	

	const gallerySlider = document.querySelector('.gallery .swiper-list');
	
	if (!gallerySlider)
		return


	import("swiper/js/swiper.esm.js").then(function(Module){	

		const {Swiper, Navigation, Pagination, Lazy, Autoplay} = Module;

		Swiper.use([Navigation, Pagination, Lazy, Autoplay]);

		
		var slider = new Swiper(gallerySlider, {
			preloadImages: false,
			slidesPerView: 2,
			spaceBetween: 100,
			autoplay: true,
		    lazy: {
				loadPrevNext: true,
			},
			loop: false,
			navigation: {
		        nextEl: '.gallery .swiper-button-next',
		        prevEl: '.gallery .swiper-button-prev',
		    },
		    pagination: {
		        el: '.gallery .swiper-pagination',
		        type: 'bullets',
		        clickable: true,
		    },
		});

	})
})