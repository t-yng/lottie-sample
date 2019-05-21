import lottie from 'lottie-web';

lottie.loadAnimation({
  container: document.getElementById('lottie'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animations/circle.json'
});
