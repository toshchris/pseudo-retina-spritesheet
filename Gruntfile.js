module.exports = function(grunt) {
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  sprite: {
    main: {
      src: ['css/images/icons/*.png'],
      dest: 'css/images/spritesheet.png',
      retinaSrcFilter: ['css/images/icons/*@2x.png'],
      retinaDest: 'css/images/spritesheet@2x.png',
      destCss: 'scss/_spritesmith-build.scss',
      cssTemplate: 'spritesmith-retina-mixins.template.mustache'
    }
  },

  sass: {
    dist: {
      files: {
        '/css/base.css' : 'css/base.scss'
      }
    }
  },

  notify: {
    watch: {
      options: {
        title: 'Task Complete',  // optional
        message: 'SASS compiled!', //required
      }
    }
  },

  watch: {
    css: {
      files: '**/*.scss',
        tasks: ['sass'],
        title: 'Task Complete',  // optional
        message: 'SASS compile finished', //required
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default',['watch', 'notify:sass']);
}
