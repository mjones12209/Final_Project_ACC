import DOMPurify from 'dompurify';


//clean input for html strings
const cleanThis = (htmlString) => DOMPurify.sanitize(htmlString);


//do stuff with url encoding, flags are for if there is a different case in the future
const urlEncode = (htmlInput, flags) => {
    if(flags === 's') {
        let cleanInput = cleanThis(htmlInput);
        let queryReady = cleanInput.replace(/ /g, '+');
        return queryReady;
    }    
} 

const filterPicture = (backdrop_path)=> {
    let filteredPicture;
    if (backdrop_path === null){
        filteredPicture = "https://www.hallaminternet.com/assets/show.jpg";
    } else if (backdrop_path !== null){
        filteredPicture = "https://image.tmdb.org/t/p/w500/" + backdrop_path;
    }

    return {
        filteredPicture
    }
}

//Movie element container
class MovieContainer {
    constructor(parentElement,title,picture,desc,location,release) {
        this.container = document.createElement(parentElement);
        // this.imagePrepend = "https://image.tmdb.org/t/p/w500/";
        this.picture = picture;
        this.title = title;
        this.desc =desc;
        this.htmlString = `
            <h2>${title}</h2>
            <h6><b>Release Date: </b> ${release}</h6>
            <figure class="figure">
                <img src="${this.picture}" class="figure-img img-fluid rounded"  alt=${this.title} />
                <figcaption class="figure-caption">${this.desc}</figcaption>
            </figure>
        `;
        this.cleanString = DOMPurify.sanitize(this.htmlString);
        this.location = location;
    }
    createAndAttch = () => {
        this.container.insertAdjacentHTML("beforeend",this.cleanString);
        this.location.appendChild(this.container);
    }
}

let filterDesc = (desc) => {
    let filteredDesc;
    if(desc === "") {
        filteredDesc = "Sorry, there is no description available";
    } else if(desc !== null) {
        filteredDesc = desc;
    }

    return {
        filteredDesc
    }
}


const createTitle = (genreName, location) => {
    let title = document.createElement("h1");
    title.innerHTML = genreName;
    location.appendChild(title);
}



//create element function goes here

export  {
    cleanThis, 
    urlEncode, 
    createTitle,
    MovieContainer,
    filterPicture,
    filterDesc
};