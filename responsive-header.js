// private
// main algorithm to elect widgets
function responsiveHeaderCombine(collections, size) {

  // init combinations
  var combinations = [{
    'size': 0,
    'widgets': {},
  }];

  // grow list, find all possible combinations
  // find out total size
  for (var cid in collections) {
    if (Object.keys(collections[cid]).length == 0) {
      continue;
    }
    var combinations_new = [];
    for (var wid in collections[cid]) {
      for (var ci in combinations) {
        var n = jQuery.extend(true, {}, combinations[ci]); // clone dict
        n['size'] += collections[cid][wid];
        n['widgets'][wid] = true;
        combinations_new.push(n);
      }
    }
    combinations = combinations_new;
  }

  // filter out best and min match
  var best_s = 0;
  var best_w = {};
  var min_s = 10000; // arbitrary big nr
  var min_w = {};
  for (var c in combinations) {
    c = combinations[c];
    cs = c['size'];
    if (best_s < cs && cs <= size) {
      best_s = cs;
      best_w = c['widgets'];
    }
    if (cs < min_s) {
      min_s = cs;
      min_w = c['widgets'];
    }
  }

  return best_s > 0 ? best_w : min_w;
}

// private
function responsiveHeader2(conf) {

  // need to hide widgets initially
  // since they strech container initially
  conf['widgets'].hide();
  // elect widgets to be shown
  var elected = responsiveHeaderCombine(conf['collections'], conf['container'].width());

  // make widgets visible or hidden
  conf['widgets'].each(function(i) {
     var widget = jQuery(this);
     var wid = widget.attr('id');
     if (elected[wid]) {
       widget.show();
     }
  });

}

// this is public function
function responsiveHeader(container_selector, widgets_selector) {

  var conf = {
    'collections': {},
    'widgets': jQuery(widgets_selector),
    'container': jQuery(container_selector),
  }

  var id = 1;
  conf['widgets'].each(function(i) {
      var widget = jQuery(this);
      var wid = widget.attr('id');
      // need to have inline-block for width
      // otherwise block will have 100%
      widget.attr('style', 'display:inline-block');
      var w = widget.outerWidth(true);
      widget.removeAttr('style');
      var p = widget.parent().get(0);
      var cid;
      if (p.collection_id) {
        cid = p.collection_id;
      } else {
        cid = id++;
        p.collection_id = cid;
        conf['collections'][cid] = {};
      }
      conf['collections'][cid][wid] = w;
  });

  // remove hidden style
  conf['container'].removeAttr('style');

  var action = function(){responsiveHeader2(conf);}
  // some devices need tis
  // since they dont generate resize event in the beginning
  action();
  // throttle not to fire too frequently
  jQuery(window).resize(jQuery.throttle(250,action));

}
