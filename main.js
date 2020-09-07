import {goWiki, proxy, searchUrl} from '/app.js';


const searchBar = document.querySelector(".search-bar-input-google");

const menuCarre = document.querySelector(".google-menu-carres");
const connexionLink = document.querySelector(".google-login-link");

//let derniereRecherche = localStorage.length;

//console.log(localStorage[2][3])

//searchBar.value = derniereRecherche;

addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        //goWiki();
        console.log("c'est bon")
        return true;
        }  
})