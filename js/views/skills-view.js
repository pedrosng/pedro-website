import { setUpArrows } from '../animations/arrows-animation'
import '../../css/skills-view.css'
import { skilsCardAnimation } from '../animations/skills-card-animation';

let externals = {};

let skillIndex = 0;

externals.render = data => {
    let {icon, skill, stack} = loadData(data);
    setUpskillsCard(icon,skill,stack);
    skilsCardAnimation();
    setUpArrows();
};

const loadData = data => {
    const skillSet = Object.keys(data);
    return data[skillSet[skillIndex]];
}

const loadSkillsStack = stack => {
    stack.forEach(element => {
        $('.skills-card-body').append('<p>'+ element +'</p>');
        console.log(element);
    });
}

const setUpskillsCard = (icon,skill,stack) => {
    $('.content').append(
        '<div id="skills">' +
            '<div class="skills-card" id="background">' +
            '</div>' +
            '<div class="skills-card" id="front">' +
                '<div class="skills-card-header">' +
                    '<div class="skill-card-header-img-container">' +
                        '<img src="'+ icon +'"/>' +
                    '</div>' +
                    '<h2>'+ skill +'</h2>' +
                    '</div>' +
                '<div class="skills-card-description">' +
                    '<p>description lorem ipsum</p>' +
                '</div>' +
                '<div class="skills-card-body">' +
                '</div>' +
            '</div>' +
            '<div class="skills-card" id="background">' +
            '</div>' +
        '</div>'
        );
        loadSkillsStack(stack);
}

export default externals;