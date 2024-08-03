$(document).ready(function(){

  $(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen, .header_left').toggleClass('is-visible');
  });
});


// accordion functionality
$('.accordion__title').on('click', function(){
  $(this).toggleClass('accordion__title--active').siblings('.accordion__title').removeClass('accordion__title--active'); 
  $(this).next('.accordion__content').slideToggle().siblings('.accordion__content').slideUp();
});

//tabs functionality
$('.tabs li').on('click', function(){
  var tabId = $(this).attr("data-tab");
  
  $('.tabs li').removeClass('tab--active');
$('.accordion__content').removeClass('accordion__content--active');
  
  $(this).addClass('tab--active');  
  $('#' + tabId).addClass('accordion__content--active');
});

// accordion functionality
$('.accordion__title').on('click', function(){
  $(this).toggleClass('accordion__title--active').siblings('.accordion__title').removeClass('accordion__title--active'); 
  $(this).next('.accordion__content2').slideToggle().siblings('.accordion__content2').slideUp();
});

//tabs functionality
$('.tabs2 li').on('click', function(){
  var tabId = $(this).attr("data-tab");
  
  $('.tabs2 li').removeClass('tab--active2');
$('.accordion__content2').removeClass('accordion__content--active2');
  
  $(this).addClass('tab--active2');  
  $('#' + tabId).addClass('accordion__content--active2');
});



$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.burger_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
}); 


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link3');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open3');

    if (!e.data.multiple) {
      $el.find('.burger_accordion_content').not($next).slideUp().parent().removeClass('open3');
    };
  } 

  var accordion = new Accordion($('#accordion3'), false);
}); 

// toggle menus
var navBarClosed = true;
var searchClosed = true;
var signInClosed = true;



// toggle search
$('.btn-toggle-search').on('click', function() {
	if (navBarClosed && signInClosed) {
		$(this).toggleClass('open');
		$('.overlay').toggleClass('open');
		$('.search-toggle-menu').toggleClass('open');
		searchClosed = !searchClosed;
	}
});


$('.catalog_n_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        }
      ]
  });




});



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
}


modals.forEach(modal => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal__inner");
    const isCloseButton = event.target.matches(".js-close-modal");
    if (isCloseButton || isOutside) {
      closeModal();
    }
  });
});

triggersModal.forEach((button) =>
button.addEventListener("click", function (e) {
  e.preventDefault();
  let modalID = this.dataset.modal;
  console.log(modalID);
  modals.forEach(function (modal) {
    if (modal.dataset.modal == modalID) {
      modal.classList.add("is-open");
    }
  });
}));