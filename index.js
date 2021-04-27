var i = 0;
const throttled = () => {
  console.log("This is throttled..." + ++i);
};

const implementThrottle = (fn, delay) => {
  var closureFlag = true;
  var timer;
  return function() {
    //clearInterval(timer);
    if (closureFlag) {
      throttled.apply(this, arguments);
      closureFlag = false;
      timer = setTimeout(() => {
        closureFlag = true;
      }, delay);
    }
  };
};
const throttleLayer = implementThrottle(throttled, "2000");
window.addEventListener("resize", throttleLayer);
