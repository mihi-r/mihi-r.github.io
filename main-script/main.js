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



var allNavLink = document.querySelectorAll("nav a");
var allNavAnimationB = document.querySelectorAll(".linkAnimationB")
var allNavAnimationA = document.querySelectorAll(".linkAnimationA")

/*
for (var i = 0; i < allNavLink.length; i++){
    allNavLink[i].onmouseover = function () {
        allNavAnimationB[i].style.opacity = "1";
        allNavAnimationB[i].style.width = "100%";
        allNavAnimationA[i].style.opacity = "1";
        allNavAnimationA[i].style.width = "100%";
    }
    allNavLink[i].onmouseout = function () {
        allNavAnimationB[i].style.opacity = "0";
        allNavAnimationB[i].style.width = "0%";
        allNavAnimationA[i].style.opacity = "0";
        allNavAnimationA[i].style.width = "0%";
    }
}
*/

allNavLink[0].onmouseover = function () {
    allNavAnimationB[0].style.opacity = "1";
    allNavAnimationB[0].style.width = "100%";
    allNavAnimationA[0].style.opacity = "1";
    allNavAnimationA[0].style.width = "100%";
}
allNavLink[0].onmouseout = function () {
    allNavAnimationB[0].style.opacity = "0";
    allNavAnimationB[0].style.width = "0%";
    allNavAnimationA[0].style.opacity = "0";
    allNavAnimationA[0].style.width = "0%";
}
allNavLink[1].onmouseover = function () {
    allNavAnimationB[1].style.opacity = "1";
    allNavAnimationB[1].style.width = "100%";
    allNavAnimationA[1].style.opacity = "1";
    allNavAnimationA[1].style.width = "100%";
}
allNavLink[1].onmouseout = function () {
    allNavAnimationB[1].style.opacity = "0";
    allNavAnimationB[1].style.width = "0%";
    allNavAnimationA[1].style.opacity = "0";
    allNavAnimationA[1].style.width = "0%";
}
allNavLink[2].onmouseover = function () {
    allNavAnimationB[2].style.opacity = "1";
    allNavAnimationB[2].style.width = "100%";
    allNavAnimationA[2].style.opacity = "1";
    allNavAnimationA[2].style.width = "100%";
}
allNavLink[2].onmouseout = function () {
    allNavAnimationB[2].style.opacity = "0";
    allNavAnimationB[2].style.width = "0%";
    allNavAnimationA[2].style.opacity = "0";
    allNavAnimationA[2].style.width = "0%";
}
allNavLink[3].onmouseover = function () {
    allNavAnimationB[3].style.opacity = "1";
    allNavAnimationB[3].style.width = "100%";
    allNavAnimationA[3].style.opacity = "1";
    allNavAnimationA[3].style.width = "100%";
}
allNavLink[3].onmouseout = function () {
    allNavAnimationB[3].style.opacity = "0";
    allNavAnimationB[3].style.width = "0%";
    allNavAnimationA[3].style.opacity = "0";
    allNavAnimationA[3].style.width = "0%";
}
