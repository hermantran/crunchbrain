module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['js/**/*.js', '!js/main.min.js', '!js/libs/**/*']
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
          mainConfigFile: "js/main.js",
          out: "js/main.min.js"
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