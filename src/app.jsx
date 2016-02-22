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
