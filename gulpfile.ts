import { src, dest, watch } from "gulp";
import filter from "gulp-filter";
import htmlmin from "gulp-htmlmin";
import cleancss from "gulp-clean-css";
import terser from "gulp-terser";
import sourcemaps from "gulp-sourcemaps";
import jsonminify from "gulp-jsonminify";

const PUBLIC_SRC = "public/**/*";
const PUBLIC_DEST = "dist";

const htmlminOptions: Parameters<typeof htmlmin>[0] = {
  caseSensitive: true,
  collapseWhitespace: true,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
};

const filterOptions: filter.Options = { dot: true, restore: true };

export function devPublic() {
  const cssFilter = filter("**/*.css", filterOptions);
  const jsFilter = filter("**/*.js", filterOptions);
  const jsonFilter = filter("**/*.json", filterOptions);
  return src(PUBLIC_SRC)
    .pipe(cssFilter)
    .pipe(sourcemaps.init())
    .pipe(cleancss())
    .pipe(sourcemaps.write("."))
    .pipe(cssFilter.restore)
    .pipe(jsFilter)
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(jsFilter.restore)
    .pipe(jsonFilter)
    .pipe(jsonminify())
    .pipe(jsonFilter.restore)
    .pipe(dest(PUBLIC_DEST));
}
export function buildPublic() {
  const htmlFilter = filter("**/*.html", filterOptions);
  const cssFilter = filter("**/*.css", filterOptions);
  const jsFilter = filter("**/*.js", filterOptions);
  const jsonFilter = filter("**/*.json", filterOptions);
  return src(PUBLIC_SRC)
    .pipe(htmlFilter)
    .pipe(htmlmin(htmlminOptions))
    .pipe(htmlFilter.restore)
    .pipe(cssFilter)
    .pipe(cleancss())
    .pipe(cssFilter.restore)
    .pipe(jsFilter)
    .pipe(terser())
    .pipe(jsFilter.restore)
    .pipe(jsonFilter)
    .pipe(jsonminify())
    .pipe(jsonFilter.restore)
    .pipe(dest(PUBLIC_DEST));
}

export function watchPublic() {
  devPublic();
  watch(PUBLIC_SRC, devPublic);
}
