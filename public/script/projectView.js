'use strict';

var projectView = {};

projectView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', () => {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.initIndexPage = () => {
  Project.all.forEach( a => {
    $('#projects').append(a.toHtml())
  });

  projectView.handleMainNav();
}