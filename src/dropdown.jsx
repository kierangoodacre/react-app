//Need to show a button and list this component should know when to show the list when a user clicks on the button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    alert('button clicked');
  },

  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem item={item} />
    });

    return <div class='dropdown'>
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subTitleClassName="caret"
      />
      <ul>
        {list}
      </ul>
    </div>
  }
});
