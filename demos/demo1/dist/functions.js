function logonemaprod() {
  $.fn.fullpage.moveTo(1);
  $(".fp-section.fp-table").addClass("inactive");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");
}


function openmenu() {
    $("#burger-menu").toggleClass("open");
    $("#overlaymenu").toggleClass("openmenu");
    $("body").toggleClass("nonscrollable");
}


function do_something() {
  $(".fp-section.fp-table").addClass("inactive");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");


    $("body").removeClass("nonscrollable");
}

function vimeo() {
  $("#logonemaprod").css("display", "none");
  $("#logonemaprod-2").css("display", "block");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");

  $("body").addClass("nonscrollable");
}

function vimeoBack() {
  $("#logonemaprod").css("display", "block");
  $("#logonemaprod-2").css("display", "none");

  $("body").removeClass("nonscrollable");
}
