'use strict';

(function (module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#projects').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);