module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: 'src/<%= pkg.name %>.js',
            tasks: ['jshint'],
        },

        jshint: {
            options: {jshintrc: '.jshintrc'},
            src: 'src/<%= pkg.name %>.js'
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', 'watch');
};
