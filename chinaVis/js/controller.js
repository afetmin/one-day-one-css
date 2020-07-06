function getTime() {
  // $.ajax({
  //   url: "json/time",
  //   success: function (time_str) {
  //     $("#tim").html(time_str);
  //   },
  // });
  let time = new Date();
  let year = time.getFullYear();
  let month =
    time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
  let date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  let hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  let minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  let seconds =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  let time_str = `${year}年${month}月${date}日 ${hour}:${minutes}:${seconds}`;
  $("#tim").html(time_str);
}
function get_c1_data() {
  $.ajax({
    url: "json/c1.json",
    success: function (data) {
      $(".num h1").eq(0).text(data.confirm);
      $(".num h1").eq(1).text(data.suspect);
      $(".num h1").eq(2).text(data.heal);
      $(".num h1").eq(3).text(data.dead);
      $(".txt h2").eq(0).text("累计确诊");
      $(".txt h2").eq(1).text("剩余疑似");
      $(".txt h2").eq(2).text("累计治愈");
      $(".txt h2").eq(3).text("累计死亡");
    },
  });
}
function get_c2_data() {
  $.ajax({
    url: "json/c2.json",
    success: function (data) {
      ec_center_option.series[0].data = data.data;
      ec_center.setOption(ec_center_option);
    },
  });
}
function get_l1_data() {
  $.ajax({
    url: "json/l1.json",
    success: function (data) {
      ec_left1_Option.xAxis[0].data = data.day;
      ec_left1_Option.series[0].data = data.confirm;
      ec_left1_Option.series[1].data = data.suspect;
      ec_left1_Option.series[2].data = data.heal;
      ec_left1_Option.series[3].data = data.dead;
      ec_left1.setOption(ec_left1_Option);
    },
  });
}
function get_l2_data() {
  $.ajax({
    url: "json/l2.json",
    success: function (data) {
      ec_left2_Option.xAxis[0].data = data.day;
      ec_left2_Option.series[0].data = data.confirm_add;
      ec_left2_Option.series[1].data = data.suspect_add;
      ec_left2_Option.series[2].data = data.heal_add;
      ec_left2_Option.series[3].data = data.dead_add;
      ec_left2.setOption(ec_left2_Option);
    },
    error: function (xhr, type, errorThrown) {},
  });
}
function get_r1_data() {
  $.ajax({
    url: "json/r1.json",
    success: function (data) {
      ec_right1_option.xAxis.data = data.city;
      ec_right1_option.series[0].data = data.confirm;
      ec_right1.setOption(ec_right1_option);
    },
  });
}
function get_r2_data() {
  $.ajax({
    url: "json/r2.json",
    success: function (data) {
      ec_right2_option.series[0].data = data.kws;
      ec_right2.setOption(ec_right2_option);
    },
  });
}
get_c1_data();
get_c2_data();
get_l1_data();
get_l2_data();
get_r1_data();
get_r2_data();
setInterval(getTime, 1000);
setInterval(get_c1_data, 1000 * 30);
setInterval(get_c2_data, 1000 * 30);
setInterval(get_l1_data, 1000 * 30);
setInterval(get_l2_data, 1000 * 30);
setInterval(get_r1_data, 1000 * 30);
setInterval(get_r2_data, 1000 * 30);
window.addEventListener("resize", function () {
  ec_left1.resize();
  ec_left2.resize();
  ec_center.resize();
  ec_right1.resize();
  ec_right2.resize();
});
