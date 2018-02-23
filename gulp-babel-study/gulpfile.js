/* Base */
const gulp = require('gulp');
const data = require('gulp-data');
const watch = require('gulp-watch');
const debug = require('gulp-debug');

/* Plugin for webserver */
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/* Plugin for HTML */
const htmlmin = require('gulp-htmlmin');

/* Plugin for SASS */
const sass = require('gulp-sass');

/* Plugin for JS */
const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const util = require('gulp-util');

/* Task for HTML */
gulp.task('html', () => {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(reload({ stream: true }));
});

/* Task Build */
gulp.task('build', ['html', 'sass', 'js', 'font-awesome', 'images']);

/* Task for webserver */
const config = {
  server: {
    baseDir: "./build"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "bouncy"
};
gulp.task('webserver', () => browserSync(config));

/* Task SASS */
gulp.task('sass', () => {
  return gulp.src('./src/styles/main.scss')     //return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({ stream: true }));
});

/* Task JS */
gulp.task('js', () => {
  browserify({
    entries: './src/js/main.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['env']
    })]
  })
  .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({ stream: true }));
});

/* Task Font-awesome */
gulp.task('font-awesome', () => {
  gulp.src(
    './src/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.*')
    .pipe(gulp.dest('./build/fonts/'))
});

/* Task Images */
gulp.task('images', () => {
  gulp.src(
    './src/img/**/*')
    .pipe(gulp.dest('./build/img'))
});

/* Task Watch */
gulp.task('watch', () => {
  watch('./src/*.html', () => gulp.run('html'));
  watch('./src/styles/**/*.scss', () => gulp.run('sass'));
  watch('./src/js/*.js', () => gulp.run('js'));
  watch('./src/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.*', () => gulp.run('font-awesome'));
  watch('./src/img/**/*', () => gulp.run('images'));
});

/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);