
searchFormBtn.addEventListener('click', () =>{
    location.hash = '#search='
});


trendingBtn.addEventListener('click' , () =>{
    location.hash = '#trends'
});

arrowBtn.addEventListener('click', () =>{
    location.hash = '#home'
} );

window.addEventListener('hashchange',navigator,false);
window.addEventListener('hashchange',navigator,false);
window.scrollTo(0,0)

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

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
};

function searchPage(){
    console.log('search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
};

function moviePage(){
    console.log('movie!!');
    headerSection.classList.add('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
};

function categoriesPage(){
    console.log('categories!!');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // [#categories , id-name]
    const [_ ,categoryData] = location.hash.split('=');
    var [categoryId , categoryName] = categoryData.split('-');

    console.log(categoryId)

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
 


};

function homePage(){
    
    console.log('home!!');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingPreview();
    getCategoriesPreview();


    


};