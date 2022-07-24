window.addEventListener('hashchange',navigator,false);
window.addEventListener('hashchange',navigator,false);

function navigator(){

    console.log({ location })

    if (location.hash.startsWith('#trends')){
        trendPage();
    } else if(location.hash.startsWith('#search')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        moviePage();
    }else if(location.hash.startsWith('#categories=')){
        categoriesPage();
    } else{
        homePage();
    };
    
    
};


function trendPage(){
    console.log('TRENDS');
};

function searchPage(){
    console.log('search!!');
};

function moviePage(){
    console.log('movie!!');
};

function categoriesPage(){
    console.log('categories!!');
};

function homePage(){
    console.log('home!!');
    trendingPreview();
    categoriesPreview();
};