var gulp = require('gulp')
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('copy-task', function() {
    return gulp.src(['README.md', 'package.json', 'LICENSE'])
        .pipe(gulp.dest('./dist'))
})

gulp.task('compile-ts', function() {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist'))
})

gulp.task('default', function() {
    gulp.run('copy-task')
    gulp.run('compile-ts')
})

// var gulp = require('gulp')
// var browserify = require("browserify")
// var source = require('vinyl-source-stream')
// var tsify = require("tsify")
// var uglify = require('gulp-uglify')
// var sourcemaps = require('gulp-sourcemaps')
// var buffer = require('vinyl-buffer')
// var paths = {
//     common_root: ['README.md', 'package.json', 'LICENSE', 'index.js'],
//     pages: ['src/*.html']
// }

// gulp.task("copy-common-root", function() {
//     return gulp.src(paths.common_root)
//         .pipe(gulp.dest("dist"))
// })

// gulp.task('default', ['copy-common-root'], function() {
//     return browserify({
//             basedir: '.',
//             debug: true,
//             entries: ['index.ts'],
//             cache: {},
//             packageCache: {}
//         })
//         .plugin(tsify, {
//             target: "es2015",
//             noImplicitAny: false,
//             lib: ["es2015", "DOM", "ScriptHost"],
//             outDir: "./dist",
//             rootDir: ".",
//             sourceMap: true,
//             declaration: true,
//             experimentalDecorators: true,
//             module: "commonjs"
//         })
//         .transform('babelify', {
//             presets: ['es2015'],
//             extensions: ['.ts']
//         })
//         .bundle()
//         .on('error', function(error) { console.error(error.toString()); })
//         //.pipe(process.stdout)
//         .pipe(source('bundle.js'))
//         .pipe(buffer())
//         .pipe(sourcemaps.init({
//             loadMaps: true
//         }))
//         // .pipe(uglify())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest("dist"))
// })