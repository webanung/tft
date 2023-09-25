// requires: cookieman.js, Bootstrap-JS
/** global: cookieman */
cookieman.theme = (function () {
  "use strict";
  var showBackdrop = true,
    showSettingsBtn = document.querySelector('[aria-controls="cookieman-settings"]'),
    modal = null

  // show "save" after opening settings
  if (showSettingsBtn) {
    showSettingsBtn.addEventListener('click', function (ev) {
      var saveBtn = document.querySelector(
        '[data-cookieman-save]:not([data-cookieman-accept-all]):not([data-cookieman-accept-none])'
      )
      if (saveBtn) {
        saveBtn.hidden = false
      }
    })
  }

  cookieman.show = function () {
    const cookiemanModal = $('#cookieman-modal');
    cookiemanModal.appendTo($('body'));
    const cookiemanEl = document.getElementById('cookieman-modal')
    modal = new bootstrap.Modal(
      cookiemanEl,
      {
        backdrop: showBackdrop
      }
    )
    cookiemanModal.on('shown.bs.modal', function (event) {
      if (cookiemanModal.css('display') == 'none') {
        modal.hide();
        cookieman.showSuppressionWarning();
      }
    })
    modal.show();
  }
  cookieman.hide = function () {
    modal && modal.hide()
  }
  cookieman.showSuppressionWarning = function () {
    $('<div />').addClass('suppression-warning').html($('#cookieman-suppression-warning').html()).css({display:'block',position:'fixed',bottom:0,left:0,right:0,'z-index': 88888,'background-color':'#d78484', color:'#000','text-align': 'center',padding:'7px','font-size': '1.2rem'}).appendTo($('body'));
  }
}())
