import refs from './refs';
import imageCard from '../templates/imageCard.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

function updateMarkup(images) {
  let markup = '';
    if (images.status != '404') {
        if (images.length > 0) {
            markup = imageCard(images);
            refs.loadMoreBtn.hidden = false;
        } else {
            refs.loadMoreBtn.hidden = true;
            error({
                title: 'Image not found!',
                hide: true,
                delay: 3000,
            });
        }
    } 
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;