This project is about optimizing webpage responsive header.
Developer supplies different sizes for one or more different sizes
for one widget, for example menu or search etc.
Algorithm finds out best match to fill all available space
combining shorter or longer versions of widgets.

Basic HTML structure
========================

`<table class="container" style="visibility:hidden"><tr>
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
</tr></table>`

How it works
========================

Container has to be initially explicitly hidden
and widgets will be inline-blocks temporarily
so that widgets widths could be measured while not visible.

Then container style will be removed and all widgets hidden.
Then container will assume its desired width.
Then algorithm knows desired width.
Then algorithm will show onme widget
from each common parent element.

Installation
========================

Download the js.
Download throttle/debounce (to prevent too frequent firing during window resizing).
https://github.com/cowboy/jquery-throttle-debounce

load throttle/debounde lib
load responsive-header js
responsiveHeader('.container', '.container .widget');
