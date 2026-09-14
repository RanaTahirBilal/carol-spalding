/* Replaces the demo's script.js. That file calls owlCarousel, Morphext and
   jquery.appear on markup this build does not have, and those plugins were
   pruned, so it threw "not a function" and stopped before WOW ever ran.
   Only the behaviour this page actually uses is kept. */
(function ($) {
  'use strict';

  // header gains a solid background once you leave the hero
  $(window).on('scroll', function () {
    var $h = $('header');
    if ($(this).scrollTop() > 60) { $h.addClass('header-appear'); }
    else { $h.removeClass('header-appear'); }
  });

  // anchor scrolling, offset for the fixed bar
  $('.scroll').on('click', function (e) {
    var t = $(this.hash);
    if (!t.length) { return; }
    e.preventDefault();
    $('html,body').animate({ scrollTop: t.offset().top - 74 }, 500);
    $('#navbarNav').collapse('hide');
  });

  // the four-pillar row highlights on hover, matching the demo's behaviour
  $('.about-media').on('mouseenter', function () {
    $('.about-media').removeClass('active');
    $(this).addClass('active');
  }).on('mouseleave', function () {
    $('.about-media').removeClass('active');
    $('.about-media.selected').addClass('active');
  });

  if (typeof WOW === 'function') { new WOW().init(); }
})(jQuery);
