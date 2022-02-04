var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass')(require('sass'));
var imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
  return gulp.src('./web-push/scss/index.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./web-push/css/try.css'))
});
gulp.task('sass2', function(){
  return gulp.src('./web-push-admin/scss/index.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./web-push-admin/css'))
});
gulp.task('animation', function(){
  return gulp.src('./web-push/scss/animation.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./web-push/css'))
});


// image minify
gulp.task('image', function(){
        return gulp.src('./web-push/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./web-push/assets'))
});
gulp.task('image-admin', function(){
  return gulp.src('./web-push-admin/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./web-push-admin/img'))
});

gulp.task('watch', function(){
        gulp.watch('./web-push/scss/index.scss',['sass']);
});