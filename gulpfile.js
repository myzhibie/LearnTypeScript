var gulp=require('gulp');
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var tsify=require('tsify');

var gutil=require('gulp-util');
var uglify=require('gulp-uglify');
var buffer=require('vinyl-buffer');
var sourcemaps=require('gulp-sourcemaps');
var gulpClean=require('gulp-clean');
var browserSync=require('browser-sync').create();
var paths={
  pages:['src/*.html']
};

// var ts=require('gulp-typescript');
// var tsProject=ts.createProject('tsconfig.json');

var browserify=browserify({
    basedir:'.',
    debug:true,
    entries:['src/index.ts'],
    cache:{},
    packageCache:{}
  })
  .plugin(tsify);

gulp.task('copy-html',['clean'],function(){
  return gulp.src(paths.pages)
    .pipe(gulp.dest("dist"));
});

gulp.task('copy-html:dev',function(){
   return gulp.src(paths.pages)
    .pipe(gulp.dest("tmp"));
});

gulp.task("clean",function(){
  return gulp.src("dist",{read: false})
         .pipe(gulpClean()); 
});
function bundle(){
  return browserify
  .bundle()
  .on('error',gutil.log)
  .pipe(source('bundle.js'))
  .pipe(gulp.dest("tmp"))
}

function build(){
   browserify
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps:true}))
  .pipe(uglify().on('error', gutil.log))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest("dist"));
}
gulp.task("bundle",function(){
  bundle();
});
gulp.task("serve",function(){
  browserSync.init({
    server:"./tmp"
  });
});
gulp.task('default',["copy-html:dev","bundle","serve"]);
gulp.task('reload',["copy-html:dev",'bundle'],function(){
  browserSync.reload();
});
gulp.task('build',["copy-html"],build);
gulp.watch('src/**',['reload']);


