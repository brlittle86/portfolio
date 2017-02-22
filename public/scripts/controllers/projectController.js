'use strict';

(function (module) {
  const projectController = {};

  projectController.init = () => {
    Project.fetchAll(projectView.initIndexPage);
    $('#about').hide();
    $('#projects').show();
  }

  module.projectController = projectController;
})(window);