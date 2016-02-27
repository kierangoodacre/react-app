//Need to show a button and list this component should know when to show the list when a user clicks on the button

var React = require('react');
var Button = require('./button');
// var List = require('./list');

module.exports = React.createClass({
  handleClick: function(){
    alert('button clicked');
  },

  render: function(){
    return <div class='dropdown'>
      <Button
        whenClicked={this.handleClick} 
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
      />
    </div>
  }
});
