import '../styles/banner.css';

import alertError from './alert';

import { getData } from '../api';

const banner = (movie) => {
  const getImages = async () => {
    const url = `${process.env.MOVIE_DETAIL_URL}/${movie.id}/images?api_key=${process.env.API_KEY}`;
    const images = await getData(url);

    if(images.success) {
      return images.data.backdrops.map(pos => `${process.env.IMAGE_URL}${pos.file_path}`);
    } else {
      alertError(images.message);
    }
  };

  window.addEventListener('load', async () => {
    const banner = document.querySelector('.banner');

    const images = await getImages();
    images.forEach(img => {
      banner.insertAdjacentHTML(
        'beforeend',
        `<div class="image" style="background-image: url(${img});">
          <div class="bottom"></div>
        </div>`
      );
    });

    if (images.length === 0) {
      images.push(`${process.env.IMAGE_URL}${movie.backdrop_path}`);
    }
    
    let rightSide = true;
    const toggleSide = () => rightSide = !rightSide;
    const imageWidth = window.innerWidth;
    const bannerWidth = window.innerWidth * images.length;
    let value = 0;
    setInterval(() => {
      value = rightSide ? value + imageWidth : value - imageWidth;

      banner.scrollTo({
        top: 0,
        left: value,
        behavior: 'smooth',
      });

      if(value === bannerWidth || value === 0) {
        toggleSide();
      }
    }, 4500);
  });

  return `
  <div class="banner">
  </div>`;
}

export default banner;