$(document).ready(function(){
	"use strict";
	flexslider();
	toggle_menu();
	// sticky();
	init();
	$('.system__tabs ul li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('.system__tabs ul li').removeClass('current');
		$('.system__item').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})

	var system__technical_list = $('.system__technical-list');
	if (system__technical_list.length > 0) {
		system__technical_list.find('.system__technical').each(function () {
			var answer__btn = $(this).find('.answer__btn');
			var answer__detail = $(this).find('.answer__detail');
			answer__btn.click(function () {
				answer__detail.slideToggle("slow");
			})
		})
	}
	var training__close = $('.training__close');
	training__close.click(function () {
		$(this).parents('.training__inner').fadeOut();
		//console.log('aa');
	})
});
function flexslider() {
	$('.flexslider').flexslider({
		animation: "fade",
	    controlNav: false,
	    slideshowSpeed: 3000,
	    animationSpeed: 1200,
	    smoothHeight: true,
	})
}
function toggle_menu() {
	var link_panel = $('.link-panel');
	link_panel.click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('#main-menu').toggleClass('active');
	})
}
function init(){
// Product Slider
	var $product_slider = $('.product-home .product-home__inner')
	var product_slider_settings = {
		autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		speed: 600,
		rows: 0,
		responsive: [
			{
				breakpoint: 99999,
				settings: "unslick"
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]          
	};
	$product_slider.slick(product_slider_settings);
	$(window).on('resize', function() {
		if (!$product_slider.hasClass('slick-initialized')) {
			return $product_slider.slick(product_slider_settings);
		}
	});
}
$(window).on('load', function(){
	var header = $('.header__main');
	if(header.length > 0) {
		var c, currentScrollTop = 0;
		var header_height = header.height();
		//console.log(header_height);
		var offset = header.offset().top;
		var inject_space = $('<div />', {
			height: header_height
		}).insertAfter(header).show();
		header.css({
			'height': header_height
		})
		$(window).scroll(function() {
			var a = $(window).scrollTop();
			currentScrollTop = a;
			if (c < currentScrollTop && currentScrollTop > offset) {
				header.addClass('isSticky');
			} else {
				header.removeClass('isSticky');
			}
			c = currentScrollTop;
			if (currentScrollTop > offset) {
				header.addClass('isScroll');
			} else {
				header.removeClass('isScroll');
			}
		})
	}
	var product__photo = $('.product__photo-caption .product__photo');
	var photo_height = product__photo.find('figure').height();
	$('.product__photo-list').find('ul').css({
		height: photo_height
	});
})
