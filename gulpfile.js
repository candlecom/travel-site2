var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray")
});

gulp.task('html', function() {
  console.log("imagine");
});

gulp.task('styles', function() {
  console.log("Imagine SASS");
})

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');

  });


  watch('./app/assets/styles/**/*', function() {
    gulp.start('styles');
  });

});
