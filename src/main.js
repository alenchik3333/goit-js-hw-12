import getPicturesByQuery from "./js/pixabay-api.js";
import drawGallery from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loading = document.querySelector('.loading');
const form = document.querySelector('.search-form');
const formNext = document.querySelector('.next-form');

let pageNumber = 1;
let searchText = '';
async function onSearch(evt) {
    evt.preventDefault();
    pageNumber = 1;
    
    const input = form.elements.query.value.trim().toLowerCase(); 
    searchText = input;
    if (input != '') {
        loading.style.display = 'block';
    getPicturesByQuery(form.elements.query.value.toLowerCase(), pageNumber).then((responce) => {
        {
            if (responce.totalHits === 0) {
            iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
        }
            else {
                drawGallery(responce.hits, false);
                
                formNext.style.display = 'block';
          }     
        }
    
    }).catch(ex =>
    {
        console.log(ex);
        iziToast.error({
                    message: `Server error: ${ex.message}`,
                    position: 'topRight'
                });
    }).finally(() => {
        loading.style.display = 'none';
    })
    }
}

async function onSearchNext(evt) {
    evt.preventDefault();
    pageNumber++;
    if (searchText != '') {
        loading.style.display = 'block';
        formNext.style.display = 'none';
    getPicturesByQuery(searchText, pageNumber).then((responce) => {
        {
            if (responce.totalHits === 0) {
            iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight'
                });
        }
            else {
                drawGallery(responce.hits, true);
                /*
                setTimeout(() => {
                    const rect = form.getBoundingClientRect();
                window.scrollBy({
                top: rect.height,
                behavior: "smooth",
                });
                }, 1000);
                */
                
                formNext.style.display = 'block';
                scroll();
          }     
        }
    
    }).catch(ex =>
    {
        console.log(ex);
        iziToast.error({
                    message: `Server error: ${ex.message}`,
                    position: 'topRight'
                });
    }).finally(() => {
        loading.style.display = 'none';
    })
    }
}
function scroll() {
    const list = document.querySelector('li');
    const height = list.getBoundingClientRect().height;
    window.scrollBy({
        top: height*2,
        behavior: "smooth",
    });
}
form.addEventListener('submit', onSearch);
formNext.addEventListener('submit', onSearchNext);