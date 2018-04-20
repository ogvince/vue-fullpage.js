$(function() {

  $(".test").click(function() {
    $("#overlaymenu").toggleClass("openmenu");
  });

  $("#logonemaprod").click(function() {
    $.fn.fullpage.moveTo(1);
    $(".fp-section.fp-table").addClass("inactive");
    $("#overlaymenu").removeClass("openmenu");
    $("#burger-menu").removeClass("open");
    $(".fp-section.fp-table").removeClass("inactive");
  });

  $("#burger-menu").on('click', function() {
    $(this).toggleClass("open");
  })


});


function do_something() {
  $(".fp-section.fp-table").addClass("inactive");

  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");
}

function vimeo() {
  $("#logonemaprod").css("display", "none");
  $("#logonemaprod-2").css("display", "block");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");

}

function vimeoBack() {
  $("#logonemaprod").css("display", "block");
  $("#logonemaprod-2").css("display", "none");
  $('iframe').attr('src', $('iframe').attr('src'));
}
