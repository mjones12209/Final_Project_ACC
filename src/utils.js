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

export {cleanThis, urlEncode};