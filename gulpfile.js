var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	combineMq = require('gulp-combine-mq'),
	watch = require('gulp-watch');



//scripts task 

gulp.task('scripts', function () {	
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minified/'));
});

//styles
gulp.task('style', function () {
	return sass('scss/*', ({style: 'compressed'}))
    .on('error', sass.logError)
    .pipe(combineMq({ beautify: false }))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function (cb) {

	
	gulp.watch('scss/*.scss', ['style']);
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('bower_components/bootstrap-sass/assets/**/*.scss', ['style']);
   
});


gulp.task('default', ['scripts', 'style']);