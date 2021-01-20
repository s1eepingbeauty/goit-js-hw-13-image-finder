import imageCard from '../templates/imageCard.hbs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

function updateMarkup(images) {
  let markup = '';
    if (images.status != '404') {
        if (images.length > 0) {
            markup = imageCard(images);
        }else{
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