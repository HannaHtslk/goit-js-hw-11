import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';

const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const gallery = document.querySelector('.js-gallery');

const onFormSubmit = event => {
    event.preventDefault();

    const searchQuery = input.value;


    fetchPhotos(searchQuery)
        .then((photos) => {
            gallery.innerHTML = renderPhotos(photos.hits);
            
    let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    });
    lightbox.refresh();
     })
        .catch((error) => {
            console.log(error)
        })


}


form.addEventListener('submit', onFormSubmit);


