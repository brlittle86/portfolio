'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $projects = $('#projects');

    $projects.empty();
    $projects.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#projects').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
