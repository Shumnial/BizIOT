$(function () {

	$('.slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
      arrows: false
    }
  },
  {
  	breakpoint: 768,
  	settings: {
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots: false,
  		arrows: true
  	}
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }
  }]});

	function onEventInfoClick() {
		let index = $(this).index('.event__info');
		$('.popup').eq(index).arcticmodal();
	};

	function onSpeakerSubjectClick() {
		let id = $(this).attr('data-id');
		$(`.popup[data-id = ${id}]`).arcticmodal();
	}

	const headerCoords = $('.header__down').offset().top;
	function onScroll () {
		const target = $('.header__down');
		if ($(window).scrollTop() >= headerCoords) {
			target.css('position', 'fixed');
			target.css('top', '0');
		} else {
			target.css('position', 'static');
		}
	};

	$('.event__info').on('click', onEventInfoClick);
	$('.speaker__subject').on('click', onSpeakerSubjectClick);
	$(document).on('scroll', onScroll);
})