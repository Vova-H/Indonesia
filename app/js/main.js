'use strict';

(function ($) {
	$(document).ready(function () {
		// Code

		//slick slider start --------------------------------------
		//slider tour
		$('.slider__wrap--tour').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-t"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-t"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider__arrows--tour'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});
		function setProgress(index) {
			const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
			$progressBar
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $slider = $('.slider__wrap--tour');
		const $progressBar = $('.slider__line--tour');
		$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgress(nextSlide);
		});
		setProgress(0);
		//slider places

		$('.slider__wrap--places').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-p"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-p"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider__arrows--places'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});

		
		function setProgress2(index) {
			const calc = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;
			$progressBar2
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $slider2 = $('.slider__wrap--places');
		const $progressBar2 = $('.slider__line--places');
		$slider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgress2(nextSlide);
		});
		setProgress2(0);

		//rew
		$('.slider-r__wrap').slick({
			dots: false, // включение точек
			arrows: true, // включение стрелок
			prevArrow: '<div class="slider-prev-r"><i class="icon-slider-arrow-l"></i></div>', //custom arrow
			nextArrow: '<div class="slider-next-r"><i class="icon-slider-arrow-r"></i></div>', // custom arrow
			appendArrows: $('.slider-r__arrows'), //стрелки в другом месте разместить
			slidesToShow: 1, //сколько показывать слайдов
			slidesToScroll: 1, // по сколько елементов скролить
			swipe: false, // отключает включает свап
			centerMode: false,
			variableWidth: true,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: true,
						swipe: true,
						arrows: false, // включение стрелок
					}
				}]
		});
		function setProgressR(index) {
			const calc = ((index + 1) / ($sliderR.slick('getSlick').slideCount)) * 100;
			$progressBarR
				.css('background-size', `${calc}% 100%`)
				.attr('aria-valuenow', calc);

		}
		const $sliderR = $('.slider-r__wrap');
		const $progressBarR = $('.slider-r__line');
		$sliderR.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			setProgressR(nextSlide);
		});
		setProgressR(0);
		//slick slider end ----------------------------------------

		//scroll animation start-----------------------------------

		AOS.init();

		//scroll animation end ------------------------------------

		// Fancybox	start -----------------------------------------

		$('.gallery__photo').fancybox({
			buttons: [ //настройки кнопок 
				"fullScreen",
				"download",
				"thumbs",
				"close",
				"slideShow",
			],
			animationEffect: 'zoom-in-out', //вид анимации
			animationDuration: 800, //задержки
			transitionEffect: 'tube', //когда нажимаешь на стрелочку в галерее ефект тюба
			transitionDuration: 800, //задержка
			loop: true, //повторение
			infobar: true,
			slideShow: {
				autoStart: false,
				speed: 3000
			},

		});

		// Fancybox	end -------------------------------------------

	});
})(jQuery);
