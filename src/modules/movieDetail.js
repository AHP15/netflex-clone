import start from '../assets/star.png';

const movieDetail = (detail) => {
  const logo = `${process.env.IMAGE_URL}${detail.poster_path ?? detail.backdrop_path}`;
  let rating  = '';
  Array(Math.floor(detail.vote_average)).fill(null).forEach(
    () => rating += `<img src="${start}" alt="rating start" />`
  );

  return `
  <div>
    <div class="image-container">
      <img src="${logo}" alt=${detail.title} />
    </div>
    <h2>${datil.original_title ?? detail.title}</h2>
    <p>${detail.overview}</p>
    <div>
      <p>${rating}</p>
      <p>${detail.vote_count}</p>
    </div>
  </div>
  `;
};
export default movieDetail;