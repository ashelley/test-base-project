var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./public')
        .pipe(webserver({
        	fallback: 'index.html',
        	port: process.env.PORT || 3000
        }));
});
