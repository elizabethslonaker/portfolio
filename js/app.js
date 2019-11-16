// toggle light & dark modes
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}



// When hamburger menu is clicked, nav bar toggles open
$(document).ready(function(){
  $(".hamburgerMenu").click(function(){
    $("nav").slideToggle(500);
  })
})
