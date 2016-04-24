/*global module */

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    clean: {
      dev: ['dist/dev/*']
    },
    copy: {
      dev: {
        files: [
          {
            'dist/dev/index.html': 'index.html'
          }
        ]
      }
    },
    ts: {
      dev: {
        tsconfig: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask('dev', ['clean:dev', 'copy:dev', 'ts:dev']);
  grunt.registerTask('default', 'dev');
};
