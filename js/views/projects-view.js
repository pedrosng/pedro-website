let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append('<div id="projects">' + data + '</div>');
}

export default externals;