import {displaySearch} from './main.js';
 
export const searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

export const proxy = 'https://cors-anywhere.herokuapp.com/';



export function goWiki(bar){
    let term = bar.value;
    let url = proxy + searchUrl + term;
    let titre, lien;

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i=0; i<5;i++){
            titre = data[1][i];
            lien = data[3][i];
            displaySearch(titre,lien); 
        }
        console.log(data);   
        return data
    })
} 