import './styles.css';
import refs from './js/refs';
import apiService from './js/apiService';
import updateMarkup from './js/updateMarkup';
import * as basicLightbox from 'basiclightbox';

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', onSubmit);
refs.galleryContainer.addEventListener('click', onImageClick);
refs.loadMoreBtn.addEventListener('click', loadMoreImages);

function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    searchQuery = form.elements.query.value;
    refs.galleryContainer.innerHTML = '';
    form.reset();
    refs.loadMoreBtn.hidden = true;
    apiService(searchQuery, page).then(updateMarkup);
}

function loadMoreImages() {
    page += 1;
    apiService(searchQuery, page).then(updateMarkup);
}

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src=${imageUrl}>`);
  instance.show();
}