module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
              options: {
                style: 'compressed'
              },
              files: {                
                'assets/css/style.css': 'assets/css/style.scss'
              }
            }
          },
        
        watch: {
            css: {
                files: 'assets/css/*.scss',
                tasks: ['sass']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['sass', 'watch']);
}