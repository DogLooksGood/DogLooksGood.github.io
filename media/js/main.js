$(document).ready(function() {
  // Use highlight.js for code highlighting.
  var hlf = function() {
    Array.prototype.forEach.call(document.querySelectorAll('pre.src'), function(block) {
      var css,lang;
      css = block.getAttribute('class');
      lang = css.replace(/src-?| /g, '');
      if (lang == 'js') {
        lang = 'javascript';
      }
      block.setAttribute('class', css + ' ' + lang);
      hljs.highlightBlock(block);});
  };
  addEventListener('DOMContentLoaded', hlf);
  addEventListener('load', hlf);
});
