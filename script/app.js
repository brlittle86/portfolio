'use strict';

var allProjects = [];

function Project(data) {
  this.title = data.title;
  this.shortDescription = data.shortDescription;
  this.longDescription = data.longDescription;
  this.createdOn = data.createdOn;
  this.completedOn = data.completedOn;
}

Project.prototype.toHtml = function () {
  var $newProject = $('.template').clone();
  $newProject.removeClass('.template');

  if (!this.createdOn) $newProject.addClass('draft');

  $newProject.find('h1').html(this.title);
  $newProject.find('.project-long-description').html(this.body);
  $newProject.find('.project-date').html('Created on: ' + this.publishedOn);

  return $newProject;
};

projectData.forEach(function (projectObject) {
  allProjects.push(new Project(projectObject));
});

allProjects.forEach(function (a) {
  $('#projects').append(a.toHtml());
});