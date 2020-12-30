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

//Movie element container
class MovieContainer {
    constructor(parentElement,title,picture,desc,location,release) {
        this.container = document.createElement(parentElement);
        this.imagePrepend = "https://image.tmdb.org/t/p/w500/";
        this.picture = picture;
        this.title = title;
        this.desc =desc;
        this.htmlString = `
            <h2>${title}</h2>
            <h6><b>Release Date: </b> ${release}</h6>
            <figure class="figure">
                <img src="${this.imagePrepend + this.picture}" class="figure-img img-fluid rounded"  alt=${this.title} />
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

//create movie elements (re-wrote it as a class above)
// const createMovieContainerElement = (parentElement,title,picture,desc,location) => {
//      let container = document.createElement(parentElement);
//      let imagePrepend = "https://image.tmdb.org/t/p/w500/";
//      let htmlString = `
//             <h2>${title}</h2>
//             <figure class="figure">
//                 <img src="${imagePrepend + picture}" class="figure-img img-fluid rounded"  alt=${title} />
//                 <figcaption class="figure-caption">${desc}</figcaption>
//             </figure>
//             `;
//     let cleanString = DOMPurify.sanitize(htmlString);
//     container.insertAdjacentHTML('beforeend',cleanString);
//     location.appendChild(container);
// }

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
    MovieContainer
};