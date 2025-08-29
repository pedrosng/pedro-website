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
      '" target="_blank">peek</a>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>' +
      "</br>";
    ("</div>");
  });

  return projectsHTML;
};

export default externals;
