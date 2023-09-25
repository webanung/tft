
function activateVideo(wrapper,immediately = false) {

  let targetIframe = wrapper.find('iframe');
  targetIframe.attr('src', targetIframe.attr('data-src'));

  if (immediately) {
    targetIframe.css('opacity',1);
    wrapper.find('.opt-in-overlay-wrapper').hide();
    wrapper.find('.opt-in-textbox').css('display', 'none');
    return;
  }

  wrapper.find('.opt-in-overlay-wrapper').animate(
    {"opacity": "0"},
    {
      duration: 1000, easing: 'linear',
      complete: function () {
        wrapper.find('.opt-in-textbox').css('display', 'none');
        targetIframe.animate(
          {"opacity": "1"},
          {duration: 500, easing: 'linear'}
        );
      }
    }
  );

}

$(document).ready(function () {


  if (typeof cookieman !== 'undefined') {
    if (cookieman.hasConsentedTrackingObject('YouTube')) {
      $('.opt-in-frame-wrapper[data-t3b-optin="youtube"]').each(function (i) {
        activateVideo($(this),true);
      })
    }
    if (cookieman.hasConsentedTrackingObject('Vimeo')) {
      $('.opt-in-frame-wrapper[data-t3b-optin="vimeo"]').each(function (i) {
        activateVideo($(this),true);
      })
    }
  }

  $('.opt-in-btn').on("click", function (e) {
    e.preventDefault();

    if (typeof cookieman !== 'undefined') {
      cookieman.consent('external');
      /*
      let videoplatform = $(this).closest('.opt-in-frame-wrapper').attr('data-t3b-optin');
      switch (videoplatform) {
        case 'youtube':
          cookieman.consentTracking('YouTube');
          break;
        case 'vimeo':

          break;
      }*/
    }

    activateVideo($(this).closest('.opt-in-frame-wrapper'));
  });
});
