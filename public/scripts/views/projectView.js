'use strict';
(function (module) {
  var projectView = {};

  projectView.initIndexPage = () => {
    Project.all.forEach((a) => {
      $('#projects').append(a.toHtml())
    });

  }
  module.projectView = projectView;
})(window);