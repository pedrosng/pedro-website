let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append('<div id="contact">' + data + '</div>');
}

export default externals;