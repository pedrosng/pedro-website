import '../../css/landing.css';

export const setUpLanding = () => {
    $('.landing').append(
        '<div class="logo">' +
            '<p id="name">Pedro G</p>' +
            '<p id="occupation">Developer</p>' +
        '</div>' +
      
        '<ul class="nav-links">' +
            '<li><a href="#home">Home</a></li>' +
            '<li><a href="#skills">Skills</a></li>' +
            '<li><a href="#projects">Projects</a></li>' +
            '<li><a href="#info">Info</a></li>' +
            '<li><a href="#contact">Contact</a></li>' +
        '</ul>' 
    );
} 
