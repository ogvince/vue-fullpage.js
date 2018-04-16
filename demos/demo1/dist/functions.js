$(function() {

  $(".test").click(function() {
    $("#overlaymenu").toggleClass("openmenu");
    $(".fp-section.fp-table").toggleClass("pushcontent");
  });

  $("#logonemaprod").click(function() {
    $(".fp-section.fp-table").addClass("inactive");
    $(".fp-section.fp-table").removeClass("pushcontent");
    $("#overlaymenu").removeClass("openmenu");
    $("#burger-menu").removeClass("open");
    $(".fp-section.fp-table").removeClass("inactive");
  });

  $("#burger-menu").on('click', function() {
  $(this).toggleClass("open");
 })


});


function do_something(){
  $(".fp-section.fp-table").addClass("inactive");
  $(".fp-section.fp-table").removeClass("pushcontent");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");
   }

   function vimeo(){
     $(".fp-section.fp-table").removeClass("pushcontent");
     $("#overlaymenu").removeClass("openmenu");
     $("#burger-menu").removeClass("open");
     $(".fp-section.fp-table").removeClass("inactive");
      }
