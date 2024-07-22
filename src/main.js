import getPicturesByQuery from "./js/pixabay-api.js";
import drawGallery from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loading = document.querySelector('.loading');
const form = document.querySelector('.search-form');
const btnSearch = document.getElementById('search');

let pageNumber = 1;

async function onSearch(evt) {
evt.preventDefault();
    const input = form.elements.query.value.trim().toLowerCase(); 
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
                console.log(responce.total);
            //console.log(responce.hits[0].webformatURL);
            //console.log(responce.hits[0].likes);
                drawGallery(responce.hits);
                form.elements.query.value = '';
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

btnSearch.addEventListener('submit', onSearch);
