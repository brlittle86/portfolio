'use strict';

var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.createdOn = opts.createdOn;
  this.completedOn = opts.completedOn;
  this.shortDescription = opts.shortDescription;
  this.longDescription = opts.longDescription;
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000);
  this.publishStatus = this.createdOn ? `published ${this.daysAgo} days ago` : '(draft)';

  return templateRender(this);

};

projectData.sort(function(a,b) {
  return (new Date(b.createdOn)) - (new Date(a.createdOn));
});

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});