'use strict';

var gulp            = require('gulp');
var gutil           = require('gulp-util');
var livereload      = require('gulp-livereload');
var webpack         = require('webpack');
var webpackConfig   = require('./webpack.config.js');


var devCompiler;

gulp.task('webpack:build-dev', function(done) {
  if (!devCompiler) {
    var myDevConfig = Object.create(webpackConfig);
    myDevConfig.devtool = 'sourcemap';
    myDevConfig.debug = true;
    devCompiler = webpack(myDevConfig);
  }

  devCompiler.run(function(err, stats) {
    if (err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({colors: true}));
    done();
  });
});

gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['application/**'], ['livereload-build']);
});

gulp.task('livereload-build', ['webpack:build-dev'], function() {
  livereload.changed();
});
