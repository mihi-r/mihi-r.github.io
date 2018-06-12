window.onscroll = function() {
    document.querySelector(".intro").style.opacity = 1 - window.scrollY / 250;
}

var fixedNav = document.querySelector("nav");
fixedNav.classList.add("light");

window.addEventListener("scroll", function(ev) {
    var someDiv = document.querySelector(".menubar");
    var distanceToTop = someDiv.getBoundingClientRect().top;

    var navAnimationB = document.querySelectorAll("nav a .linkAnimationB");
    var navAnimationA = document.querySelectorAll("nav a .linkAnimationA");
    var menubar = document.querySelector(".menubar");

    if (distanceToTop < 5) {
        menubar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    }
    else {
        menubar.style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0.2)";
    }

    if (distanceToTop < 5) {
        fixedNav.classList.remove("light");
        for (var i = 0; i < navAnimationB.length; i++) {
            navAnimationB[i].style.background = "black";
            navAnimationA[i].style.background = "black";
        }
    }
    else {
        fixedNav.classList.add("light");
        document.querySelector(".light").style.transition = "color 1s";
        for (var i = 0; i < navAnimationB.length; i++) {
            navAnimationB[i].style.background = "white";
            navAnimationA[i].style.background = "white";
        }
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
