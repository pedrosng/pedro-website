import controllers from './controllers/controllers';

let internals = {} 
let externals = {}

internals.routes = {
        home: {
            hash: '#home',
            controller: controllers.homeController
        },
        skills: {
            hash: '#skills',
            controller: controllers.skillController
        },
        projects:{
            hash: '#projects',
            controller: controllers.projectsController
        },
        info: {
            hash: '#info',
            controller: controllers.infoController
        },
        contact:{
            hash: '#contact',
            controller: controllers.contactController
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
    controllerName();
}

const clearContentOnHashChange = () => {
    $('.content').empty();
}

export default externals;


