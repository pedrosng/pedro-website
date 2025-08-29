import data from "./data.js";

let externals = {};

externals.getHomeContent = () => {
  return data.homeData;
};

externals.getInfoContent = () => {
  return data.infoData;
};

externals.getProjectsContent = () => {
  return data.projectsData;
};

externals.getSkillsContent = () => {
  return data.skillsData;
};

export default externals;
