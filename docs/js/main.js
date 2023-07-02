$(function(){
      $('.banner-section__slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<img class="slider-arrows slider-arrow--left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrow--right" src="images/arrow-right.svg" alt="">'

      });
  
      // $('.product-slider').slick({
      //   dots: true,
      //    infinite: true,
      //      slidesToShow: 4,
      //      slidesToScroll: 1,
      
      //   prevArrow: '<img class="slider-arrows slider-arrow--left" src="images/arrow-black-left.svg" alt="">',
      //   nextArrow: '<img class="slider-arrows slider-arrow--right" src="images/arrow-black-right.svg" alt="">'

      // });

      $('.search__tabs-item').on('click', function(e){

        e.preventDefault();
        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');

      });
  
  

      $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tab-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tab-content--active');

      });

      // $('.tab product-card__tab').on('click', function (e) {

      //   e.preventDefault();
      //   $('.tab product-card__tab').removeClass('tab--active');
      //   $('.tab-content product-card__tab-content').removeClass('tabs-content--active');
      //   $(this).addClass('tab--active');
      //   $($(this).attr('href')).addClass('tabs-content--active');

      // });
  


      $('.filter-style').styler();
      
      $('.filter__item-drop').on('click', function () {
      $(this).toggleClass('filter__item-drop--active');
      $(this).next().slideToggle('200');


      });

         $(".js-range-slider").ionRangeSlider({
           type: "double",
           min: 100000,
           max: 500000,
           from: 200,
           to: 500
          //  grid: true
         });

       $("#rateYo").rateYo({
         ratedFill: "#1C62CD",
         normalFill: "#c4c4c4",
         spacing: "7px"
       });

          $('.menu__btn').on('click', function (e) {

           
            $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
           

          });

      

});

$(function(){
  $('.product-slider').slick({
        dots: true,
         infinite: true,
           slidesToShow: 4,
           slidesToScroll: 1,
      
        prevArrow: '<img class="slider-arrows slider-arrow--left" src="images/arrow-black-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrow--right" src="images/arrow-black-right.svg" alt="">'

      });
});