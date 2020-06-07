var data = [
    "Phone",
    "Ipad",
    "三星笔记本",
    "佳能相机",
    "惠普打印机",
    "谢谢参与",
    "50元充值卡",
    "1000元超市购物券",
  ],
  timer = null;

window.onload = function () {
  var play = document.getElementById("play"),
      stop = document.getElementById("stop");

  // 开始抽奖
  play.onclick = playFun;
  stop.onclick = stopFun;

  // 键盘事件
  document.onkeyup = function (event) {
    event = event || window.event;
    console.log(event.keyCode);
   //  如果按下空格且没有计时器
    if (event.keyCode == 32 && !timer) {
      playFun();
    } else {
      stopFun();
      timer = null;
    }
  };
};

function playFun() {
  var title = document.getElementById("title");
  var play = document.getElementById("play");
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  timer = setInterval(function () {
    var random = Math.floor(Math.random() * data.length);
    title.innerHTML = data[random];
  }, 50);
  play.style.background = "#999";
}

function stopFun() {
  clearInterval(timer);
  var play = document.getElementById("play");
  play.style.background = "#036";
}
