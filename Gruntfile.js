'use strict';

var env       = process.env.NODE_ENV || 'development',
    info      = require('./package'),
    configure = require('./config/grunt'),
    tasks     = require('./config/env/' + env).grunt.tasks,
    npmTasks  = require('matchdep').filterDev('grunt-*');

info.env = env;

module.exports = function(grunt) {
  npmTasks.forEach(grunt.loadNpmTasks);
  grunt.initConfig(configure(grunt, info, tasks));
  grunt.registerTask('default', ['env', 'build', 'connect']);
};