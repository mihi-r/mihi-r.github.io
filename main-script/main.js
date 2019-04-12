// Nav menu and general
var isElementInView = function(docElement) {
    let topBoundingClient = docElement.getBoundingClientRect().top;
    return topBoundingClient < 80 ? true : false;
}

var activatePageLink = function(pageId) {
    const allNavAnimationB = document.querySelector("a[href='#" + pageId + "'] .linkAnimationB");
    const allNavAnimationA = document.querySelector("a[href='#" + pageId + "'] .linkAnimationA");

    if (!allNavAnimationB.classList.contains("active")) {
        let currentActivePageLink = document.querySelectorAll("nav .active");
        for (let i = 0; i < currentActivePageLink.length; i++) {
            currentActivePageLink[i].classList.remove("active");
            currentActivePageLink[i].classList.remove("current-link");
        }
    
        allNavAnimationB.classList.add("active");
        allNavAnimationB.classList.add("current-link");
        allNavAnimationA.classList.add("active");
        allNavAnimationA.classList.add("current-link");
    }
}

const navAnimationB = document.querySelectorAll("nav .nav-link .linkAnimationB");
const navAnimationA = document.querySelectorAll("nav .nav-link .linkAnimationA");
const menubar = document.querySelector(".menubar");
const allPages = document.querySelectorAll(".page");
const fixedNav = document.querySelector("nav");
fixedNav.classList.add("light");

const projectDescriptions = document.querySelectorAll("#project-page .description");

window.addEventListener("scroll", function(ev) {
    // To fade the intro text
    document.querySelector(".intro").style.opacity = 1 - window.scrollY / 250;

    // Animate the nav bar
    let distanceToTop = menubar.getBoundingClientRect().top;

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

    for (let i = 0; i < projectDescriptions.length; i++) {
        if (projectDescriptions[i].style.transform != "translateX(0%)")
        {
            if (isElementInView(projectDescriptions[i])) {
                projectDescriptions[i].style.transform = "translateX(0%)";
            }
        }
    }

    // Highlight nav link if page is in view
    let minPageValue = Math.abs(allPages[0].getBoundingClientRect().top);
    let minPage = allPages[0];

    for (let i = 1; i < allPages.length; i++) {
        let tempPageValue = Math.abs(allPages[i].getBoundingClientRect().top);
        if (tempPageValue < minPageValue ) {
            minPageValue = tempPageValue;
            minPage = allPages[i];
        }
    }

    activatePageLink(minPage.getAttribute("id"));

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

const allNavLink = document.querySelectorAll("nav .nav-link");
const allNavAnimationB = document.querySelectorAll(".linkAnimationB")
const allNavAnimationA = document.querySelectorAll(".linkAnimationA")

for (let i = 0; i < allNavLink.length; i++){ 
    (function(i) {
        allNavLink[i].onmouseover = function () {
            if (!allNavAnimationB[i].classList.contains("current-link")) {
                allNavAnimationB[i].classList.add("active");
                allNavAnimationA[i].classList.add("active");
            }
        }
        allNavLink[i].onmouseout = function () {
            if (!allNavAnimationB[i].classList.contains("current-link")) {
                allNavAnimationB[i].classList.remove("active");
                allNavAnimationA[i].classList.remove("active");
            }
        }
    })(i);
}

const hamburgerMenu = document.querySelector("nav .hamburger-menu");
const navLinkBackground = document.querySelector(".nav-link-background");

hamburgerMenu.onclick = function() {
    navLinkBackground.style.width = "100%";

    for (let i = 0; i < allNavLink.length; i++){ 
        (function(i) {
            allNavLink[i].classList.add("nav-link-mobile-block");
        })(i);
    }

    setTimeout(function() {
        for (let i = 0; i < allNavLink.length; i++){ 
            (function(i) {
                allNavLink[i].classList.add("nav-link-mobile-opacity");
            })(i);
        }
    }, 300);
}

// Resume page general
const addListItem = function(ulContainer, item, classToAdd="") {
    let liItem = document.createElement("li");
    liItem.textContent = item;

    if (classToAdd !== "") {
        liItem.setAttribute("class", classToAdd);
    }

    ulContainer.appendChild(liItem);
    return ulContainer;
}

// Education
const education = resumeData[0]["education"]["university"];
const educationUni = document.querySelector("#search-page .education .university");
const educationMajor = document.querySelector("#search-page .education .major");
const educationDate = document.querySelector("#search-page .education .date");

educationUni.textContent = education["name"];
educationMajor.textContent = education["major"];
educationDate.textContent = education["graduation year"];

// Skills
const addUnorderedListFromArray = function(container, arrayToUse){
    let unorderedList = document.createElement("ul");
    for (let i = 0; i < arrayToUse.length; i++) {
        unorderedList = addListItem(unorderedList, arrayToUse[i])
    }
    container.appendChild(unorderedList);
}

const programmingSkillsContainer = document.querySelector("#search-page .skills #skill-programming");
const programmingSkills = resumeData[0]["skills"]["programming"];
const toolsSkillsContainer = document.querySelector("#search-page .skills #skill-tools");
const toolsSkills = resumeData[0]["skills"]["tools"];
const frameworksSkillsContainer = document.querySelector("#search-page .skills #skill-frameworks");
const frameworksSkills = resumeData[0]["skills"]["frameworks"];

addUnorderedListFromArray(programmingSkillsContainer, programmingSkills);
addUnorderedListFromArray(toolsSkillsContainer, toolsSkills);
addUnorderedListFromArray(frameworksSkillsContainer, frameworksSkills);

// Experiences
const generateCompanyData = function(experienceDescContainer, experiences, company) {
    experienceDesc = experiences[company]["description"];
    addUnorderedListFromArray(experienceDescContainer, experienceDesc);

    const positionTitle = document.querySelector("#search-page .experience .position");
    positionTitle.textContent = experiences[company]["title"];

    const datesWorked = document.querySelector("#search-page .experience .dates");
    datesWorked.textContent = experiences[company]["dates"];

    const technicalSkill = document.querySelector("#search-page .experience .technical-skill");
    const nontechnicalSkill = document.querySelector("#search-page .experience .nontechnical-skill");

    if ("technical skill" in experiences[company]) {
        technicalSkill.textContent = experiences[company]["technical skill"];
    } else {
        technicalSkill.textContent = "";
    }

    if ("nontechnical skill" in experiences[company]) {
        nontechnicalSkill.textContent = experiences[company]["nontechnical skill"];
    } else {
        nontechnicalSkill.textContent = "";
    }
}

var addCompanyNames = function(experienceDescContainer, experienceNavBar, experiences) {
    const companyPromise = new Promise(function(resolve, reject) {
        let companyCount = 0;
        let companyList = document.createElement("ul");
        for (const company in experiences) {
            if (companyCount === 0) {
                companyList = addListItem(companyList, company, "active");
                generateCompanyData(experienceDescContainer, experiences, company);
            } else {
                companyList = addListItem(companyList, company);
            }
            companyCount++;
        }
        experienceNavBar.appendChild(companyList);
        resolve("Success");
    });

    companyPromise.then(function(result) {
        const companies = experienceNavBar.children[0].children;

        for (let i = 0; i < companies.length; i++){ 
            (function(i) {
                companies[i].onclick = function() {
                    experienceDescContainer.innerHTML = "";
                    generateCompanyData(experienceDescContainer, experiences, companies[i].textContent);
                    let currentActiveCompany = document.querySelector("#search-page .experience .experience-nav-bar .active");
                    currentActiveCompany.classList.remove("active");
                    companies[i].classList.add("active");
                }
            })(i);
        }
    });
}

const experienceDescContainer = document.querySelector("#search-page .experience .description");
const experienceNavBar = document.querySelector("#search-page .experience .experience-nav-bar")
const experiences = resumeData[0]["experiences"];

addCompanyNames(experienceDescContainer, experienceNavBar, experiences);