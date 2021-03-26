const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scc into css
function style() {
	// 1. where is my scss file
	return (
		gulp
			.src('./src/assets/scss/**/*.scss')
			// 2. pass taht file through sass compiler
			.pipe(sass().on('error', sass.logError))
			// 3. where do I save the compiled CSS?
			.pipe(gulp.dest('./src/assets/css'))
			// 4. stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './',
		},
	});

	gulp.watch('./src/assets/scss/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
