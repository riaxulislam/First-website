// script.js
const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.arrow.right');

leftButton.addEventListener('click', () => {
  track.scrollBy({ left: -300, behavior: 'smooth' });
});

rightButton.addEventListener('click', () => {
  track.scrollBy({ left: 300, behavior: 'smooth' });
});
