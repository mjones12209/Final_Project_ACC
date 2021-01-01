import axios from "axios";
import {apiKEY} from "../keys/keys";
import  * as DOMEl from "./dom";
import {cleanThis, urlEncode, createTitle,MovieContainer, filterPicture, filterDesc} from "./utils";

//request genre
const requestGenre = (genreID,genreName) => {
    let options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreID}&include_adult=false&include_video=false&page=1`
    }
    axios.request(options).then((response) => { 
        createTitle(genreName, DOMEl.mainContent)
        response.data.results.forEach((element, index) => {
            let picture =  filterPicture(element.backdrop_path);
            let desc = filterDesc(element.overview);
            if (index > 20){return;}
            const container = new MovieContainer("div",element.title,picture.filteredPicture,desc.filteredDesc,DOMEl.mainContent,element.release_date);
            container.createAndAttch();
        });
    }).catch(error => console.log(error));

}


//populate genre dropdown
const  populateGenre = () => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=en-US`

        };
          
        axios.request(options).then( (response) => {
            response.data.genres.forEach(element => {
              let clean = cleanThis(`<a class='dropdown-item' data-genre=${element.id} data-genrename=${element.name}>${element.name}</a>`);
              DOMEl.dropDownShow.insertAdjacentHTML("beforeend", clean);
            });
            document.querySelectorAll(".dropdown-item").forEach((element) => {
                element.addEventListener('click', (e) => {
                  DOMEl.mainContent.innerHTML = "";
                  requestGenre(element.getAttribute('data-genre'),element.getAttribute('data-genrename'));
                });
            });
        }).catch( (error) => {
            console.error(error);
        });
 
}

//search function on the page
const searchFunction = () => {
    DOMEl.searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        justSearch();
    });

}

//search function
const justSearch = () => {
    let dirtyInput = DOMEl.searchInput.value;
    let queryReadyInput = urlEncode(dirtyInput, 's');
    if(DOMEl.searchInput.textContent === '') {
        alert("Please enter a search query.");
        return;
    }
    DOMEl.mainContent.innerHTML = "";
    let options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=${queryReadyInput}`
    }
    axios.request(options).then((response)=>{
        DOMEl.mainContent.innerHTML = "";
        if(response.data.results.length === 0){alert("No results found.")}
        response.data.results.forEach((element, index)=>{
            let picture =  filterPicture(element.backdrop_path);
            let desc = filterDesc(element.overview);
            if (index >= 30) {return;}
            const container = new MovieContainer("div",element.title,picture.filteredPicture,desc.filteredDesc,DOMEl.mainContent,element.release_date);
            container.createAndAttch();
        });
    }).catch(error => console.log(error));
}
    


//new movies
const newMovies = () => {
    let d = new Date();
    DOMEl.newMoviesLink.addEventListener("click",() => {
        DOMEl.mainContent.innerHTML="";
        let options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=release_date.desc&primary_release_year=${d.getFullYear()}&include_adult=false&include_video=false&page=1`
        }

        axios.request(options).then((response)=>{
            response.data.results.forEach( (element, index)=> {
                let picture =  filterPicture(element.backdrop_path);
                let desc = filterDesc(element.overview);
                if(index > 30){return;}
                const container = new MovieContainer("div",element.title,picture.filteredPicture,desc.filteredDesc,DOMEl.mainContent,element.release_date);
                container.createAndAttch();
            });
        });
    });
}




export {
    populateGenre, 
    searchFunction, 
    newMovies,
    
};