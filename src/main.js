
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    Headers: {
       'content-type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY

    },
});

// helpers functions

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

    categoriesPreviewList.innerHTML = '';

    categories.forEach(genre => {

        //const previewCategoriesList = document.querySelector('#categoriesPreview  .categoriesPreview-list');

        const categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('category-container');

        const categoriesTitle = document.createElement('h3');
        categoriesTitle.classList.add('category-title');
        categoriesTitle.setAttribute('id','id' + genre.id);
        categoriesTitle.addEventListener('click', ()=>{
            location.hash = `#categories=${genre.id}-${genre.name}`;
        });
        const categoryName = document.createTextNode(genre.name);
        
        

        categoriesPreviewSection.appendChild(categoriesPreviewList);
        categoriesPreviewList.appendChild(categoriesContainer)
        categoriesContainer.appendChild(categoriesTitle);
        categoriesTitle.appendChild(categoryName)


        
    });

};

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

