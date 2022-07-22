async function trendingPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results
    console.log(data) 

    movies.forEach(movie => {
        
            const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');



            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');

            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src',
                `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            );

            movieContainer.appendChild(movieImg);
            trendingPreviewMoviesContainer.appendChild(movieContainer);




        });

};

trendingPreview();


async function categoriesPreview(){

    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();

    const categories = data.genres;
    console.log(categories);

    categories.forEach(genre => {

        const previewCategoriesList = document.querySelector('#categoriesPreview  .categoriesPreview-list');

        const categoriesContainer = document.createElement('div');
        categoriesContainer.classList.add('category-container');

        const categoriesTitle = document.createElement('h3');
        categoriesTitle.classList.add('category-title');
        categoriesTitle.setAttribute('id','id' + genre.id);
        const categoryName = document.createTextNode(genre.name);

        previewCategoriesList.appendChild(categoriesContainer);
        categoriesContainer.appendChild(categoriesTitle);
        categoriesTitle.appendChild(categoryName)


        
    });

}

categoriesPreview();