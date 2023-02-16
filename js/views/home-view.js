import '../../css/home-view.css';

let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append(
        '<div id="home">' + 
            '<p class="header">' +
                data.heather +  
            '</p>' +
            '<p class="body">' +
                data.body + 
            '</p>' + 
        '</div>'
    );
}

export default externals;