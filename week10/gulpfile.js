import gulp from 'gulp';
import gulpSass  from 'gulp-sass';
import dartSass from 'sass';
const scss = gulpSass(dartSass);
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})
}

function styles() {
	return gulp.src('app/scss/style.scss')
		.pipe(scss({
			outputStyle: 'compressed'
		}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			grid: true
		}))
		.pipe(gulp.dest('app/css/'))
		.pipe(browserSync.stream())
}


function watching() {
	gulp.watch([
		'app/scss/**/*.scss',
	], styles);
	gulp.watch(['app/**/*.html']).on('change', browserSync.reload);
	gulp.watch(['app/js/**/*.js']).on('change', browserSync.reload);
}

export default gulp.parallel(styles, browsersync, watching);