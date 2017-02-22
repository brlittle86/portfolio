'use strict';
(function (module) {
  var projectView = {};

  projectView.handleMainNav = function () {
    $('.main-nav').on('click', '.tab', function () {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  projectView.initIndexPage = () => {
    Project.all.forEach((a) => {
      $('#projects').append(a.toHtml())
    });

    projectView.handleMainNav();
  }
  module.projectView = projectView;
})(window);