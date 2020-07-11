$(function(){
  //фильтрация продуктов по категориям
  if ($('.products__block').length) {
    var mixer = mixitup('.products__block');
  }

	//звёздный рейтинг
	$('.item__author-stars').rateYo({
		rating: 5,
    starWidth: '12px',
    normalFill: '#A0A0A0',
    ratedFill: '#ffa726',
    readOnly: true
  });

  //слайдер в секции популярных товаров
  $('.trend__slider').slick({
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	dots: true,
  	arrows: false
  });

  //range-шкала цен на странице каталога товаров
  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 1200,
    from: 0,
    to: 600,
    prefix: "$"
  });

  //переключение отображения товаров в каталоге (плитка или список)
  $('.products-page__display-button').on('click', function(){
    $('.products-page__display-button').removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('icon-th-list')) {
      $('.products-page__catalog').addClass('list');
    } else {
      $('.products-page__catalog').removeClass('list');
    }    
  });

  //увеличение счётчиков количества комментов и лайков
  $('.item__popularity-icon').on('click', function(){
    const counter = $(this).next('.item__popularity-count').children('span').text();
    $(this).next('.item__popularity-count').children('span').text(+counter + 1);
  });
  
});