'use strict';

angular.module('weddingSiteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'angular-social-count',
  'djds4rce.angular-socialshare',
  'hitcounter',
  'ngMap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);

    $translateProvider.preferredLanguage('english');
    $translateProvider.useStaticFilesLoader({   
      files: [{
      prefix: '/languages/',             
      suffix: '.json'                           
     }]
    });   
    $translateProvider.useLocalStorage();
  })

$(document).ready(function(){
/* --------------------------------------------------
 ## Scoll bar
-------------------------------------------------- */
    $('body').niceScroll();
  
/* --------------------------------------------------
 ## Wow init
-------------------------------------------------- */
new WOW().init();

/* --------------------------------------------------
 ## Owlcarousel init
-------------------------------------------------- */
if (jQuery().owlCarousel) {
    $('#sponsor-carousel').owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay    : 2000
    });
}

/* --------------------------------------------------
 ## Parallax resize fix
-------------------------------------------------- */
if (jQuery().parallax) {
  $(window).trigger('resize').trigger('scroll');
}

/* ---------------------------------------------------------------------

 # THEME ELEMENTS

--------------------------------------------------------------------- */

/* --------------------------------------------------
 ## Preloader
-------------------------------------------------- */
function preLoader() {
  $(window).on('load', function() {
      var $preloader = $('#preloader'),
          $spinner   = $preloader.find('.spinner');
      $spinner.fadeOut();
      $preloader.delay(250).fadeOut(800);
  });
} 
preLoader();

/* --------------------------------------------------
 ## Scrolltop
-------------------------------------------------- */
function scrollTop() {
  var scrollTopBtn = $('#scrollTop');
  $(window).on('load resize scroll', function () {
    if ($(this).scrollTop() > 600) {
      scrollTopBtn.addClass('upscaled');
    } else {
      scrollTopBtn.removeClass('upscaled');
    }
  }); 
  scrollTopBtn.click(function(){
    $('body,html').animate({ 
      scrollTop: 0 
    }, 800);
    $('.navbar-nav li').removeClass('active');
    return false;
  });
}
scrollTop();


/* --------------------------------------------------
 ## Form Validate
-------------------------------------------------- */
function formValidate() {
  var $form = $("#rsvpForm");
    $form.on("submit", function(e){
      if( $form[0].checkValidity() ) {
        $.post("php/rsvp.php", $form.serialize(), function(response) {
          $('.submit-wrap').fadeOut(300);
            $('#successMsg').removeClass('hidden').fadeIn(500);
            e.preventDefault();
        });
      } else console.log("invalid");
      e.preventDefault();
    });
}
formValidate();

/* --------------------------------------------------
 ## Select Fix
-------------------------------------------------- */
function selectFix() {
  $(document.body).on('click', '.select-fix .dropdown-menu li', function(event) {
    var $target = $(event.currentTarget);
    $target.closest('.btn-group').find('[data-bind="label"]').text($target.text()).end().children('.dropdown-toggle').dropdown('toggle');
    return false;
  });
}
selectFix();
 
/* --------------------------------------------------
 ## Carousel Controls
-------------------------------------------------- */
function carouselControl() {
  var $prev = $('.carousel a[data-slide="prev"]'),
    $next = $('.carousel a[data-slide="next"]');    
  $prev.click(function() {
    $('.carousel').carousel('prev');
  });
  $next.click(function() {
    $('.carousel').carousel('next');
  }); 
}
carouselControl();


/* --------------------------------------------------
 ## Tooltips
-------------------------------------------------- */
function toolTips() {
  $('[data-toggle="tooltip"]').tooltip();
}
toolTips();

/* --------------------------------------------------
 ## Tabs
-------------------------------------------------- */
$('.tabs-nav a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

});
