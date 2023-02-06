
let externals = {}

externals.render = data => {
    loadDescription(data);
};

const loadDescription = data => {
    $('.content').append('<div id="home">' + data + '</div>');
    console.log(data);
}

export default externals;