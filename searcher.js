export const searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

export const proxy = 'https://cors-anywhere.herokuapp.com/';


export function goWiki(bar){
    let term = bar.value;
    let url = proxy + searchUrl + term;
    let donnees;

    let fetchs = fetch(url)
    .then(response => {
        return response.json();
    })
    
    .then(data => {
        console.log(data);
        console.log(fetchs)
        //console.log(data[1][0]);
        //console.log(data[3][0]);
        return data
    })
    
    return fetchs
}