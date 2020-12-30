import axios from "axios";
import {apiKEY} from "../keys/keys";
import  * as DOMEl from "./dom";
import {cleanThis, urlEncode} from "./utils";

//request genre
const requestGenre = (genreID,genreName) => {
    let options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreID}&include_adult=false&include_video=false&page=1`
    }
    axios.request(options).then((response) => { 
        let title = document.createElement("h1");
        title.innerHTML = genreName;
        DOMEl.mainContent.appendChild(title);
        response.data.results.forEach((element, index) => {
            if (index > 20){
                return;
            }
            let div = document.createElement("div");
            let imagePrepend = "https://image.tmdb.org/t/p/w500/";
            let htmlString = `
            <h2>${element.title}</h2>
            <figure class="figure">
                <img src="${imagePrepend + element.backdrop_path}" class="figure-img img-fluid rounded"  alt=${element.title} />
                <figcaption class="figure-caption">${element.overview}</figcaption>
            </figure>
            `;
            let cleanstring = cleanThis(htmlString);
            div.insertAdjacentHTML('beforeend',cleanstring);
            DOMEl.mainContent.appendChild(div);
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
        let dirtyInput = DOMEl.searchInput.value;
        let queryReadyInput = urlEncode(dirtyInput, 's');
        DOMEl.mainContent.innerHTML = "";
        let options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKEY}&query=${queryReadyInput}`
        }
        e.preventDefault();
        axios.request(options).then((response)=>{
            document.createElement("div");
            let htmlString = `
            <h2>${element.title}</h2>
            <figure class="figure">
                <img src="${imagePrepend + element.backdrop_path}" class="figure-img img-fluid rounded"  alt=${element.title} />
                <figcaption class="figure-caption">${element.overview}</figcaption>
            </figure>
            `;
    
        }).catch(error => console.log(error));

    });



}


export {populateGenre, searchFunction};