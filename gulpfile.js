const gulp = require("gulp");
const pug = require("gulp-pug");
const production = false;
const browserSync = require("browser-sync");
const stream = browserSync.stream;
const reload = browserSync.reload;

gulp.task("pug", () => {
  return gulp
    .src("./src/pug/pages/*.pug")
    .pipe(
      pug({
        pretty: production ? false : true,
      })
    )
    .pipe(gulp.dest("./dev"))
    .pipe(stream());
});

gulp.task("default", () => {
  browserSync({
    server: "./dev",
  });
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug")).on("change", reload);
});
