'use strict';

var fs = require('fs');

module.exports = function(grunt, pkg, tasks) {

  grunt.registerTask('env', function() {
    grunt.log.writeln(['Package:', pkg.name.bold].join('\t'));
    grunt.log.writeln(['Version:', pkg.version.bold].join('\t'));
    grunt.log.writeln(['Environment:', pkg.env.bold].join('\t'));
  });

  grunt.registerTask('build', tasks.build);

  return {

    copy: {
      core: {
        files: [
          { expand: true, cwd: 'assets/vendor/', src: ['**'], dest: 'build/assets/vendor/' },
          { expand: true, cwd: 'bower_components/', src: ['**'], dest: 'build/bower_components/' },
          { expand: true, cwd: 'client/core', src: ['app.html'], dest: 'build/' }
        ]
      }
    },

    browserify2: {
      core: {
        entry: './client/core/app.js',
        compile: './build/client/core/app.js',
        debug: pkg.env === 'development'
      }
    },

    emberTemplates: {
      core: {
        files: {
          'build/client/core/templates.js': ['client/core/**/*.hbs', 'client/core/**/*.handlebars']
        }
      }
    },

    concat: {
      core: {
        src: [
          'build/assets/vendor/jquery/jquery.scrollTo-1.4.3.1-min.js',
          'build/bower_components/handlebars/handlebars.runtime.js',
          'build/bower_components/ember/ember.js',
          'build/bower_components/ember-restless/dist/ember-restless+extras.js',
          'build/client/core/app.js',
          'build/client/core/templates.js'
        ],
        dest: 'build/client/core/app.js'
      }
    },

    uglify: {
      core: {
        files: {
          'build/client/core/app.js': ['build/client/core/app.js']
        }
      }
    },

    cssmin: {
      core: {
        files: {
          'build/assets/styles/core/app.css': ['assets/styles/core/normalize.css', 'assets/styles/core/app.css']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          base: 'build',
          middleware: function(connect, options, middlewares) {
            middlewares.unshift(function(req, res, next) {
              if(!/(?:\.js|\.css)/.test(req.url)) {
                fs.readFile('build/app.html', function (err, data) {
                  if (!err) {
                    res.end(data);
                  }
                });
              } else {
                next();
              }
            });

            return middlewares;
          }
        }
      }
    }

  };
};