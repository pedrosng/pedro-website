import { setUpArrows } from '../animations/arrows-animation'
import '../../css/skills-view.css'
import { skilsCardAnimation } from '../animations/skills-card-animation';

let externals = {};
let internals = {};

externals.render = data => {
    
    internals.data = data;
    internals.skillSetIndex = 0;

    $('.content').append(
        '<div id="skills">' +
        '</div>'
    );
    
    renderCard();
    skilsCardAnimation();

};

const renderCard = () => {
   $('#skills').empty();

   //selects skillset from object to present on card
   internals.currentSkillSet = selctSkillSet();

   setUpCard(internals.currentSkillSet);
   setUpArrows();
   setUpArrowsControls(); 
}


const selctSkillSet = () => {
    return internals.data[Object.keys(internals.data)[internals.skillSetIndex]];
}

const setUpCard = (currentSkillSet) => {

    let { icon, skillTitle, technologyDescription, technologicalStack } = currentSkillSet;

    $('#skills').append(
        '<div class="skills-card">' +
            '<div class="skills-card-header">' +
            '</div>' +
            '<div class="skills-card-description">' +
            '</div>' +
            '<div class="skills-card-body">' +
            '</div>' +
        '</div>'
        ); 
    loadHeader(icon, skillTitle);
    loadDescription(technologyDescription);
    loadSkillsList(technologicalStack);
}

const loadHeader = (icon, skillTitle) => {
    $('.skills-card-header').append(
        '<div class="skill-card-header-img-container">' +
            '<img src="'+ icon +'"/>' +
        '</div>' +
        '<h2>'+ skillTitle +'</h2>' 
    );
}
const loadDescription = (skillDescription) => {
    $('.skills-card-description').append(
        '<p>' + skillDescription + '</p>'
        );
    }
    
const loadSkillsList = technologicalStack => {
    technologicalStack.forEach(skill => {
        $('.skills-card-body').append('<p>'+ skill +'</p>');
    });
}

const setUpArrowsControls = () => {
    $('#backward').click(() => {
        //check if current skillset is the first skillset go to last one
        if(internals.currentSkillSet.skillTitle == internals.data[Object.keys(internals.data)[0]].skillTitle){
            internals.skillSetIndex = Object.keys(internals.data).length -1;
            renderCard();
            return;
        }

        internals.skillSetIndex--;
        renderCard();
    });
    
    $('#forward').click(() => {
        //check if current skillset is the last skillset, if so, returns to begining
        if(internals.currentSkillSet.skillTitle == internals.data[Object.keys(internals.data)[Object.keys(internals.data).length-1]].skillTitle){
            internals.skillSetIndex = 0;
            renderCard();
            return;
        }

        internals.skillSetIndex++;
        renderCard();

    });
  }

export default externals;