module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      src: ['Counter.js', 'tests/testingObjtest.js'],
      options: {
        node: true
      }
    },

    simplemocha: {
      src: ['tests/testingObjtest.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
