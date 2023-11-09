const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("build-css", () => {
  return gulp
    .src("src/public/assets/css/*.css")
    .pipe(concat("hexagon.min.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-icon", () => {
  return gulp.src("src/public/hexagons.ico").pipe(gulp.dest("dist"));
});

gulp.task("build-js", function () {
  return gulp
    .src(["src/HexagonCell.js", "src/HexagonField.js"])
    .pipe(
      babel({
        presets: [["@babel/env", { modules: "umd" }]],
      })
    )
    .pipe(concat("hexagon.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("session-start", (cb) => {
  return gulp.series("build-css", "build-js", "copy-icon")(cb);
});

gulp.task("watch", () => {
  browserSync.init({
    server: "dist",
    port: 4000,
    directory: true,
  });

  gulp.watch(
    "src/public/assets/css/*.css",
    gulp.series("build-css"),
    browserSync.reload
  );
  gulp.watch("src/*.js", gulp.series("build-js"), browserSync.reload);
  gulp.watch("dist/index.html", browserSync.reload);
});

gulp.task("default", gulp.series("session-start"));
