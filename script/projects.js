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
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  if (!this.createdOn) $newProject.addClass('draft');
  $newProject.data('category', this.category);

  $newProject.find('h1').html(this.title);
  $newProject.find('.project-body').html(this.longDescription);
  $newProject.find('time').attr('datetime', this.createdOn);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.createdOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
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