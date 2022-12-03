import '../styles/movie.css';

const movieItem = (movie) => {
  const img = movie.poster_path ?? movie.backdrop_path;

  return `
  <div
    data-id="${movie.id}"
    class="movie-item"
    style="background-image: url(${process.env.IMAGE_URL}${img});"
  >
  </div>
`
};
const movies = (movies) => {
  window.addEventListener('load', () => {
    const items = document.querySelectorAll('.movie-item');
    items.forEach(item => {
      item.addEventListener('click', (e) => window.dispatchEvent(new CustomEvent('open_popup', {
        detail: {
          id: e.target.dataset.id,
        }
      })))
    });
  });

  let items = '';
  movies.forEach(movie => items += movieItem(movie));

  return `<div class="movie-container">${items}</div>`;
};

export default movies;