import { setUpArrows } from '../animations/arrows-animation'
import '../../css/skills-view.css'
import { skilsCardAnimation } from '../animations/skills-card-animation';

let externals = {};
let internals = {};
let skillsSetIndex = 0;

externals.render = data => {

    internals.data = data;

    $('.content').append(
        '<div id="skills">' +
        '</div>'
    );
    
    //selects skillset from object to present on card
    internals.skillsSet = Object.keys(internals.data)[skillsSetIndex];

    setUpCard(internals.data[internals.skillsSet]);
    setUpArrows();
    skilsCardAnimation();
    setUpArrowsControls();

};

const setUpCard = (skillSet) => {
    
    let { icon, skillTitle, technologyDescription, technologicalStack } = skillSet;

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
    $('#left').click(() => {
        console.log('skill set index is: ', skillsSetIndex);
        console.log('left arrows click');
    });
    
    $('#right').click(() => {
        skillsSetIndex++;
        console.log(skillsSetIndex);
        console.log(Object.keys(internals.data)[skillsSetIndex]);
        $('#skills').empty();
        setUpCard(internals.data[Object.keys(internals.data)[skillsSetIndex]]);
        setUpArrows();
        setUpArrowsControls();
        console.log('skill set index is: ', skillsSetIndex);
        console.log('right arrows click');
    });
  }

export default externals;