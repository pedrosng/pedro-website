import projectsService from '../services/projects-service';
import projectsView from '../views/projects-view';

let externals = {}

externals.start = () => {
    console.log('projects-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    projectsService.getProjectsContent( (err,data) => {

        let projectsContent = err ? err : data ;

        console.log(projectsContent);

        projectsView.render(projectsContent);
    });    
}

export default externals;