// LibSass Compiling

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['assets/css/**/*.{scss,sass}','assets/css/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'assets/js/**/*.{js,json}', 'assets/css/*.css','assets/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: false
        }
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/main.css': 'assets/css/main.sass'
        }
      }
    }
  });
  grunt.registerTask('default', ['watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};