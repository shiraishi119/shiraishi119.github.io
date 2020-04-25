// JavaScript Document
var nimgTopMarginX = 30;
var nimgTopMarginY = 15;
var nScrollBarWidth = 16;
var nScrollBarHeight = 16;
var nVersion = 3;
var nInterval = 100;
function SetUp() {
  nVersion = parseInt(navigator.appVersion);
  if (nVersion >= 4) {
    if (navigator.appName == "Microsoft Internet Explorer") {
      window.setInterval("imgTopMove_Explorer();", nInterval);
    } else {
      layerTop = document.layers["lyrTop"];
      window.setInterval("imgTopMove_Navigator();", nInterval);
    }
  }
}
function imgTopMove_Explorer() {
  if (document.body.scrollLeft == 0 && document.body.scrollTop == 0) {
    imgTop.style.pixelTop = -100;
  } else {
    nimgTopOriginX =
      document.body.clientWidth +
      document.body.scrollLeft -
      imgTop.width -
      nimgTopMarginX;
    nimgTopOriginY =
      document.body.clientHeight +
      document.body.scrollTop -
      imgTop.height -
      nimgTopMarginY;
    imgTop.style.pixelLeft = nimgTopOriginX;
    imgTop.style.pixelTop = nimgTopOriginY;
  }
}
function imgTopMove_Navigator() {
  if (window.pageXOffset == 0 && window.pageYOffset == 0) {
    layerTop.top = -100;
  } else {
    nimgTopOriginX =
      window.innerWidth +
      window.pageXOffset -
      layerTop.clip.width -
      nimgTopMarginX;
    nimgTopOriginY =
      window.innerHeight +
      window.pageYOffset -
      layerTop.clip.height -
      nimgTopMarginY;

    if (window.scrollbars) {
      nimgTopOriginX -= nScrollBarWidth;
      nimgTopOriginY -= nScrollBarHeight;
    }
    layerTop.left = nimgTopOriginX;
    layerTop.top = nimgTopOriginY;
  }
}
