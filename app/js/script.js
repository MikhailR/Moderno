$(function(){
  //клик по бургеру и открытие\закрытие меню
  $('.header__burger').on('click', function(){
    $(this).toggleClass('header__burger--active');
    $('.header__menu').toggleClass('header__menu--active');
    if($(this).hasClass('header__burger--active')) {     
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
    }
  });
  //закрытие меню по клику на пункт меню
  $('.header__menu a').on('click', function(){
    $('.header__burger').removeClass('header__burger--active');
    $('.header__menu').removeClass('header__menu--active');
    $('body').css('overflow', 'auto');
  });

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

  //переключение табов на странице товара (продукта)
  $('.product__content-trigger').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('data-tab');
    $('.product__content-trigger').removeClass('product__content-trigger--active');
    $('.product__content-tab').removeClass('product__content-tab--active');
    $(this).addClass('product__content-trigger--active');
    $('#' + id).addClass('product__content-tab--active').fadeIn(300);
  });

  //открытие\закрытие модального окна
  $('.header__button--login').on('click', function(){
    $('#modal').fadeIn(300);
    $('body').css('overflow', 'hidden');
  });

  $('#modal-close, #modal-layer').on('click', function(){
    $('#modal').fadeOut(300);
    $('body').css('overflow', 'auto');
  });

  $('#modal-form').on('submit', function(){
    $('#modal').fadeOut(300);
    $('body').css('overflow', 'auto');
  });

  //переключение табов на странице персональных данных пользователя
  $('.settings__trigger').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('data-tab');
    $('.settings__trigger').removeClass('settings__trigger--active');
    $('.settings__tab').removeClass('settings__tab--active');
    $(this).addClass('settings__trigger--active');
    $('#' + id).addClass('settings__tab--active').fadeIn(300);
  });

  //переключение табов на странице профиля автора продуктов
  $('.profile__trigger').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('data-tab');
    $('.profile__trigger').removeClass('profile__trigger--active');
    $('.profile__tab').removeClass('profile__tab--active');
    $(this).addClass('profile__trigger--active');
    $('#' + id).addClass('profile__tab--active').fadeIn(300);
  });
  
  //кастомизация элементов форм
  $('input[type="file"], select').styler();
});