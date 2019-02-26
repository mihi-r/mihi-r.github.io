window.onscroll = function() {
    document.querySelector(".intro").style.opacity = 1 - window.scrollY / 250;
}

const fixedNav = document.querySelector("nav");
fixedNav.classList.add("light");

window.addEventListener("scroll", function(ev) {
    const navAnimationB = document.querySelectorAll("nav a .linkAnimationB");
    const navAnimationA = document.querySelectorAll("nav a .linkAnimationA");
    const menubar = document.querySelector(".menubar");
    const distanceToTop = menubar.getBoundingClientRect().top;

    if (distanceToTop < 5) {
        menubar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    }
    else {
        menubar.style.boxShadow = "0 0px 0px 0 rgba(0, 0, 0, 0.2)";
    }

    if (distanceToTop < 5) {
        fixedNav.classList.remove("light");
        for (let i = 0; i < navAnimationB.length; i++) {
            navAnimationB[i].style.background = "black";
            navAnimationA[i].style.background = "black";
        }
    }
    else {
        fixedNav.classList.add("light");
        document.querySelector(".light").style.transition = "color 1s";
        for (let i = 0; i < navAnimationB.length; i++) {
            navAnimationB[i].style.background = "white";
            navAnimationA[i].style.background = "white";
        }
    }
 });

 
const allScrollTagP = document.querySelectorAll(".scrollTag p");
const allScrollTagIcon = document.querySelectorAll(".scrollTag a");


for (let i = 0; i < allScrollTagP.length; i++) {
    (function (index) {
        allScrollTagIcon[index].onmouseover = function () {
            allScrollTagP[index].style.opacity = "1";
        }
        allScrollTagIcon[index].onmouseout = function () {
            allScrollTagP[index].style.opacity = "0";
        }
    })(i);

}

const allNavLink = document.querySelectorAll("nav a");
const allNavAnimationB = document.querySelectorAll(".linkAnimationB")
const allNavAnimationA = document.querySelectorAll(".linkAnimationA")

for (let i = 0; i < allNavLink.length; i++){ 
    (function(i) {
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
    })(i);
}

// Resume page

// Skills
const addSkillsSection = function(skillsContainer, skills){
    const skillsUl = document.createElement("ul");
    for (let i = 0; i < skills.length; i++) {
        let skillItem = document.createElement("li");
        skillItem.textContent = skills[i];
        skillsUl.appendChild(skillItem);
    }
    skillsContainer.appendChild(skillsUl);
}

const programmingSkillsContainer = document.querySelector("#search-page .skills #skill-programming");
const programmingSkills = resumeData[0]["skills"]["programming"];
const toolsSkillsContainer = document.querySelector("#search-page .skills #skill-tools");
const toolsSkills = resumeData[0]["skills"]["tools"];
const frameworksSkillsContainer = document.querySelector("#search-page .skills #skill-frameworks");
const frameworksSkills = resumeData[0]["skills"]["frameworks"];

addSkillsSection(programmingSkillsContainer, programmingSkills);
addSkillsSection(toolsSkillsContainer, toolsSkills);
addSkillsSection(frameworksSkillsContainer, frameworksSkills);
