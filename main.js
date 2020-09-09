import {proxy, searchUrl, goWiki} from './searcher.js';

const searchList = document.querySelector(".recherche-trouve-list");

const searchBar = document.querySelector(".search-bar-input-google2");

const menuCarre = document.querySelector(".google-menu-carres");
const connexionLink = document.querySelector(".google-login-link");

function lookingFor(nomDeLaRecherche) {
    console.log(nomDeLaRecherche);
    searchBar.value = nomDeLaRecherche; 
    goWiki(searchBar);
}
// Le nom de la recherche a faire est écrit dans le stockage, on la chercher
lookingFor(localStorage.getItem('Recherche'));


searchBar.addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        goWiki(searchBar);
        searchList.innerHTML = "";
    }
})


export function displaySearch (titre,lien) {  
    const searchTitle = document.createElement("li");
    searchTitle.innerHTML = ` ${titre} <br/> ${lien} <br/><br/>` ;
    searchTitle.classList.add("search-list-element");
    searchList.appendChild(searchTitle); 
}



