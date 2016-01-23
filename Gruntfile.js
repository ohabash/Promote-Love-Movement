module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    //watch
    watch: {
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass'],
      },
    },


    // Minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/dist/css',
          ext: '.min.css'
        }]
      }
    },



    // sass
      sass: {
        dist: {
          files: {
            'assets/dist/css/style.css': 'assets/scss/*.scss'
          }
        }
      }






  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // grunt.registerTask('test', ['jshint', 'qunit']);
  //
  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
