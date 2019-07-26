//documentReadyStart
document.addEventListener("DOMContentLoaded", () => {
  //add Fixed
  (function addFixed() {
    document.querySelector("#GameCanvas").style.position = "relative";
    document.querySelector("#GameCanvas").style.position = "fixed";
    document.querySelector("#GameCanvas").style.bottom = 0;
    document.querySelector("#GameCanvas").style.left = 0;
  })(); //add Fixed end
  //get window height, change body height
  function bodyHeight() {
    console.log("ready");
    var windowHeight = window.outerHeight + 5 + "px";
    console.log(windowHeight);
    document.querySelector("body").style.height = windowHeight;
  } //bodyHeight end
  bodyHeight();
  //window resizeListener
  (function resizeListener() {
    window.addEventListener("resize", function(e) {
      bodyHeight();
      window.scrollTo(0, 0);
    }); //addEventListener end
  })(); //resizeListener end
}); //documentReadyEnd
