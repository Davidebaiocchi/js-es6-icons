// Milestone 1 Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout. 
// Milestone 2 Coloriamo le icone per tipo
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone



// Milestone 1 Partendo dalla seguente struttura dati, 
// mostriamo in pagina tutte le icone disponibili come da layout. 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Milestone 1 - Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout   
icons.forEach((element) => {
        
// destrutturo l'oggetto (element) per leggere le chiavi
const {name, prefix, type, family} = element;

// utilizzo template literal per popolare html 
const iconHTML = `
<div class="icons">
    <i class="${family} ${prefix}${name}"></i>
    <div>${name.toUpperCase()}</div>
</div>
`
document.getElementById('icon').innerHTML += iconHTML;       
});
    

// Milestone 2 Coloriamo le icone per tipo
const colors = [
    'red',
    'blue',
    'green'
];

const colorIcon = icons.map((element) => {

    return {
        name,
        prefix,
        type,
        family,
        color : (gender == "female") ? pink : blue, 
    }
});
newCats.forEach((element) => {
    document.getElementById('item').innerHTML += `</br>
    ${element.nome} : <i class= "fas fa-cat" style="color: ${element.colore}"></i>
    <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,  
    `;
});