var horizontalBars = document.querySelectorAll('.bar-horizontal');
var verticalBars = document.querySelectorAll('.bar-vertical');
var container = document.getElementById('container');
var body = document.body;

function getHeight() {
  var style = container.currentStyle || window.getComputedStyle(container);
  return container.offsetHeight + 200;
}

function getWidth() {
  return body.offsetWidth;
}

function sizeBars() {
  var height = getHeight();
  var width = getWidth();

  for (var i = 0; i < horizontalBars.length; i++) {
    horizontalBars[i].setAttribute('style', 'width: ' + width + 'px');
  }

  for (var i = 0; i < verticalBars.length; i++) {
    verticalBars[i].setAttribute('style', 'height: ' + height + 'px');
  }
}

sizeBars();
window.addEventListener('resize', sizeBars, false);
