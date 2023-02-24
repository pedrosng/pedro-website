import '../../css/contact-view.css'

let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append(
        
        '<div id="contact">' + 

        '<p class="contact-form-text">lorem ipsum</p>' + 
    
        '<div class="contact-form">' +
            '<div class="form-name">' +
                '<input id="name" type="text" placeholder="Name"></input>' +
                '<div id="line"></div>' +
            '</div>' +
            '<div class="form-email">' + 
                '<input id="email" type="email" placeholder="Email"></input>' +
                '<div id="line"></div>' + 
            '</div>' +
            '<div class="form-subject">' +
                '<input id="subject" type="text" placeholder="Subject"></input>' +
                '<div id="line"></div>' + 
            '</div>' +
            '<div class="form-message">' + 
                '<textarea id="message" placeholder="Message"></textarea>' +
                '<div id="line"></div>' + 
            '</div>' +
        '</div>' +
     '</div>'
    
     );
}

export default externals;