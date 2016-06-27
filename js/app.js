let GridModel = require('./model/gridmodel');
let GridView = require('./view/gridview');

window.addEventListener('load', function () {
    // Models roll on their own.
    let gmodel = new GridModel();

    // Views like company. They need to know two things:
    //    1. What data do I care about?
    //    2. What DOM elements should I be updating when things change?
    let volume = new GridView({
        model: gmodel,
        el: document.getElementById('position'),
    });


});
