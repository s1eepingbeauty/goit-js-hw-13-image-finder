import './styles.css';
import apiService from './js/apiService';
import updateMarkup from './js/updateMarkup';

const refs = {
    searchImages: document.querySelector('.search-form-input'),
    searchBtn: document.querySelector('.search-form-btn'),
    galleryContainer: document.querySelector('.gallery'),
};

let page = 1;

refs.searchBtn.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    updateScreen();
    apiService(refs.searchImages.value, page).then(data => updateMarkup(data));

}

function updateScreen() {
  refs.galleryContainer.innerHTML = '';
}
