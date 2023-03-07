let externals = {};

let homeData = {
    heather: 'Hi there, I´m Pedro!',
    body: 'I´m a fullstack developer based in Porugal. I believe code can help us evolve towards a better world by crafting functionalities that reduce both our ecological footprint and the existing gaps between us humans. I am also a passionate climber and a chronic curious. When not writting code you can find me among the mountains going up granite and limestone walls or immersed on learning something new.'
}

let infoData = {
    gitHub: {
        text: 'GitHub',
        link:  'https://github.com/pedrosng'
    },   
    linkedIn: {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/pedronunesgoncalves/' 
    },
    instagram: {
        text: 'Instagram',
        link: 'https://www.instagram.com/pedro.sng/'   
    }
}

let contactData = 'Say Hi';
let projectsData = 'wow so many amazing projects';

let skillsData = {
    java: {
        icon: '../../public/java.svg',
        skillTitle: 'Java',
        technologyDescription: 'lorem ipsum',
        technologicalStack: ['Jakarta EE','JPA','Spring','Hibernate','Maven','Thymeleaf','Tomcat','Junit','Mockito','Log4J']
    },
    javascript: {
        icon: '../../public/javascript.svg',
        skillTitle: 'JavaScript',
        technologyDescription: 'lorem ipsum',
        technologicalStack: ['React','Cypress','Three.js','GSAP','Node','Jquery','Hapi','Knex/Objection.js']
    }
};

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