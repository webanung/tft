$(document).ready(function () {

  $('a[href^="#c"]').each(function () {
    //same page?
    if (((this.host + this.pathName) === (window.location.host + window.location.pathname)) || $(this).attr('href').startsWith('#c')) {
      // check if link points to element inside Tab/Accordion
      var cId = this.hash;
      if ($('.tabbable, .accordion').find(cId).length) {
        $(this).click(function (event) {
          event.preventDefault();

          openTabOrAccordionWithHash(cId);
        });
      }
    }

  });
  // go to element on pageload
  if ($('.tabbable').find(window.location.hash).length || $('.accordion').find(window.location.hash).length) {
    openTabOrAccordionWithHash(window.location.hash);
  }
});

function openTabOrAccordionWithHash(cId) {

  // open tabs
  $(cId).parents('.tab-pane').each(function () {
    if ($(this).length) {
      $('a[href="#' + $(this).attr('id') + '"]').tab('show');
    }
  });

  // open accordions
  $(cId).parents('.collapse').each(function () {
    if ($(this).length) {
      $(this).collapse('show');
    }
  });

  $('html, body').stop().animate({
    'scrollTop': $(cId).offset().top - $("#nav-primary").height() - 48
  }, 700, 'swing', function () {
    /*
    $(cId + ' img').addClass('shadow-pulse');
    $(cId + ' img').on('animationend', function(){
      $(cId + ' img').removeClass('shadow-pulse');
    });*/
  });

}
