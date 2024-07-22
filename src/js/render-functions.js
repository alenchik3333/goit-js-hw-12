import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.gallery');
let gallery;
function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-item">
  <div class="overley-image">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}" 
        alt="${tags}"
      />
    </a>
    </div>
    <div class="info">
    <div class="info-detail">
        <h2 class="title">Likes</h2>
        <p class="text">${likes}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Views</h2>
        <p class="text">${views}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Comments</h2>
        <p class="text">${comments}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Downloads</h2>
        <p class="text">${downloads}</p>
    </div>
  </div>
  </li>
  `
    )
    .join('');
}
function drawGallery(images) {
  if (gallery) gallery.refresh();
  galleryEl.innerHTML = '';
  galleryEl.insertAdjacentHTML('afterbegin', createMarkup(images));
  gallery = new SimpleLightbox('.overley-image a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export default drawGallery;