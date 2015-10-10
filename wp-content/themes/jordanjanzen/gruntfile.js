module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Javascript
    concat: { //Concatinate
      dev: {
        src: ['lib/js/dev/*.js'],
        dest: 'lib/js/production.js',
      }
    },

    uglify: { // Minify
      dist: {
        src: 'lib/js/production.js',
        dest: 'lib/js/production.min.js'
      }
    },

    // CSS, SASS, SCSS
    sass: {
      dev: { //Compile SASS/SCSS
        options: {
          style: 'expanded', //Use loud scss comments </*! Comment */> on theme details comment.
        },
        files: {
          'lib/style-human.css': 'lib/scss/main-style.scss'
        }
      },
      dist: { //Compile & Minify SASS/SCSS
        options: {
          style: 'compressed',
        },
        files: {
          'lib/style.css': 'lib/scss/main-style.scss',
        }
      }
    },

    autoprefixer: { //Vendor prefixes on compiled CSS
      options: {
        browsers: ['last 2 versions', '> 1%']
      },
      multiple_file: {
        options: {
          map: {
            inline: false
          }
        },
        expand: true,
        flatten: true,
        src: 'lib/*.css',
        dest: ''
      }
    },

    watch: { //Fire and forget
      scripts: {
        files: ['lib/js/dev/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          livereload: true,
        }
      },
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        }
      },
      php: {
        files: ['**/*.php'],
        options: {
          livereload: true,
        }
      },
      images: {
        files: ['**/*.jpg', '**/*.png','**/*.gif'],
        options: {
          livereload: true,
        }
      }
    }

  });


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default', ['watch']);
grunt.registerTask('buildjs', ['concat', 'uglify']);
grunt.registerTask('buildcss', ['sass', 'autoprefixer']);
};