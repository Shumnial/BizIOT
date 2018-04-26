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
  	breakpoint: 600,
  	settings: {
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		arrows: false
  	}
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
    }
  }]});

	function onEventInfoClick() {
		let index = $(this).index('.event__subject');
		$('.popup').eq(index).show();
	};

	function onSpeakerSubjectClick() {
		let id = $(this).attr('data-id');
		$(`.popup[data-id = ${id}]`).show();
	}

	function popupClose () {
		$('.popup').hide();
	};

	function onEscPress (evt) {
		if (evt.keyCode === 27) {
			popupClose();
		}
	};

	function onOverlayClick (evt) {
		if ($(evt.target).hasClass('popup')) {
			popupClose();
		}
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

	function onEventHover() {

	};

	$('event__item').on('hover', onEventHover);
	$('.speaker__subject').on('click', onSpeakerSubjectClick);
	$('.event__subject').on('click', onEventInfoClick);
	$(document).on('click', '.popup__close', popupClose);
	$(document).on('click', '.popup', onOverlayClick);
	$(document).on('keydown', onEscPress);
	$(document).on('scroll', onScroll);
})