import '../../css/skills-view.css'

let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append(
        '<div id="skills">' +
            '<div class="arrows">' +
                '<div class="arrow" id="left"></div>' +
                '<div class="arrow" id="left"></div>' +
                '<div class="arrow" id="left"></div>' +
            '</div>' +
            '<div class="skills-card">' +
                '<div class="skills-card-header">' +
                    '<div class="skill-card-header-img-container">' +
                        '<img src="../../public/java.svg"/>' +
                    '</div>' +
                    '<h2>Java</h2>' +
                    '</div>' +
                '<div class="skills-card-description">' +
                    '<p>description lorem ipsum</p>' +
                '</div>' +
                '<div class="skills-card-body">' +
                    '<p>Jakarta EE</p>' +
                    '<p>JPA</p>' +
                    '<p>Spring</p>' +
                    '<p>Hibernate</p>' +
                    '<p>Maven</p>' +
                    '<p>Thymeleaf</p>' +
                    '<p>Tomcat</p>' +
                    '<p>Junit</p>' +
                    '<p>Mockito</p>' +
                    '<p>Log4J</p>' +
                '</div>' +
            '</div>' +
            '<div class="arrows">' +
                '<div class="arrow" id="right"></div>' +
                '<div class="arrow" id="right"></div>' +
                '<div class="arrow" id="right"></div>' +
            '</div>' +
        '</div>'
        );
}

export default externals;