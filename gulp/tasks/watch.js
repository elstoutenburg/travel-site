const gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("html", () => {
  console.log("ran");
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
