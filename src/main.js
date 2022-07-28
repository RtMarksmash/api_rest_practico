
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    Headers: {
       'content-type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY

    },
});

// Utils

function createMovies(movie, container){


    container.innerHTML = '';

    movie.forEach(movie => {
        
        
        const movieContainer = document.createElement('div');
        
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        );

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);

        movieContainer.addEventListener('click' , ()=>{
            location.hash = `movie=${movie.id}`
        });

    })};

 function createCategory(category, container){
    container.innerHTML = '';

    category.forEach(genre => {

        
        const categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('category-container');

        const categoriesTitle = document.createElement('h3');
        categoriesTitle.classList.add('category-title');
        categoriesTitle.setAttribute('id','id' + genre.id);
        categoriesTitle.addEventListener('click', ()=>{
            location.hash = `#categories=${genre.id}-${genre.name}`;
        });
        const categoryName = document.createTextNode(genre.name);
        
        

        categoriesContainer.appendChild(categoriesTitle);
        categoriesTitle.appendChild(categoryName)
        container.appendChild(categoriesContainer)
        


})}; 



// calling api 

async function getTrendingPreview() {
    const { data } = await api('trending/movie/day');

    const movies = data.results
    console.log(movies) 


  createMovies(movies,trendingMoviesPreviewList);

};



async function getCategoriesPreview(){

    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log(categories);


createCategory(categories,categoriesPreviewList);
 }

getCategoriesPreview();
getTrendingPreview();



async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
          with_genres: id,
        },
      });
    const movies = data.results;
    console.log(data);

    createMovies(movies,genericSection);

    

};


 async function getMoviesBySearch(querys) {
    const { data } = await api('search/movie', {
        params: {
          query: querys,
        },
      });
    const movies = data.results;
    console.log(data);

    createMovies(movies,genericSection);
    };


async function getTrending() {
    const { data } = await api('trending/movie/day');
    
    const movies = data.results
    console.log(movies) 
    
    
    createMovies(movies,genericSection);
    
    };
    

    async function getMoviesById(id) {
        const { data: movie } = await api(`movie/${id}`)

        const movieImgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        headerSection.style.background = `
           linear-gradient(
             180deg,
             rgba(0, 0, 0, 0.35) 19.27%,
             rgba(0, 0, 0, 0) 29.17%
          )
        , url(${movieImgUrl})`;

        movieDetailTitle.textContent = movie.title;
        movieDetailDescription.textContent = movie.overview;
        movieDetailScore.textContent = movie.vote_averange;

        createCategory(movie.genres , movieDetailCategoriesList);
        //createMovies(movie.poster_path , relatedMoviesContainer)
    };

    async function getMoviesSimilarById(id) {
        const { data } = await api(`movie/${id}/recommendations`);
        const movie = data.results;

        console.log(movie);
        

        createMovies(movie, relatedMoviesContainer);

    }