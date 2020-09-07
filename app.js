const gmailLink = document.querySelector(".gmail-link");
const ImageSearchBtn = document.querySelector(".google-images-link");
const menuCarre = document.querySelector(".google-menu-carres")
const connexionLink = document.querySelector(".google-login-link")

const searchBar = document.querySelector(".search-bar-input-google");
const chanceBtn = document.querySelector("#jai_de_la_chance");
const googleSearchBtn = document.querySelector("#recherche_google");

export const searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

export const proxy = 'https://cors-anywhere.herokuapp.com/';


addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        goWiki();
        window.open("search.html", "_self");
        }  
})

 export function goWiki(){
    let term = searchBar.value;
    let url = proxy + searchUrl + term;
    
    fetch(url)
    .then(response => {
	return response.json();
    })
    .then(data => {
        //localStorage.setItem(term, data)
        console.log(data);
    })
    
    
}

/*function gotData(data){
    console.log(data);
}*/

