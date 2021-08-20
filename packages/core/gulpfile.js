const { src, dest, watch, parallel } = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  emitDeclarationOnly: true,
});

const compileCode = () => src('src/**/*').pipe(babel()).pipe(dest('dist'));

const generateDeclarations = () =>
  src('src/**/*').pipe(tsProject()).pipe(dest('dist'));

module.exports = {
  compileCode,
  generateDeclarations,
  watch: () => watch('src/**/*', parallel(compileCode, generateDeclarations)),
};
