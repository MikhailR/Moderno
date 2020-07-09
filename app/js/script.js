$(function(){
	//фильтрация продуктов по категориям
	var mixer = mixitup('.products__block');

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
});