# Icon libraries
- [Bootstrap 5 (css/font)](#bootstrap5)
- [Feather - js](#feather)
- [Tabler (css/font)](#tabler)
- [SVG basics](#svg-basics)
- [Icon Demo page](#icon-demo)

<h1>Summary</h1>
<p></p>

<hr width="75%"/> <!-- section break -->

# Bootstrap5

## sourcing:
### npm
``` shell
> npm i --save bootstrap-icons
```
### download
[Bootstrap5 icons home](https://icons.getbootstrap.com/)

[Download Icons](https://github.com/twbs/icons/archive/v1.8.0.zip)

### cdn
`https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/bootstrap-icons.svg`

`https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css`

## asset files:
* `fonts/`bootstrap-icons.woff
* `fonts/`bootstrap-icons.woff2
* `icons/`*icon.svg
* bootstrap-icons.css
* bootstrap-icons.scss
* bootstrap-icons.svg

## build files:
* `css/`bootstrap-icons.css
* `fonts/`bootstrap-icons.woff
* `fonts/`bootstrap-icons.woff2
* `sprites/`bootstrap-icons.svg
* `icons/`*icon.svg

## common use:
### setup
#### `html`
``` html
<link href="./css/bootstrap-icons.css">
```
#### `css`
``` css
  @font-face {
    font-family: "bootstrap-icons";
    src: url("./fonts/bootstrap-icons.woff2")
  }
```
#### `font`
- nothing to add

### create
``` html
  <i class="bi bi-icon-name"></i>
```

### add to:
``` html
<div>
<button>
<a>
```

## styling:
### color
* text-color

### size
* Display-1 - Display-4

###
* ?

### fill
* ?

### tansform
* ?

<hr width="75%"/> <!-- section break -->

# Feather

## sourcing:
### npm
``` shell
> npm i --save feather-icons
```
### download
[Feather icons home](https://feathericons.com/)

[Git-hub](https://github.com/feathericons/feather)

### cdn
`https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js`

## asset files:
* `icons/`*icons.svg
* feather-sprite.svg
* feather.js
* feather.js.map
* feather.min.js
* feather.min.js.map
* icons.json

## build files:
* `js/`feather.min.js
* `js/`feather.min.js.map
* `icons/`*icons.svg
* `sprites/`feather-sprite.svg

## common use:

### setup
#### `html - head`
``` html
<!-- CDN or Local pick one -->
<script src="https://unpkg.com/feather-icons"></script>
<script src="../js/feather.min.js"></script>
```
#### `html - body`
``` html
<script>
  feather.replace()
</script>
```

### create
``` html
<i class="i" data-feather="icon-name"></i>
  ```

### add
* div
* button
* a

## styling:

### color

### size

###
* ?

### fill
* ?

### tansform
* ?

<hr width="75%"/> <!-- section break -->

# Tabler

## sourcing:
### npm
``` shell
> npm i --save tabler-icons
```
### download
[Tabler icons home](https://tabler-icons.io/)

[Download Tabler](https://github.com/tabler/tabler-icons/releases/download/v1.53.0/tabler-icons-1.53.0.zip)

### cdn
`https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.35.0/iconfont/tabler-icons.min.css`

## asset files:
* `iconfont/fonts/`tabler-icons.eot
* `iconfont/fonts/`tabler-icons.svg
* `iconfont/fonts/`tabler-icons.ttf
* `iconfont/fonts/`tabler-icons.woff
* `iconfont/fonts/`tabler-icons.woff2
* `iconfont/`tabler-icons.css
* `iconfont/`tabler-icons.html
* `iconfont/`tabler-icons.min.css
* `iconfont/`tabler-icons.scss
* `icons/`*icons.svg
* `icons-png`/*icons.png
* tabler-sprite-nostroke.svg
* tabler-sprite.svg
* tags.json

## build files:
* `fonts/`tabler-icons.eot
* `fonts/`tabler-icons.ttf
* `fonts/`tabler-icons.woff
* `fonts/`tabler-icons.woff2
* `css/`tabler-icons.css
* `css/`tabler-icons.min.css
* `icons/`tabler-icons.svg
* `icons/`*icons.svg
* `icons-png`/*icons.png
* `sprites/`tabler-sprite-nostroke.svg
* `sprites/`tabler-sprite.svg

## common use:

### setup

#### html
``` html
<!-- CDN or Local pick one -->
<link rel="stylesheet" href="../css/tabler-icons.css">
```

#### css
``` css
@font-face {
  font-family: "tabler-icons";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/tabler-icons.eot");
  src: url("../fonts/tabler-icons.eot?#iefix") format("embedded-opentype"), url("../fonts/tabler-icons.woff2") format("woff2"), url("../fonts/tabler-icons.woff") format("woff"), url("../fonts/tabler-icons.ttf") format("truetype"), url("../icons/tabler-icons.svg#tabler-icons") format("svg");
}
```

### create
``` html
 <i class="ti ti-activity"></i>
  ```

### add
* div
* button
* a

## styling:

### color

### size

###
* ?

### fill
* ?

### tansform
* ?

<hr width="75%"/> <!-- section break -->

# SVG basics
1) Use as a `sprite` when you want to change quickly between different svg images. Typical use is to use a game character sprite. One file is loaded and you only show the part that you want to.

2) Use as `embeded` when you want full control over the image. This option lets you manipulate the svg in as many ways possible. You need to embed the svg if you want to animate it.

## sprite
``` html

<svg width="45" height="45">
  <use href="../icons/sprite-file.svg#icon-name" />
</svg>

<svg width="24" height="24">
  <use xlink:href="../icons/sprite-file.svg#icon-name" />
</svg>

```

## embeded
``` html

<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-activity" width="24" height="24"
  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
  stroke-linejoin="round" id='svg-1'>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3 12h4l3 8l4 -16l3 8h4" />
</svg>

```

## options available to customize
1) width
2) height
3) fill
4) class
5) viewBox
5) stroke
6) stroke-weight

<hr width="75%"/> <!-- section break -->

# Icon demo

## html
## css/styles
## filter-search
## style-changer
