
const alertError = (message) => {
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', `<p class="error">${message}</p>`);
};

export default alertError;