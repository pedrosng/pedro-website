import homeCtrl from './controllers/home-controller';
import skillsCtrl from './controllers/skills-controller';
import projectsCtrl from './controllers/projects-controller';
import infoCtrl from './controllers/info-controller';
import contactCtrl from './controllers/contact-controller';

let internals = {} 
let externals = {}

internals.routes = {
        home: {
            hash: '#home',
            controller: homeCtrl
        },
        skills: {
            hash: '#skills',
            controller: skillsCtrl
        },
        projects:{
            hash: '#projects',
            controller: projectsCtrl
        },
        info: {
            hash: '#info',
            controller: infoCtrl
        },
        contact:{
            hash: '#contact',
            controller: contactCtrl
        }
    };

internals.defaultRoute = 'home';
internals.currentHash = ''; //variable to track hash changes

/** 
 * Start the routing process
*/
externals.start = () => {
    window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;
    setInterval(hashCheck,100);
}

const hashCheck = () => {
   //do nothing if route has not changed
   if(window.location.hash === internals.currentHash) {
    return;
   }
   
   //find the current route name 
   let routeName = Object.keys(internals.routes).find( name => {
    return window.location.hash === internals.routes[name].hash;
   });
   console.log(routeName)

   //load default route if routeName is invalid
   if(!routeName){
    loadDefaultRouteName();
    return;
   }

   /**
    * clear section(class content) element on hash change 
   */
   clearContentOnHashChange()

   //load route if valid
   loadController(internals.routes[routeName].controller);
};

const loadDefaultRouteName = () => {
    window.location.hash = internals.routes[internals.defaultRoute].hash;
    loadController(internals.routes[internals.defaultRoute].controller);
}

const loadController = controllerName => {
    internals.currentHash = window.location.hash;
    console.log('controller.start',controllerName, typeof(controllerName));
    controllerName.start();
}

const clearContentOnHashChange = () => {
    $('.content').empty();
}

export default externals;


