import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { makeRequest } from './js/pixabay-api';
const searchEl = document.querySelector('form');
const ulEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
loaderEl.style.display = 'none';
searchEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEl = form.elements.imgName.value;
  console.log(inputEl);
  if (inputEl === '') {
    iziToast.show({
      message: ' Field must be filled! ',
      position: 'topRight',
      backgroundColor: 'red',
      messageColor: '#FFFFFF',
      transitionIn: 'fadeln',
      timeout: 4000,
    });
    return;
  }

  loaderEl.style.display = 'block';

  makeRequest(inputEl)
    .then(data => {
      console.log(data.hits);

      loaderEl.style.display = 'none';
      if (data.hits.length === 0) {
        ulEl.innerHTML = '';
        iziToast.show({
          message:
            ' Sorry, there are no images matching your search query. Please try again! ',
          position: 'topRight',
          backgroundColor: 'red',
          messageColor: '#FFFFFF',
          transitionIn: 'fadeln',
          timeout: 4000,
        });
        return;
      }
      ulEl.innerHTML = createMarkup(data.hits);
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => console.log('catch', error))
    .finally(() => form.reset());
}
