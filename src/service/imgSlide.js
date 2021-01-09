var slide = () => {
  var wrap = document.querySelector('.img_slide');
  var target = wrap.children[0];
  var len = target.children.length;
  var liStyle = `
                position:absolute;
                left:0;right:0;top:0;bottom:0;transition:1s;opacity:0
                `;
  target.style.cssText = `position:relative;`;
  Array.from(target.children).forEach(function (ele) {
    ele.style.cssText = liStyle;
  });
  target.children[0].style.opacity = 1;
  let pos = 0;
  setInterval(function () {
    target.children[pos].style.opacity = 0;
    pos = (pos + 1) % len;
    target.children[pos].style.opacity = 1;
  }, 6000);
};

export default slide;
