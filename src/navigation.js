window.addEventListener('DOMContentloaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location})

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviePage();
    } else if (location.hash.startsWith('#categories=')){
        categoriesPage();
    } else {
        homePage();
    }
    
    location.hash
}

function homePage() {
    console.log('Home!!') 
    
    getTrandingMoviesPreview();
    getCategoriesMoviesPreview();
}

function categoriesPage() {
    console.log('Categoires!!')   
}

function moviePage() {
    console.log('Movie!!')
}

function searchPage() {
    console.log('Search!!')
}

function trendsPage() {
    console.log('trends!!')
}
