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
  $("iframe").each(function(){
      $(this).attr("src", $(this).data("src"));
  });
}

function vimeoBack() {
  $("#logonemaprod").css("display", "block");
  $("#logonemaprod-2").css("display", "none");
  $('iframe').attr("src", function(index, attr){
  return attr;
  });
  $("iframe").attr('src', 'about:blank');
}

var val = $("a.director").html();
$("a.director").html(val.substring(1, val.length));


$("a.director").each(function() {
  $(this).text($(this).text().replace(/[+-]/, ""));
});


  function myFunction() {
  console.log("kiwi");
  $("a#link23").click();
  $("a#link23").trigger( "click" );
  jQuery('#link23')[0].click();
  $('#link23')[0].click();
  }
