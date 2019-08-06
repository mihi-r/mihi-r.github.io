import resumeData from "../data/resume.json";

const searchBox = document.querySelector(".search-page .searchBox");
const searchList = document.querySelector(".search-page .searchResults ul");

const searchInput = function(searchText, event) {
    let cursorPosition = searchBox.selectionStart;
    while (searchList.firstChild) {
        searchList.removeChild(searchList.firstChild);
    }

    if (event.key != "Backspace") {
        const queryResults = queryData(searchText, Object.entries(resumeData[0]));
        if (queryResults) {
            searchBox.value = searchBox.value + queryResults[0].slice(searchBox.value.length, queryResults[0].length);
            searchBox.setSelectionRange(cursorPosition, searchBox.value.length);
            displayData(queryResults[1], searchList);
        }
    }
}

const queryData = function(searchText, node) {
    if (!Array.isArray(node[0]) && node[0].toLowerCase().startsWith(searchText)) {
        return node;
    } else {
        if (Array.isArray(node[0])){
            for (let arrayNode in node) {
                const nodeFound = queryData(searchText, node[arrayNode]);
                if (nodeFound) {
                    return nodeFound;
                }
            }
        }
        else if (typeof(node[1]) === "object" && !Array.isArray(node[1])) {
            let nodeExpanded = Object.entries(node[1]);
            return queryData(searchText, nodeExpanded);
        }
    }
}

const addListElement = function(parentList, listElementContent) {
    const listElement = document.createElement("li");
    const listBullet = document.createElement("i");
    listBullet.setAttribute("class", "fa-li fa fa-angle-right");
    listElement.appendChild(listBullet)

    const textLabel = document.createTextNode(listElementContent);
    listElement.appendChild(textLabel);

    parentList.appendChild(listElement);

    return listElement;
}

const displayData = function(objectElement, parentList) {
    if (typeof(objectElement) === "string") {
        addListElement(parentList, objectElement);
    } else {
        Object.keys(objectElement).forEach((key) => {
            if (typeof(objectElement[key]) === "object" || typeof(objectElement[key]) === "array") {
                const listElement = addListElement(parentList, key);
                
                const ulList = document.createElement("ul");
                ulList.setAttribute("class", "fa-ul");
                listElement.appendChild(ulList);

                displayData(objectElement[key], ulList);
            } else if (typeof(objectElement[key]) === "string") {
                addListElement(parentList, objectElement[key]);
            }
        })
    }
}

export { searchInput };