import mockService from "../services/mockService";
import contactView from "../views/contact-view";
import infoView from "../views/info-view";
import projectsView from "../views/projects-view";
import skillsView from "../views/skills-view";
import homeView from "../views/home-view";

let externals = {};

externals.contactController = () => {
  let contactContent = mockService.getContactContent();

  contactView.render(contactContent);
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
