// const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  content: ['./dist/index.html'],
  css: ['./dist/css/style.css'],
  keyframes: true,
  variables: true,
  output: ['./dist/css/style.min.min.css']
}
