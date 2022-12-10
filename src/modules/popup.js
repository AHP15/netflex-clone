import '../styles/popup.css';

import close from '../assets/close.png';

import { getData } from '../api';
import alertError from './alert';

const loading = () => `<div class="loading"></div>`;

const popup = () => {

  window.addEventListener('load', () => {
    const close = document.querySelector('.close-icon');
    close.addEventListener('click', () => window.dispatchEvent(new CustomEvent('close_popup')));
  });

  window.addEventListener('close_popup', () => {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');

    const detail = document.querySelector('.movie-datail');
    detail.replaceChildren('');
    detail.insertAdjacentHTML('beforeend', loading());
  });
  
  window.addEventListener('open_popup', async (e) => {
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
    const id = e.detail.id;
    const detail = document.querySelector('.movie-datail');
    
    const detailUrl = `${process.env.MOVIE_DETAIL_URL}/${id}?api_key=${process.env.API_KEY}`;
    const videosUrl = `${process.env.MOVIE_DETAIL_URL}/${id}/videos?api_key=${process.env.API_KEY}`;
    const reviewUrl = `${process.env.MOVIE_DETAIL_URL}/${id}/reviews?api_key=${process.env.API_KEY}`;
    
    const responses = await Promise.allSettled([
      getData(detailUrl),
      getData(videosUrl),
      getData(reviewUrl),
    ]);

    responses.forEach(res => console.log(res));
    /*
    if(data.success) {
      console.log(data);
    } else {
      alertError(data.message);
    }*/
  });

  return `
  <div class="popup">
    <img class="close-icon" src="${close}" alt="close button" />
    <div class="movie-datail">
     ${loading()}
    </div>
  </div>
  `;
};
export default popup;