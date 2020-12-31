const dropDownShow = document.querySelector("#navbarSupportedContent > div > div");

const searchButton = document.querySelector("#navbarSupportedContent > form > button")

const searchInput = document.querySelector("#navbarSupportedContent > form > input");

const mainContent =  document.querySelector(".main-content");

const newMoviesLink = document.querySelector("[data-newMovies]");

module.exports =  { 
    dropDownShow, 
    searchButton, 
    searchInput,
    mainContent,
    newMoviesLink
};