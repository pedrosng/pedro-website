let externals = {};

let contactData = 'display contact form';
let homeData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let infoData = 'git hub, linked in, instagram';
let projectsData = 'wow so many amazing projects';
let skillsData = 'my technique is very necessary';

externals.getContactContent = () => {
    return contactData; 
}

externals.getHomeContent = () => {
   return homeData;
}

externals.getInfoContent = () => {
    return infoData;
}

externals.getProjectsContent = () => {
    return projectsData;
}

externals.getSkillsContent = () => {
    return skillsData;
}

export default externals;