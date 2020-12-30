//for populate genre
const dropDownShow = document.querySelector("#navbarSupportedContent > div > div");

//search function
const searchButton = document.querySelector("#navbarSupportedContent > form > button")
const searchInput = document.querySelector("#navbarSupportedContent > form > input");

const mainContent =  document.querySelector(".main-content");

module.exports =  { 
    dropDownShow, 
    searchButton, 
    searchInput,
    mainContent
};