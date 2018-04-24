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

	let speakers = [
	{
		"title": "Бизнес-аналитика: IoT of Mobile / 45 минут",
		"subject": "Оперативная аналитика в реальном времени",
		"info": "Технология  представляет оперативную аналитику в реальном времени — возможность решать задачи подготовки аналитических отчетов на экземпляре, выполняющем работу класса OLTP. Это не только упрощает конфигурацию, но и позволяет обойтись без средств загрузки данных (ETL) и хранилища. В предлагаемой сессии мы рассмотрим новые возможности технологии и расскажем о внутренних механизмах реализации оперативной аналитики.",
		"img": "d-artemov.jpg",
		"name": "Дмитрий Артемов",
		"function": "Ведущий консультант российской практики Microsoft Consulting Services, Microsoft, Россия",
		"about": [
		{
			"info": "Ведущий консультант российской практики Microsoft Consulting Services. Специализируется на анализе и оптимизации производительности информационных систем на базе Microsoft SQL Server (с версии 6.0)."
		},
		{
			"info": "Автор трех книг на тему администрирования SQL Server и ряда журнальных публикаций в российских и зарубежных изданиях."
		},
		{
			"info": "Регулярно выступает на конференциях различного уровня."
		}]
	},
	{
		"title": "Lorem Ipsum",
		"subject": "Lorem Ipsum",
		"info": "Lorem Ipsum",
		"name": "Lorem Ipsum",
		"function": "Lorem Ipsum"
	}
];

	function onEventInfoClick() {
		$(this).find('.popup').show();
	};

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

	$('.event__info').on('click', onEventInfoClick);
	$(document).on('click', '.popup__close', popupClose);
	$(document).on('click', '.popup', onOverlayClick);
	$(document).on('keydown', onEscPress);
})