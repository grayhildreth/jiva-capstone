// (function () {
//
//   var navButton = document.getElementById("nav-menu-button"),
//       navUl = document.getElementsByClassName("nav-ul");
//
//   function toggleMobileMenu() {
//     navUl[0].style.transition = "max-height 0.5s";
//     navUl[0].classList.toggle("hide-ul");
//   }
//
//   navButton.onclick = toggleMobileMenu;
// }());

$(document).ready(function(){
  $(".menu-button").click(function(){
    $("#mobile-menu").slideToggle(500);
  });
});

$(document).ready(function(){
  $(".conceptualization").click(function(){
    $(".field-copy").hide("");
    $(".post-copy").hide("");
    $(".distribution-copy").hide("");
  });
});

$(document).ready(function(){
  $(".field").click(function(){
    $(".conceptualization-copy").hide("");
    $(".post-copy").hide("");
    $(".distribution-copy").hide("");
  });
});

$(document).ready(function(){
  $(".post").click(function(){
    $(".field-copy").hide("");
    $(".conceptualization-copy").hide("");
    $(".distribution-copy").hide("");
  });
});

$(document).ready(function(){
  $(".distribution").click(function(){
    $(".field-copy").hide("");
    $(".post-copy").hide("");
    $(".conceptualization-copy").hide("");
  });
});

$(document).ready(function(){
  $(".conceptualization").click(function(){
    $("#conceptualization-copy").slideToggle(500);
  });
});

$(document).ready(function(){
  $(".field").click(function(){
    $("#field-copy").slideToggle(500);
  });
});

$(document).ready(function(){
  $(".post").click(function(){
    $("#post-copy").slideToggle(500);
  });
});

$(document).ready(function(){
  $(".distribution").click(function(){
    $("#distribution-copy").slideToggle(500);
  });
});
