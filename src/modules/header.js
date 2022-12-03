import logo from '../assets/logo.png';

import '../styles/header.css';

const header = () => {
  window.addEventListener('load', () => {
    const header = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 150) {
        header.style.backgroundColor = "rgba(17, 17, 17, 0.7)";
      }
      else {
        header.style.backgroundColor = "transparent";
      }
    });
  });

  return `
    <nav>
      <div class="logo">
        <img src="${logo}" alt="Netflix logo" />
      </div>
      <form>
        <input class="search-input" type="text" name="search" placehodler="Find you favorite movie" />
      </form>
    </nav>
  `;
};

export default header;