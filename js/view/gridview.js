module.exports = Backbone.View.extend({
    // 'Constructor' function - what to do at the beginning
    initialize: function () {
        this.model.on('change', this.render, this); // this as third arg
    },

    // Event listeners to set up
    events: {
        // 'event-name selector': 'function-to-call'
        'click #up': 'clickUp',
        'click #down': 'clickDown',
        'click #left': 'clickLeft',
        'click #right': 'clickRight',
    },

    clickUp: function () {
        this.model.up();
    },

    clickDown: function () {
        this.model.down();
    },

    clickLeft: function () {
        this.model.left();
    },

    clickRight: function () {
        this.model.right();
    },

    // How to update the DOM when things change
    render: function () {
        let xMove = this.el.querySelector('#horizontal');
        xMove.textContent = this.model.get('xStart');

        let yMove = this.el.querySelector('#vertical');
        yMove.textContent = this.model.get('yStart');

        // let song = this.el.querySelector('#current-song');
        // // song.textContent = this.model.currentSong();
        // song.innerHTML = `The song is ${this.model.currentSong()}`;
    },
});
