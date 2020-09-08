import {searchUrl, proxy, goWiki} from './searcher.js';

const gmailLink = document.querySelector(".gmail-link");
const ImageSearchBtn = document.querySelector(".google-images-link");
const menuCarre = document.querySelector(".google-menu-carres")
const connexionLink = document.querySelector(".google-login-link")

const searchBar = document.querySelector(".search-bar-input-google1");
const chanceBtn = document.querySelector("#jai_de_la_chance");
const googleSearchBtn = document.querySelector("#recherche_google");
 

searchBar.addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        localStorage.setItem('Recherche', searchBar.value);
        window.open("main.html", "_self");
        console.log('c est bon');
        //return true;
        }  
})

