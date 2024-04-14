import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { makeRequest } from './js/pixabay-api';

const searchEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const loaderEl = document.querySelector('.loader');
const btnMore = document.querySelector('.btn');



let inputEl = '';
let page = 1;
let deltaPage;

btnMore.style.display = 'none';
loaderEl.style.display = 'none';
 
searchEl.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
 page = 1;
  inputEl = form.elements.imgName.value;
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


  try {
    const data = await makeRequest(inputEl, page);
    console.log(data.hits);

    // loaderEl.style.display = 'none';
    if (data.hits.length === 0) {
      iziToast.show({
        message:
          ' Sorry, there are no images matching your search query. Please try again! ',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: '#FFFFFF',
        transitionIn: 'fadeln',
        timeout: 4000,
      });
      loaderEl.style.display = 'none';
      btnMore.style.display = 'none';
      ulEl.innerHTML = '';
      form.reset();
      return;
    }
    loaderEl.style.display = 'none';
    ulEl.innerHTML = createMarkup(data.hits);
    btnMore.style.display = 'block';
    deltaPage = Math.ceil(data.totalHits / data.hits.length);
    if (page >= deltaPage){
      btnMore.style.display = 'none'
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: 'green',
        messageColor: '#FFFFFF',
        transitionIn: 'fadeln',
        timeout: 4000,
      });
    }
    // console.log(ulEl);
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
    form.reset();
  } catch (error) {
    alert(error);
  }
}
btnMore.addEventListener('click', handleClick);

async function handleClick() {
  btnMore.style.display = 'none';
  loaderEl.style.display = 'block';
  page += 1;

  try {
    const data = await makeRequest(inputEl, page);
    console.log(data.hits.length);
    loaderEl.style.display = 'none';
    ulEl.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    btnMore.style.display = 'block'; //console.log(page);
    if (page >= deltaPage) {
      btnMore.style.display = 'none';
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: 'green',
        messageColor: '#FFFFFF',
        transitionIn: 'fadeln',
        timeout: 4000,
      });
    }

    const card = document.querySelector('.gallery-link');
    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
  } catch (error) {
    alert(error);
  }
}
