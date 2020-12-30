require("./css/navHeader.css");
require("./css/navComponent.css");
require("./css/buttons.css")
require("./css/mainContent.css")
// import * as log from "./log"; //debug
import {populateGenre, searchFunction} from "./app";

populateGenre()
searchFunction();



// debug
// log.logFunc().logDomSelectors();
// log.logFunc().logDropDownsAfterAjax();