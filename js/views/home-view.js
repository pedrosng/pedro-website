let externals = {}

externals.render = data => {
    loadContent(data);
};

const loadContent = data => {
    $('.content').append('<div id="home">' + data + '</div>');
    console.log(data);
}

export default externals;