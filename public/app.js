(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./model/gridmodel":2,"./view/gridview":3}],2:[function(require,module,exports){
module.exports = Backbone.Model.extend({
    // Initial value for data that the model is responsible for.
    defaults: {
        xStart: 0, //horizontal

        yStart: 0, //vertical

    },

    up: function() {
        if (this.get('yStart') < 10) {
            this.set('yStart', this.get('yStart') + 1);
        }
    },

    down: function() {
        if (this.get('yStart') > 0) {
            this.set('yStart', this.get('yStart') - 1);
        }
    },

    left: function() {
      if (this.get('xStart') > 0) {
          this.set('xStart', this.get('xStart') - 1);
      }
    },

    right: function() {
      if (this.get('xStart') < 10) {
          this.set('xStart', this.get('xStart') + 1);
      }
    },

});

},{}],3:[function(require,module,exports){
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

},{}]},{},[1])