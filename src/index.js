//*********CSS Styles********//
require("./css/navHeader.css");
require("./css/navComponent.css");
require("./css/buttons.css");
require("./css/mainContent.css");
require("./css/footer.css");
//***************************//

import {newMovies, populateGenre, searchFunction} from "./app";

newMovies();
populateGenre();
searchFunction();