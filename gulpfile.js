var gulp = require('gulp');
var util = require('gulp-util');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

function bundle(bundler) {
    return bundler
    .bundle()
    .on('error', (error) => util.log(util.colors.red('Error compiling scripts:'), error.message))
    .pipe(source('./app.js'))
    .pipe(gulp.dest('./'));
}

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['lint', 'scripts']);

gulp.task('lint', function() {
    gulp.src('./src/**/*.js')
    .pipe(eslint());
});

gulp.task('scripts', ['lint'], function() {
    var bundler = browserify({
        entries: ['./src/app.js'],
        cache: {},
        packageCache: {},
        fullPaths: true,
    });

    var watcher = watchify(bundler, {poll: true});
    watcher.on( 'update', () => {
        util.log( 'Now Updating Scripts...');
        return bundle(watcher);
    });

    return bundle(watcher);
})

gulp.task('watch', ['build'], function() {
    gulp.watch(['./src/**/*.js'], ['lint']);
})
