import "../../css/projects-view.css";

let externals = {};

externals.render = (data) => {
  loadContent(data);
};

const loadContent = (data) => {
  $(".content").append('<div id="projects">' + renderProjects(data) + "</div>");
};

const renderProjects = (data) => {
  let projectsHTML = "";

  data.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-card");

    let { name, description, link } = project;

    projectsHTML +=
      '<div class="project-card">' +
      "<h2>" +
      name +
      "</h2>" +
      "<p>" +
      description +
      "</p>" +
      '<a href="' +
      link +
      '" target="_blank">project url</a>' +
      "</div>";
  });

  return projectsHTML;
};

export default externals;
