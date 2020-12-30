const DOMEl = require("./dom")

//any console logs would go here
const logFunc = () => {
    const logDomSelectors = () => {
        console.log(
        "dropdownShow:",DOMEl.dropDownShow, 
        "searcjButton:",DOMEl.searchButton,
        "searchInput:", DOMEl.searchInput,
        "mainContent:", DOMEl.mainContent
        );
    }
    const logDropDownsAfterAjax = () => {
        setTimeout(()=> {
            console.log(document.querySelectorAll(".dropdown-item"))
        },3000);
 
    }

    return {
        logDomSelectors,
        logDropDownsAfterAjax
    }
}

module.exports = {
    logFunc
}