import resumeData from "../data/resume.json";
import { searchInput } from "./search";

// Nav menu and general
const isElementInView = function(docElement) {
    let topBoundingClient = docElement.getBoundingClientRect().top;
    return topBoundingClient < 400 ? true : false;
}

const activatePageLink = function(pageId) {
    const allNavAnimationB = document.querySelector("a[href='#" + pageId + "'] .linkAnimationB");
    const allNavAnimationA = document.querySelector("a[href='#" + pageId + "'] .linkAnimationA");

    if (!allNavAnimationB.classList.contains("current-link")) {
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
const navTexts = document.querySelectorAll("nav a");
const menubar = document.querySelector(".menubar");
const allPages = document.querySelectorAll(".page");
const fixedNav = document.querySelector("nav");
let isMenuTextOnBar = false;
fixedNav.classList.add("light");

const projectDescriptions = document.querySelectorAll("#project-page .description");

window.addEventListener("scroll", (ev) => {
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
            navAnimationB[i].classList.remove("nav-link-light");
            navAnimationB[i].classList.add("nav-link-dark");
            navAnimationA[i].classList.remove("nav-link-light");
            navAnimationA[i].classList.add("nav-link-dark");
        }

        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].classList.remove("nav-text-light");
            navTexts[i].classList.add("nav-text-dark");
        }

        isMenuTextOnBar = true;
    }
    else {
        fixedNav.classList.add("light");
        document.querySelector(".light").style.transition = "color 1s";
        for (let i = 0; i < navAnimationB.length; i++) {
            navAnimationB[i].classList.remove("nav-link-dark");
            navAnimationB[i].classList.add("nav-link-light");
            navAnimationA[i].classList.remove("nav-link-dark");
            navAnimationA[i].classList.add("nav-link-light");
        }

        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].classList.remove("nav-text-dark");
            navTexts[i].classList.add("nav-text-light");
        }

        isMenuTextOnBar = false;
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
    ((index) => {
        allScrollTagIcon[index].onmouseover = () => {
            allScrollTagP[index].style.opacity = "1";
        }
        allScrollTagIcon[index].onmouseout = () => {
            allScrollTagP[index].style.opacity = "0";
        }
    })(i);
}

const allNavLink = document.querySelectorAll("nav .nav-link");
const allNavAnimationB = document.querySelectorAll(".linkAnimationB")
const allNavAnimationA = document.querySelectorAll(".linkAnimationA")

const hamburgerMenu = document.querySelector("nav .hamburger-menu i");
const navLinkBackground = document.querySelector(".nav-link-background");

for (let i = 0; i < allNavLink.length; i++){ 
    ((i) => {
        allNavLink[i].onmouseover = () => {
            if (!allNavAnimationB[i].classList.contains("current-link")) {
                allNavAnimationB[i].classList.add("active");
                allNavAnimationA[i].classList.add("active");
            }
        }

        allNavLink[i].onmouseout = () => {
            if (!allNavAnimationB[i].classList.contains("current-link")) {
                allNavAnimationB[i].classList.remove("active");
                allNavAnimationA[i].classList.remove("active");
            }
        }

        allNavLink[i].onclick = () => {
            if (hamburgerMenu.classList.contains("fa-times")) {
                hamburgerMenu.click();
            }
        }
    })(i);
}

hamburgerMenu.onclick = () => {
    if (hamburgerMenu.classList.contains("fa-bars")) {
        // Set header text to light
        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].classList.remove("nav-text-dark");
            navTexts[i].classList.add("nav-text-light");
        }

        // Expand background for mobile menu
        navLinkBackground.style.width = "100%";

        for (let i = 0; i < allNavLink.length; i++){ 
            ((i) => {
                allNavLink[i].classList.add("nav-link-mobile-block");
            })(i);
        }
    
        setTimeout(() => {
            for (let i = 0; i < allNavLink.length; i++){ 
                ((i) => {
                    allNavLink[i].classList.add("nav-link-mobile-opacity");
                })(i);
            }
        }, 300);

        hamburgerMenu.classList.remove("fa-bars");
        hamburgerMenu.classList.add("fa-times");
    } else {
        // Set header text to dark
        setTimeout(() => {
            if (!isMenuTextOnBar) {
                for (let i = 0; i < navTexts.length; i++) {
                    navTexts[i].classList.remove("nav-text-light");
                    navTexts[i].classList.add("nav-text-dark");
                }
            }
        }, 500);
        

        // Minimize background for mobile menu
        navLinkBackground.style.width = "0";
        
        for (let i = 0; i < allNavLink.length; i++){ 
            ((i) => {
                allNavLink[i].classList.remove("nav-link-mobile-block");
            })(i);
        }
    
        setTimeout(() => {
            for (let i = 0; i < allNavLink.length; i++){ 
                ((i) => {
                    allNavLink[i].classList.remove("nav-link-mobile-opacity");
                })(i);
            }
        }, 300);

        hamburgerMenu.classList.remove("fa-times");
        hamburgerMenu.classList.add("fa-bars");
    }
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
const education = resumeData[0]["Education"]["University"];
const educationUni = document.querySelector("#search-page .education .university");
const educationMajor = document.querySelector("#search-page .education .major");
const educationDate = document.querySelector("#search-page .education .date");

educationUni.textContent = education["Name"];
educationMajor.textContent = education["Major"];
educationDate.textContent = education["Graduation Year"];

// Skills
const addUnorderedListFromArray = function(container, arrayToUse){
    let unorderedList = document.createElement("ul");
    for (let i = 0; i < arrayToUse.length; i++) {
        unorderedList = addListItem(unorderedList, arrayToUse[i])
    }
    container.appendChild(unorderedList);
}

const programmingSkillsContainer = document.querySelector("#search-page .skills #skill-programming");
const programmingSkills = resumeData[0]["Skills"]["Programming"];
const toolsSkillsContainer = document.querySelector("#search-page .skills #skill-tools");
const toolsSkills = resumeData[0]["Skills"]["Tools"];
const frameworksSkillsContainer = document.querySelector("#search-page .skills #skill-frameworks");
const frameworksSkills = resumeData[0]["Skills"]["Frameworks"];

addUnorderedListFromArray(programmingSkillsContainer, programmingSkills);
addUnorderedListFromArray(toolsSkillsContainer, toolsSkills);
addUnorderedListFromArray(frameworksSkillsContainer, frameworksSkills);

// Experiences
const generateCompanyData = function(experienceDescContainer, experiences, company) {
    const experienceDesc = experiences[company]["Description"];
    addUnorderedListFromArray(experienceDescContainer, experienceDesc);

    const positionTitle = document.querySelector("#search-page .experience .position");
    positionTitle.textContent = experiences[company]["Title"];

    const datesWorked = document.querySelector("#search-page .experience .dates");
    datesWorked.textContent = experiences[company]["Dates"];
}

const addCompanyNames = function(experienceDescContainer, experienceNavBar, experiences) {
    const companyPromise = new Promise((resolve, reject) => {
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

    companyPromise.then((result) => {
        const companies = experienceNavBar.children[0].children;

        for (let i = 0; i < companies.length; i++){ 
            ((i) => {
                companies[i].onclick = () => {
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
const experiences = resumeData[0]["Experiences"];

addCompanyNames(experienceDescContainer, experienceNavBar, experiences);

// Resume form
const searchForm = document.querySelector(".search-page form");
const searchBox = document.querySelector(".search-page .searchBox");

searchForm.onsubmit = (event) => {
    event.preventDefault();
}

searchBox.onkeyup = (event) => {
    if (searchBox.value != "") {
        searchInput(searchBox.value.toLowerCase(), event);
    }
}
