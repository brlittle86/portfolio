'use strict';

(function (module) {
  const projectController = {};

  projectController.init = () => {
    $('#about').hide();
    $('#projects').show();
  }

  module.projectController = projectController;
})(window);