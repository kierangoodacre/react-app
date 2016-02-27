var gulp = require('gulp');
var gutil = require('gulp-util'); //debugging
var source = require('vinyl-source-stream');
var browserfy = require('browserify'); //dependency mapping
var watchify = require('watchify'); //automatically re run gulp file when code changes, no gulp command
var reactify = require('reactify'); //handle converting jsx into js

gulp.task('default', function(){
  var bundler = watchify(browserfy({ //created bundler object
    entries: ['./src/app.jsx'], //first files to look too
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }))

  function build(file){ //telling bundler what to do
    if (file) gutil.log('Recompiling' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserfy Error')) //if there is ever an error in the file logged to console so we can debug
      .pipe(source('main.js')) //after bundler has ran put it on in single file main.js
      .pipe(gulp.dest('./')) //place file in current directory
  };
  build() //when run gulp it builds it
  bundler.on('update', build); //anytime a change is made it rebuilt
});
