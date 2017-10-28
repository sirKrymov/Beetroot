/* Base plugin */
var gulp = require('gulp');
var data = require('gulp-data');
var watch = require('gulp-watch');
var debug = require('gulp-debug');
var styleInject = require("gulp-style-inject"); /* Plugin import inline CSS in HTML */

var pug = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');

/* Plugin for webserver*/
var browserSync = require("browser-sync");
var reload = browserSync.reload;

/* Stylus plugin */
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

/*Sourcemaps */
var sourcemaps = require('gulp-sourcemaps');

/* Plugin for JS */
var notify = require("gulp-notify");
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

var rigger = require('gulp-rigger'); /* Plugin import parts to file*/
var  newer = require('gulp-newer'); /*  Plugin look for new changes in files */
var remember = require('gulp-remember'); /*  Plugin look for new changes in files */
var plumber = require('gulp-plumber'); /* Plugin show Error in code*/
var clean = require('gulp-clean'); /* Plugin delete some folder, content */

/* Plugin for Images */
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


/*Task for webserver*/
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "gorbuz9kin"
};

gulp.task('webserver', function () {
    browserSync(config);
});

/* Task for HTML */
gulp.task('html', function () {
	return gulp.src('./src/templates/*.pug')
		.pipe(plumber({errorHandler:
			notify.onError(function (err) {
				return {
					title: 'pug',
					message: err.message
				};
			})
		}))
        .pipe(pug({
			pretty: true
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build/'))
		.pipe(reload({stream: true}));
});

/* Task for CSS */
gulp.task('css', function () {
	return gulp.src('./src/css/main.styl')
		.pipe(plumber({errorHandler:
			notify.onError(function (err) {
				return {
					title: 'css',
					message: err.message
				};
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(stylus({
			'include css': true,
			compress: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'))
		.pipe(reload({stream: true}));
});


/* Task for JS */
gulp.task('js', function () {
    gulp.src('./src/js/main.js')
        .pipe(rigger())
        .pipe(plumber({errorHandler:
            notify.onError(function (err) {
                return {
                    title: 'js',
                    message: err.message
                };
            })
        }))
	    .pipe(babel({
		    presets: ['es2015']
	    }))
        .pipe(uglify('main.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(reload({stream: true}));
});


/* Task for PHP */
gulp.task('php', function () {
    gulp.src('./src/php/**/*.php')
        .pipe(newer('./build/'))
        .pipe(gulp.dest('./build/php/'))
        .pipe(reload({stream: true}));
});


/* Task for Libs */
gulp.task('libs', function () {
    gulp.src('./src/libs/**/*.*')
        .pipe(newer('./build/libs/'))
        .pipe(gulp.dest('./build/libs/'))
        .pipe(reload({stream: true}));
});


/* Task for Images */
gulp.task('image', function () {
    gulp.src('./src/img/**/*.*')
        .pipe(newer('./build/img/'))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('./build/img/'))
        .pipe(reload({stream: true}));
});


/* Task for Fonts */
gulp.task('fonts', function() {
    gulp.src('./src/fonts/**/*.*')
        .pipe(newer('./build/fonts/'))
        .pipe(gulp.dest('./build/fonts/'))
});

/* Task for folder Vendor */
gulp.task('vendor', function() {
	gulp.src('./src/vendor/**/*.*')
		.pipe(newer('./build/vendor/'))
		.pipe(gulp.dest('./build/vendor/'))
});

/* Task for file .htaccess */
gulp.task('htaccess', function() {
    gulp.src('./src/.htaccess')
        .pipe(gulp.dest('./build/'))
});


/* Task Build */
gulp.task('build', ['html', 'css', 'js', 'php', 'libs', 'fonts', 'image', 'vendor', 'htaccess']);


/* Task Watch */
gulp.task('watch', function(){
    watch('src/templates/**/*.pug', function() {
        gulp.run('html');
    });
    watch('src/css/**/*.styl', function() {
        gulp.run('css');
    });
    watch('src/js/**/*.js', function() {
        gulp.run('js');
    });
    watch('src/**/*.php', function() {
        gulp.run('php');
    });
    watch('src/libs/**/*.*', function() {
        gulp.run('libs');
    });
    watch('src/fonts/**/*.*', function() {
        gulp.run('fonts');
    });
    watch('src/img/**/*.*', function() {
        gulp.run('image');
    });
	watch('src/vendor/**/*.*', function() {
		gulp.run('vendor');
	});
    watch('src/.htaccess', function() {
        gulp.run('htaccess');
    });
});


/* Task Default */
gulp.task('default', ['build', 'webserver', 'watch']);


/* Task Clean (delete folder [build/]) */
gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

