document.addEventListener('DOMContentLoaded', (event) => {
    const trendingMovies = [
        {
            title: "Movie 1",
            image: "https://via.placeholder.com/200x300"
        },
        {
            title: "Movie 2",
            image: "https://via.placeholder.com/200x300"
        },
        {
            title: "Movie 3",
            image: "https://via.placeholder.com/200x300"
        },
        {
            title: "Movie 4",
            image: "https://via.placeholder.com/200x300"
        },
        {
            title: "Movie 5",
            image: "https://via.placeholder.com/200x300"
        }
    ];

    const trendingContainer = document.getElementById('trending');

    trendingMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';

        const movieImage = document.createElement('img');
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        movieItem.appendChild(movieImage);
        trendingContainer.appendChild(movieItem);
    });
});