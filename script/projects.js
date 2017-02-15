'use strict';

var projects = [];

function Project(opts) {
  this.title = opts.title;
  this.createdOn = opts.createdOn;
  this.completedOn = opts.completedOn;
  this.shortDescription = opts.shortDescription;
  this.longDescription = opts.longDescription;
}

Project.all = [];

Project.prototype.toHtml = function () {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.createdOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.createdOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return templateRender(this);

};

Project.loadAll = function (projectData) {
  projectData.sort(function (a, b) {
    return (new Date(b.createdOn)) - (new Date(a.createdOn));
  });

  projectData.forEach(function (projectObject) {
    Project.all.push(new Project(projectObject));
  });
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectObjects.json')
      .then(
        function(data) {
          localStorage.setItem('rawData', JSON.stringify(data));
          Project.loadAll(data);
          projectView.initIndexPage();
        }, function(error){
          console.log('ERRRRRRRRROOOOOORRRR', error);
        })
  }
}