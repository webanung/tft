let App = function () {


  function initBootstrap() {

    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover();


    if ($('.navbar-onepage').length > 0) {
      $('body').scrollspy({target: $('.navbar-onepage'), offset: ($('#nav-primary').height() + 21)});
    }

  }

  function initLightbox() {

    if (typeof GLightbox === 'undefined') return;
    /* fix for missing title attribute in lightbox a tags */
    $('.lightbox').each(function () {
      if (this.title === '') {
        $(this).attr('title', $("img", $(this)).attr('title'));
      }
      const parents = $(this).parents('figure');
      if (parents.length > 0) {
        if ($('.image-caption span.description', parents.get(0)).length > 0) {
          $(this).attr('data-description', $('.image-caption span.description', parents.get(0)).html());
        }
      }

    });

    const lightbox = GLightbox({
      selector: '.lightbox'
    });
    lightbox.on('open', () => {
      App.compensateScrollbar(true);
    });
    lightbox.on('close', () => {
      App.compensateScrollbar(false);
    });

  }

  function initHeader() {


    if ($('.navbar-user').length > 0) {

      let userNavbarHeight = $('.navbar-user').height();
      $(window).scroll(function () {
        if (document.documentElement.scrollTop > 100) {
          $('#nav-primary').addClass('navbar-shrinked');
        } else if (document.documentElement.scrollTop < 100-userNavbarHeight-5) {
          $('#nav-primary').removeClass('navbar-shrinked');
        }
      });
    }


    $('.hero video').each(function () {
      var video = this;
      video.oncanplaythrough = function () {
        video.muted = true;
        video.play();
      }
    });
  }


  function initEqualHeight() {

    if (typeof $('body').matchHeight() === 'undefined') return;
    $('.equal-height').matchHeight({
      byRow: true,
      property: 'min-height'
    });
    $('.ce-header').matchHeight({
      byRow: true,
      property: 'min-height'
    });

  }

  function initSmoothScroll() {

    var navbarHeight = $('#nav-primary').height();
    if ($('.navbar-user').length > 0) {
      navbarHeight -= $('.navbar-user').height();
    }

    /* section index on same pages */
    $('a.this-page').on('click', function (event) {
      event.preventDefault();

      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - (navbarHeight + 20)
      }, 800, function () {
      });
    });


    /* from here on only for one pager */
    if ($('.navbar-onepage').length === 0) return;

    /* Add smooth scrolling on all links inside the navbar */
    $('#page a[href*="#"]').not('.visually-hidden').not('[data-bs-parent]').not('[data-bs-toggle]').not('[data-bs-slide]').on('click', function (event) {

      event.preventDefault();
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - (navbarHeight + 20)
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    });

    /* one page: link on logo */
    $('.navbar-onepage .navbar-brand a').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800, function () {

      });
    });

    $('.nav-onepage a').on('click', function (event) {
      $(this).closest('.navbar-collapse.show').collapse('hide');
    });

  }

  function initAjaxModals() {

    var modalTemplate = jQuery('<div class="modal fade" id="ajax-modal" tabindex="-1" role="dialog" aria-labelledby="ajaxModalLabel" aria-hidden="true">\n' +
      ' <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
      ' <span aria-hidden="true">&times;</span>\n' +
      ' </button>\n' +
      ' <div class="modal-dialog" role="document">\n' +
      ' <div class="modal-content">\n' +
      ' <div class="modal-header">\n' +
      ' <h5 class="modal-title" id="ajaxModalLabel"></h5>\n' +
      ' </div>\n' +
      ' <div class="modal-text"></div>\n' +
      ' <div class="modal-body">\n' +
      ' </div>\n' +
      ' </div>\n' +
      ' </div>\n' +
      '</div>').attr('id', 'modalContact');


    jQuery('body').append(modalTemplate);
    let modalBody = modalTemplate.find('.modal-body');

    let showContent = function (content) {

      modalBody.html(content);
      modalTemplate.find('.modal-title').html(modalBody.find('h2').html());
      modalBody.find('h2').remove();
      let form = modalTemplate.find('form');

      form.find('[type=submit]').on('click', function (e) {
        e.preventDefault();

        /* show spinner */


        let values = form.serialize();
        values = values += '&' + jQuery(e.target).attr('name') + '=' + jQuery(e.target).attr('value');

        jQuery.ajax({
          type: "POST",
          url: form.attr('action'),
          data: values,
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          },
          dataType: 'html',
          success: showContent
        });

      });

    };

    jQuery('.modal-ajax').on('click', function (e) {
      e.preventDefault();
      let url = jQuery(this).data('url');

      /* show spinner */

      jQuery.ajax({
        type: "POST",
        url: url,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        dataType: 'html',
        success: function (content) {
          showContent(content);
          modalTemplate.modal('show');

          /* hide spinner */

        }
      });
    });

  }

  function initAriaBar() {

    if (jQuery('.nav-aria').length === 0) return;

    jQuery('body').addClass('with-aria-bar');

    if ($.cookie('aria-high-contrast') == '1') {
      jQuery('body').addClass('high-ct-enabled');
      jQuery(this).addClass('active');
      jQuery('.btn-contrast').addClass('active');
    }

    jQuery('.btn-contrast').on('click', function (event) {
      event.preventDefault();
      if (jQuery(this).hasClass('active')) {
        jQuery('body').removeClass('high-ct-enabled');
        jQuery(this).removeClass('active');
        $.removeCookie('aria-high-contrast', {path: '/'});
      } else {
        jQuery('body').addClass('high-ct-enabled');
        jQuery(this).addClass('active');
        $.cookie('aria-high-contrast', '1', {path: '/'});
      }
    });

  }

  function initCompareSlider() {
    if ($(".beforeafterdefault").length > 0) {
      $(".beforeafterdefault").cndkbeforeafter({autoSliding: true});
    }
  }

  function initScrollbarWidth(App) {
    // thx d.walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    App.scrollbarWidth = scrollbarWidth;
  }

  function initAos() {
    if ($('[data-aos]').length > 0 && typeof aosIsInitialized !== 'undefined') {
      AOS.init();
    }
  }

  function initCookiemanButton() {
    if (typeof cookieman === 'undefined') return;

    $('<a />').addClass('cookieman-caller').click(function (event) {
      if ($('#cookieman-modal:visible').length === 0) {
        cookieman.show();
      }
    }).appendTo($('body'));

  }

  return {

    scrollbarWidth: 0,

    init: function () {

      initBootstrap();
      initScrollbarWidth(this);
      initLightbox();
      initHeader();
      initEqualHeight();
      initSmoothScroll();
      initAjaxModals();
      initAriaBar();
      initCompareSlider();
      initAos();
      initCookiemanButton();

    },
    compensateScrollbar: function (compensate) {
      if (compensate) {
        $('body, .fixed-top, .fixed-bottom, .is-fixed').css('padding-right', this.scrollbarWidth);
      } else {
        $('body, .fixed-top, .fixed-bottom, .is-fixed').css('padding-right', 0);
      }
    }
  }
}();

jQuery(document).ready(function () {
  App.init();
});


let mmenu;


let MmenuWrapper = function () {

  function start() {
    let navTitle = document.head.querySelector("[name=sitename]") ? document.head.querySelector("[name=sitename]").content : '';

    mmenu = new Mmenu("#mobile-menu", {
      navbar: {
        title: navTitle
      },
      navbars: [{
        position: 'bottom',
        height: 2,
        content: ['<div id="mobile-footer"></div>']
      }]
    }, {
      classNames: {
        selected: 'current'
      }
    });
    const api = mmenu.API;
    api.bind("openPanel:before",
      (panel) => {
        var scrollTopPosition = $(window).scrollTop();
        $('.fixed-top').css('position', 'absolute').css('top', scrollTopPosition + 'px');
      }
    );
    api.bind("closePanel:after",
      (panel) => {
        $('.fixed-top').css('position', 'fixed').css('top', '0px');
      }
    );
    api.bind("openPanel:after",
      (panel) => {
        populateNextAndPreviousPanels(panel);
      }
    );

    $('#mobile-footer').html($('#nav-mobile-footer').html());

    $('.navbar-toggler').on('click',function () {
      populateNextAndPreviousPanels(getOpenPanel());
    });

    getOpenPanel().find('ul').attr('data-loaded','true');
    //populateNextAndPreviousPanels(getOpenPanel());
  }

  function loadMmenuData(pageIds) {
    //console.debug('loadMmenuData');
    //console.debug(pageIds);
    $.ajax({
      url: $('#mobile-menu').attr('data-ajax-menu-url'),
      data: {
        pageIds: pageIds.join(',')
      },
      context: document.body
    }).done(function (data) {
      let uls = $('<div />').html(data).find('ul');
      uls.each(function( index ) {
        let id = $(this).attr('data-id');
        if ($('ul[data-id='+id+']').length > 0) {
          $('ul[data-id='+id+']').attr('data-loaded','true');
          let lastElement;
          $(this).children('li').each(function (index) {
            let pid = $(this).attr('data-id');
            if ($('ul[data-id='+id+'] > li[data-id='+pid+']').length > 0) {
              // skip element
              lastElement = $('li[data-id='+pid+']');
            } else {
              if (index === 0) {
                lastElement = $(this).prependTo($('ul[data-id='+id+']'));
              } else {
                lastElement = $(this).insertAfter(lastElement);
              }
            }
          });
        } else if ($('.mm-listitem[data-id='+id+']').length > 0) {
          $('.mm-listitem[data-id='+id+']').append($(this));
        }
      });

    });

  }

  function populateNextAndPreviousPanels(panel) {

    if ($('.navbar-toggler').get(0).offsetParent === null) return;

    //console.debug('populateNextAndPreviousPanels');
    let pageIds = [];
    //console.debug(panel)
    $('li.sub',panel).each(function () {
      if ($('ul[data-id='+$(this).attr('data-id')+'][data-loaded=true]').length === 0) {
        if ($(this).attr('data-mm-child') !== undefined && $(this).attr('data-mm-child') !== '') {
          $('#' + $(this).attr('data-mm-child') + ' > ul > li.sub').each(function () {
            pageIds.push($(this).attr('data-id'));
          });
        } else {
          pageIds.push($(this).attr('data-id'));
        }
      }
    });
    // parent
    let parentId = $(panel).attr('data-mm-parent');
    if ($('#'+parentId).length > 0 && $('ul[data-id='+$('#' + parentId).parent().attr('data-id')+'][data-loaded=true]').length === 0) {
      pageIds.push($('#' + parentId).parent().attr('data-id'));
    }
    if (pageIds.length > 0) {
      loadMmenuData(pageIds);
    }
  }

  function getOpenPanel() {
    return $('.mm-panel--opened');
  }

  return {
    init: function () {
      start();
    }
  }
}();


document.addEventListener(
  "DOMContentLoaded", () => {
    MmenuWrapper.init();
  }
);


function loadJS(url)
{
  // adding the script tag to the head
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;

  // fire the loading
  head.appendChild(script);
}
