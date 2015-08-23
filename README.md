This project is about optimizing webpage responsive header.
Developer supplies different sizes for one or more different sizes
for one widget, for example menu or search etc.
Algorithm finds out best match to fill all available space
combining shorter or longer versions of widgets.

Basic HTML structure
========================

```html
<table class="container" style="visibility:hidden"><tr>
  <td>
    <div class="widget">...</div>
  </td>
  <td>
    <div class="widget">...</div>
    <div class="widget">...</div>
  </td>
  <td>
    <div class="widget">...</div>
    <div class="widget">...</div>
    <div class="widget">...</div>
  </td>
</tr></table>
```

How it works
========================

* Container has to be initially explicitly hidden and widgets will be inline-blocks temporarily so that widgets widths could be measured while not visible.
* Then container style will be removed and all widgets hidden.
* Then container will assume its desired width.
* Then algorithm knows desired width.
* Then algorithm will show onme widget from each common parent element.

Installation
========================

* Download [jQuery](https://jquery.com/download/)
* Download [throttle-debounce](https://github.com/cowboy/jquery-throttle-debounce)
* Download [responsive-header-js](https://github.com/ragnarkurm/responsive-header-js)

* load jQuery
* load throttle-debounce
* load responsive-header-js
* execute `responsiveHeader('.container', '.container .widget')`

API
========================

There is only on public function `responsiveHeader()`. It has two arguments:

1. Container selector
2. Widgets selector
