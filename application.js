var Badge = React.createClass({displayName: "Badge",
  render:function(){
    return React.createElement("button", {className: "btn btn-primary", type: "button"},
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "thumbnail"},
      React.createElement("img", {src: this.props.imgUrl}),
      React.createElement("div", {className: "caption"},
        React.createElement("h3", null, this.props.header),
        React.createElement("p", null, this.props.description),
        React.createElement("p", null,
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null,
      list
    )
  }
});

var options = {
  thumbnailData: [{
    title: "See Tutorials",
    number: 32,
    header: "Learn React",
    description: "React is a fantastic way to build fast dynamic web pages React is a fantastic way to build fast dynamic web pages React is a fantastic way to build fast dynamic web pages React is a fantastic way to build fast dynamic web pages",
    imgUrl: 'http://formatjs.io/img/react.svg'
  },{
    title: "See Tutorials",
    number: 25,
    header: "Learn Gulp",
    description: "Gulp will speed up your dev workflow Gulp will speed up your dev workflow Gulp will speed up your dev workflow Gulp will speed up your dev workflow Gulp will speed up your dev workflow ",
    imgUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
  },]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.target'));
