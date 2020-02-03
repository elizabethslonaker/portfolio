// When hamburger menu is clicked, nav bar toggles open

/* $(document).ready(function(){
  $(".hamburgerMenu").click(function(){
    $("nav").slideToggle(500);
  })
})*/


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
