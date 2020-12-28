import axios from "axios";
import {apiKEY} from "../keys/keys";
import { dropDownShow } from "./dom";



const populateGenre = () => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKEY}&language=en-US`

        };
          
        axios.request(options).then( (response) => {
            console.log(response.data);
            
            response.data.genres.forEach(element => {
              dropDownShow.insertAdjacentHTML("beforeend", `<a class='dropdown-item'>${element.name}</a>`);
            console.log(dropDownShow)
            });
        }).catch( (error) => {
            console.error(error);
        });
}

export {populateGenre};