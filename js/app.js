var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
  };
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }

var rlfh = $('.right-line').height();
var blfw = $('.bottom-line').width();
$('.right-line').height(0);
$('.bottom-line').width(0);

$('.hamburger').click(function(){
    if($(this).hasClass('is-active'))
    open_nav()
    else
    close_nav()
})

function open_nav(){
    $('.none').fadeIn(1000,'swing');
    $(".right-line").animate({height: rlfh},1000);
    $(".bottom-line").animate({width: blfw},1000);
}
function close_nav(){
    $('.none').fadeOut(1000,'swing');

    $(".right-line").animate({height: 0},1000);
    $(".bottom-line").animate({width: 0},1000);
}



$(".screen").page();
$(".screen .page .navigate").click(function (ev) {
  var page  = $(ev.target).attr("data-page-name");
  var trans = $(ev.target).attr("data-page-trans");
  if ($(".screen").page().fetch(page) === null)
      $(".screen").page().shake();
  else
      $(".screen").page().transition(page, trans);
});


$(window).on('load', function(){
  $(".se-pre-con").fadeOut("slow");;
});