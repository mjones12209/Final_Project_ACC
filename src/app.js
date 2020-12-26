import axios from "axios";
import { apiKEY, apiURL } from "../keys/keys.js";

const options = {
  method: 'GET',
  url: apiURL,
  params: {genre: '/chart/popular/genre/adventure'},
  headers: {
    'x-rapidapi-key': '8545fffcfemsh2deb8c538d7662ep187974jsn8ad67a359f16',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});