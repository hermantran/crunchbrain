module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['js/**/*.js', '!**/*.min.js', '!js/libs/**/*.js']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'css/style.min.css': 'scss/main.scss'  
        }
      }
    },
    
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "js/",
          paths: {
            jquery: 'empty:',
            backbone: 'empty:',
            underscore: 'empty:',
            requireLib: 'libs/require.min'
          },
          mainConfigFile: "js/main.js",
          include: ['requireLib'],
          out: "js/dist/main.min.js"
        }
      }
    },
    
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
};