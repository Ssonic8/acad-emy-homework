let carousel=document.querySelector('.carousel'),carouselDots=document.querySelector('.carousel-dots'),formOpen=document.querySelector('.callback-button'),formClose=document.querySelector('.modal-close'),popupForm=document.querySelector('.modal-form'),input=popupForm.querySelector('input');if(carouselDots){var carouselButtons=Array.prototype.slice.call(carouselDots.querySelectorAll('.dot'))}
if(carousel){var carouselSlides=carousel.querySelectorAll('.carousel-slide');carouselButtons.forEach(function(button,i){button.addEventListener('click',function(){for(var j=0;j<carouselSlides.length;j++){carouselSlides[j].classList.remove('carousel-slide-active');carouselButtons[j].classList.remove('dot-active')};this.classList.add('dot-active');carouselSlides[i].classList.add('carousel-slide-active')})})};if(popupForm){formOpen.addEventListener('click',function(){event.preventDefault();popupForm.classList.toggle('visually-hidden');if(input){input.focus()}});formClose.addEventListener('click',function(){popupForm.classList.add('visually-hidden')})}


/*let carousel = document.querySelector('.carousel'),
    carouselDots = document.querySelector('.carousel-dots'),
    formOpen = document.querySelector('.callback-button'),
    formClose = document.querySelector('.modal-close'),
    popupForm = document.querySelector('.modal-form'),
    input = popupForm.querySelector('input');


if (carouselDots) {
  var carouselButtons = Array.prototype.slice.call(carouselDots.querySelectorAll('.dot'));
}
if (carousel) {
  var carouselSlides = carousel.querySelectorAll('.carousel-slide');

  carouselButtons.forEach(function (button, i) {
    button.addEventListener('click', function () {
      for (var j = 0; j < carouselSlides.length; j++) {
        carouselSlides[j].classList.remove('carousel-slide-active');
        carouselButtons[j].classList.remove('dot-active');
      };
      this.classList.add('dot-active');
      carouselSlides[i].classList.add('carousel-slide-active');
    });
  });
};

if (popupForm) {
  formOpen.addEventListener('click', function () {
    event.preventDefault();
    popupForm.classList.toggle('visually-hidden');

    if (input) {
      input.focus();
    }
  });
  formClose.addEventListener('click', function () {
    popupForm.classList.add('visually-hidden');
  });
};*/