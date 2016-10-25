module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dev: {
				files: {
					'build/app.js': ['js/app.jsx']
				},
				options: {
					transform: [
						'babelify', 'reactify'
					]
				},
			}
		},
		watch: {
			src: {
				files: ['js/**/*.js', 'js/**/*.jsx', '!source/build/app.js'],
				tasks: ['browserify:dev'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			dev: {
				options: {
					hostname: 'localhost',
					port: 7012,
					open: true
				}
			}
		},
		express :{
			dev:{
				options: {
					script: 'server.js'
				}
			}
		},
		minified : {
			files: {
				src: [
				'build/app.js',
				],
				dest: 'build/min/'
			},
			options : {
				sourcemap: false,
				allinone: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-minified');
	grunt.registerTask('start:dev', ['browserify', 'express', 'watch']);

	grunt.registerTask('default', 'browserify');
};
