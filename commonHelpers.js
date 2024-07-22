import{S as p,i as c}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function y(s,i){const o=await fetch(`https://pixabay.com/api?key=45032349-419aa61286db3245b797ba166&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${i}`);if(!o.ok)throw new Error(o.status);return await o.json()}const u=document.querySelector(".gallery");let l;function m(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:a,downloads:f})=>`
  <li class="gallery-item">
  <div class="overley-image">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${i}" 
        alt="${o}"
      />
    </a>
    </div>
    <div class="info">
    <div class="info-detail">
        <h2 class="title">Likes</h2>
        <p class="text">${e}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Views</h2>
        <p class="text">${t}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Comments</h2>
        <p class="text">${a}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Downloads</h2>
        <p class="text">${f}</p>
    </div>
  </div>
  </li>
  `).join("")}function g(s){l&&l.refresh(),u.innerHTML="",u.insertAdjacentHTML("afterbegin",m(s)),l=new p(".overley-image a",{captionsData:"alt",captionDelay:250})}const d=document.querySelector(".loading"),n=document.querySelector(".search-form"),h=document.getElementById("search");let v=1;async function b(s){s.preventDefault(),n.elements.query.value.trim().toLowerCase()!=""&&(d.style.display="block",y(n.elements.query.value.toLowerCase(),v).then(r=>{r.totalHits===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(console.log(r.total),g(r.hits),n.elements.query.value="")}).catch(r=>{console.log(r),c.error({message:`Server error: ${r.message}`,position:"topRight"})}).finally(()=>{d.style.display="none"}))}h.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
