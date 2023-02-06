import skillsService from '../services/skills-service';
import skillsView from '../views/skills-view';

let externals = {}

externals.start = () => {
    console.log('skills-ctrl start');
    
    /** 
     * refactor to asyn-await
    */
    skillsService.getSkillsContent( (err,data) => {

        let skillsContent = err ? err : data ;

        console.log(skillsContent);

        skillsView.render(skillsContent);
    });    
}

export default externals;