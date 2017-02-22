'use strict';
(function (module) {
  var projectView = {};

  projectView.initIndexPage = () => {
    Project.all.forEach((a) => {
      $('#projects').append(a.toHtml())
    });

  }
  Project.fetchAll = () => {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      projectView.initIndexPage();
    } else {
      $.getJSON('data/projectObjects.json')
        .then(
        data => {
          localStorage.setItem('rawData', JSON.stringify(data));
          Project.loadAll(data);
          projectView.initIndexPage();
        }, error => {
          console.log('There was an error:', error);
        })
    }
  }

  Project.fetchAll(projectView.initIndexPage);

  module.projectView = projectView;
})(window);