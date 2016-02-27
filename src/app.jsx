var React = require('react');
var Dropdown = require('./dropdown');
// var ReactDOM = require('ReactDOM');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple pie',
    'Peach Cobbler',
    'Custard Cream'
  ]
};



var element = React.createElement(Dropdown, options);

ReactDOM.render(element, document.querySelector('.target'));
