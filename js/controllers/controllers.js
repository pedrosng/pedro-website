import mockService from "../services/mockService.js";
import contactView from "../views/contact-view.js";
import infoView from "../views/info-view.js";
import projectsView from "../views/projects-view.js";
import skillsView from "../views/skills-view.js";
import homeView from "../views/home-view.js";

let externals = {};

externals.contactController = () => {
  contactView.render();
};

externals.homeController = () => {
  let homeContent = mockService.getHomeContent();

  homeView.render(homeContent);
};

externals.infoController = () => {
  let infoContent = mockService.getInfoContent();

  infoView.render(infoContent);
};

externals.projectsController = () => {
  let projectsContent = mockService.getProjectsContent();

  projectsView.render(projectsContent);
};

externals.skillController = () => {
  let skillsContent = mockService.getSkillsContent();

  skillsView.render(skillsContent);
};

export default externals;
