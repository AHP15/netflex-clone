import './styles/global.css';
import './styles/skeleton.css';

import header from './modules/header';
import banner from './modules/banner';
import alertError from './modules/alert';
import movies from './modules/movies';

import {getData} from './api';
import popup from './modules/popup';

const Header = document.querySelector('header');
const Main = document.querySelector('main');

const renderContent = (moviesData) => {
  const randomIndex = Math.floor(Math.random() * 20);
  Main.replaceChildren('');
  Header.insertAdjacentHTML('beforeend', header());
  Main.insertAdjacentHTML('beforeend', banner(moviesData[randomIndex]));
  Main.insertAdjacentHTML('beforeend', movies(moviesData));
  Main.insertAdjacentHTML('beforeend', popup());
};



const intializeApp = async () => {
  const url = `${process.env.DISCOVER_MOVIE_URL}?api_key=${process.env.API_KEY}&page=1`
  const movies = await getData(url);

  if(movies.success) {
    renderContent(movies.data.results);
  } else {
    alertError(movies.message);
  }
};

intializeApp();