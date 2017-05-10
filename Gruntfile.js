module.exports = function(grunt) {
		grunt.initConfig({
			sass: {
				dist: {
					files: {
						'public/css/style.css' : 'public/scss/style.scss' //’destination’: ‘source’
					}
				}
			}
		});
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};

