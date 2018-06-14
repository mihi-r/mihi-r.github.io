var searchBox = document.querySelector(".search-page .searchBox");
var searchList = document.querySelector(".search-page .searchResults ul");
var searchForm = document.querySelector(".search-page form");

searchForm.onsubmit = function(event) {
    event.preventDefault();
}

searchBox.onkeyup = function (event) {
    if (searchBox.value != "") {
        searchInput(searchBox.value, event);
    }
}

var searchInput = function(searchText, event) {
    cursorPosition = searchBox.selectionStart;
    searchList.innerHTML = "";
    if (resumeData[0][searchText]) {
        findData(resumeData[0][searchText], searchList);
    }
    else {
        for (key in resumeData[0]) {
            if (event.key != "Backspace") {
                if (key.startsWith(searchText)) {
                    searchBox.value = key;
                }
                for (keyDeep in resumeData[0][key]) {
                    if (((typeof(resumeData[0][key]) === "object" ||
                        typeof(resumeData[0][key]) === "array")) && 
                        keyDeep.startsWith(searchText)) {
                        searchBox.value = keyDeep;
                    }
                }
                searchBox.setSelectionRange(cursorPosition, searchBox.value.length);
            }

            if (resumeData[0][key][searchText]) {
                findData(resumeData[0][key][searchText], searchList);
            }
        }
    }
}

var findData = function (objectElement, parentList) {
    if (typeof(objectElement) === "string") {
        var listElement = document.createElement("li");
        var listBullet = document.createElement("i");
        listBullet.setAttribute("class", "fa-li fa fa-angle-right");
        listElement.appendChild(listBullet)

        var textLabel = document.createTextNode(objectElement);
        listElement.appendChild(textLabel);

        parentList.appendChild(listElement);
    } else {
        for (key in objectElement) {
            if (typeof(objectElement[key]) === "object" || 
                typeof(objectElement[key]) === "array") {
                var listElement = document.createElement("li");
                var listBullet = document.createElement("i");
                listBullet.setAttribute("class", "fa-li fa fa-angle-right");
                listElement.appendChild(listBullet)

                var textLabel = document.createTextNode(key);
                listElement.appendChild(textLabel);

                parentList.appendChild(listElement);
                
                var ulList = document.createElement("ul");
                ulList.setAttribute("class", "fa-ul");
                listElement.appendChild(ulList);
                findData(objectElement[key], ulList);
            } else if (typeof(objectElement[key]) === "string") {
                var listElement = document.createElement("li");
                var listBullet = document.createElement("i");
                listBullet.setAttribute("class", "fa-li fa fa-angle-right");
                listElement.appendChild(listBullet)

                var textLabel = document.createTextNode(objectElement[key]);
                listElement.appendChild(textLabel);

                parentList.appendChild(listElement);
            }
        }
    }
}