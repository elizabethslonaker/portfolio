/* Filtering projects on index from w3schools.com */

//filterSelection("all")
filterSelection("caseStudy")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  //if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "showFilter");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilter");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnFilterContainer = document.getElementById("btnFilterContainer");
var btns = btnFilterContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activeFilter");
    current[0].className = current[0].className.replace(" activeFilter", "");
    this.className += " activeFilter";
  });
}
