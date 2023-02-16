let externals = {};

let homeData = {
    heather: 'Hi there, I´m Pedro!',
    body: 'I´m a fullstack developer based in Porugal. I believe code can help us evolve towards a better world by crafting functionalities that reduce both our ecological footprint and the existing gaps between us humans. I am also a passionate climber and a chronic curious. When not writting code you can find me among the mountains going up granite and limestone walls or immersed on learning something new.'
}
let contactData = 'display contact form';
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