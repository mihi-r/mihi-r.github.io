

/*
jQuery alternative for cross browser support

$(window).scroll(function(){
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 250);
    console.log("I scroll jQuery")
});
*/

window.onscroll = function() {
    document.querySelector(".intro").style.opacity = 1 - window.scrollY / 250;
}

var fixed = $("nav");
fixed.addClass('light');

/*
$(window).scroll(function(){


    
    var fixed_position = $("nav").offset().top;
    var fixed_height = $("nav").height();
  
    var toCross_position = $(".menubar").offset().top;
    var toCross_height = $(".menubar").height();
  
    if (fixed_position + fixed_height  < toCross_position) {
        console.log("I'm dark")
        fixed.addClass('light');
    } else if (fixed_position > toCross_position + toCross_height) {
        console.log("I'm dark")
        fixed.addClass('light');
    } else {
        console.log("I'm light")
        fixed.removeClass('light');
    }
});
*/

window.addEventListener('scroll', function(ev) {
    var someDiv = document.querySelector('.menubar');
    var distanceToTop = someDiv.getBoundingClientRect().top;

    if (distanceToTop < 5) {
        fixed.removeClass('light')
    }
    else {
        fixed.addClass('light')
        document.querySelector('.light').style.transition = "color 1s";
    }


 });