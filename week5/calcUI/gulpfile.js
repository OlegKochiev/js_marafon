const {
	src,
	dest,
	watch,
	parallel
} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})
}

function styles() {
	return src('app/scss/style.scss')
		.pipe(scss({
			outputStyle: 'compressed'
		}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			grid: true
		}))
		.pipe(dest('app/css/'))
		.pipe(browserSync.stream())
}


function watching() {
	watch([
		'app/scss/**/*.scss',
	], styles);
	watch(['app/**/*.html']).on('change', browserSync.reload);
	watch(['app/js/**/*.js']).on('change', browserSync.reload);
}


exports.browsersync = browsersync;
exports.styles = styles;
exports.watching = watching;

exports.default = parallel(styles, browsersync, watching);