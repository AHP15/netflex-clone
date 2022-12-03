import '../styles/popup.css';

import close from '../assets/close.png';

const popup = () => {

  window.addEventListener('load', () => {
    const closeButton = document.querySelector('.close-icon');
    closeButton.addEventListener('click', () => window.dispatchEvent(new CustomEvent('close_popup')));
  });

  window.addEventListener('close_popup', () => {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
    //popup.insertAdjacentHTML('beforeend', );
  });
  
  window.addEventListener('open_popup', (e) => {
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
    const id = e.detail.id;
    console.log(id);
  })
  return `
  <div class="popup">
    <img class="close-icon" src="${close}" alt="close button" />
  </div>
  `;
};
export default popup;