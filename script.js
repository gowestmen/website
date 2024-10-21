import PhotoSwipeLightbox from 'node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery--getting-started',
  children: 'a',

  // setup PhotoSwipe Core dynamic import
  pswpModule: () => import('node_modules/photoswipe/dist/photoswipe-lightbox.esm.js')
});
lightbox.init();