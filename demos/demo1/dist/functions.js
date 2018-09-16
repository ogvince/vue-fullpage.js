function logonemaprod() {
  $.fn.fullpage.moveTo(1);
  $(".fp-section.fp-table").addClass("inactive");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");
}


function openmenu() {
    $("#burger-menu").addClass("open");
    $("#overlaymenu").addClass("openmenu");
    $("body").addClass("nonscrollable");
    $("#closemenu").css("display", "block");
}

function closemenu() {
    $("#burger-menu").removeClass("open");
    $("#overlaymenu").removeClass("openmenu");
    $("body").removeClass("nonscrollable");
    $("#closemenu").css("display", "none");
}


function do_something() {
  $(".fp-section.fp-table").addClass("inactive");
  $("#overlaymenu").removeClass("openmenu");
  $("#burger-menu").removeClass("open");
  $(".fp-section.fp-table").removeClass("inactive");
  $("#directors").removeClass( "visible" );
  $("#photographers").removeClass( "visible" );
  $("#arrow").removeClass( "visible" );
  $("#directorstitle").removeClass( "hidden" );
  $("#photographerstitle").removeClass( "hidden" );
  $("#directorstitle").addClass( "visible" );
  $("#photographerstitle").addClass( "visible" );
  $("body").removeClass("nonscrollable");
}

function vimeo() {
  // $(".overlay").css("display", "flex");
  $(".social, .licontact").css("display", "none");
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
  // $(".overlay").css("display", "none");
  $(".social, .licontact").css("display", "block");
  $("#logonemaprod").css("display", "block");
  $("#logonemaprod-2").css("display", "none");
  $('iframe').attr("src", function(index, attr){
  return attr;
  });
  $("body").removeClass("nonscrollable");
  window.location = "#";
}

function vimeoMenu() {
  // $(".overlay").css("display", "none");
  $(".social, .licontact").css("display", "block");
  $("#logonemaprod").css("display", "block");
  $("#logonemaprod-2").css("display", "none");
  $('iframe').attr("src", function(index, attr){
  return attr;
  });
  // $("body").removeClass("nonscrollable");
  window.location = "#";
}


var val = $("a.director").html();
// $("a.director").html(val.substring(1, val.length));
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



  function showDirectors() {
    $("#directors").toggleClass( "visible" );
    $("#photographerstitle").toggleClass( "hidden" );
    $("#photographers").toggleClass( "hidden" );
    $("#arrow").toggleClass( "visible" );
  }

  function showPhotographers() {
    $("#photographers").toggleClass( "visible" );
    $("#directorstitle").toggleClass( "hidden" );
    $("#arrow").toggleClass( "visible" );
    $("#directors").toggleClass( "hidden" );
  }

  function arrowBack() {
    $("#directors").removeClass( "visible" );
    $("#photographers").removeClass( "visible" );
    $("#directors").removeClass( "hidden" );
    $("#photographers").removeClass( "hidden" );
    $("#arrow").removeClass( "visible" );
    $("#directorstitle").removeClass( "hidden" );
    $("#photographerstitle").removeClass( "hidden" );
    $("#directorstitle").addClass( "visible" );
    $("#photographerstitle").addClass( "visible" );
  }
  function videoIcon() {
    if(window.innerWidth > 768){
  $(".playicon").css("display", "block");
  $(".categorie").css("opacity", "0");
  $(".auteur").css("opacity", "0");
  $(".titre").css("opacity", "0");
    }
  }
  function videoIcon2() {
  if(window.innerWidth > 768){
  $(".playicon").css("display", "none");
  $(".categorie").css("opacity", "1");
  $(".auteur").css("opacity", "1");
  $(".titre").css("opacity", "1");
    }
  }

  $( document ).ready(function() {
      console.log( "ready!" );

      $( "#closemenu" ).click(closemenu);
      $( "#burger-menu" ).click(openmenu);
      $( "#burger-menu" ).click(vimeoMenu);


      $(document).on("click","#logonemaprod",function() {
             closemenu();
             logonemaprod();
         });

      $( "#arrow, #directors, #photographers" ).click(arrowBack);
      $( "#directorstitle" ).click(showDirectors);
      $( "#photographerstitle" ).click(showPhotographers);
      $( ".licontact a, #directors, #photographers" ).click(do_something);

      $(document).on("click",".close-button",function() {
             vimeoBack();
         });
      $(document).on("click",".link:not(#slide26 > div.frameholder > a)",function() {
             vimeo();
         });

      $(document).on("click","#go5",function() {
                myFunction();
            });

  });
