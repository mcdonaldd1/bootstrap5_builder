# Sass Basics
sass_file.sass

scss_file.scss

css_file.css

## Transpiling
watch - v - run

# Sass Features
* `Sass Syntax`
* `Scss/css Syntax`

* `$variables`

* `&:Parent selector`
* `Nesting`

* `_partial.scss`
* `@import 'partial'`
* `@use 'partial'`

* `@functions`
* `@return`

* `@mixin mix-name`
* `@include mix-name`

* `@extend existing-selector`

* `operators`

## * Comments
* Loud    : /* to css */
* Silent  : // sass only
* Document: /// used for documentation

# Sass Advanced
* @if
* @each
* @for
* @while
* @use"sass:math"

# Sass and scss
* sass and scss are the same thing using a different syntax.
* css came first, and had limitations
* sass came next, solved many problems, but introduced an unpopular (unfairly so) syntax
* scss allows css syntax in sass. You can rename a .css file to .scss and it will work with sass.
* Use scss

# Sass and css
* The features of Sass are used to overcome the limitations of css, and to enrich its language.
* Sass should be used, even on small projects. It's simple and efficient. Learn it.

# Sass 7-1 Architecture
* `7-1` is an architecture that splits scss into module files.
* The module files are imported together, using a main file.
* Splitting code into modules eases development efforts, even though it looks like extra work.

## abstract
* functions
* mixins
* variables

## animation
* animate
* animations
* hint
- hover

## base
* normalize
* reset
* typography
- color_theme
- base_styles

## elements
* anchor
* buttons
* elements
* forms
* tables
- hr
- lists
- borders

## layouts
* bs-grid
* my-grid
* skeleton
- queries

## sections
- header
- navbar
- main
- sidebar
- footer

## vendors
* bootstrap
* bulma
* fontawesome-all
* jquery-ui
* normalize
* skeleton
* w3

## pages
home
about
contact

## components
landing
jumbotron
carosel
slider

## utility
print
pagged
reader
