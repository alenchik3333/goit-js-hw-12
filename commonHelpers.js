import{S as v,i as l}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function m(s,e){const i=await fetch(`https://pixabay.com/api?key=45032349-419aa61286db3245b797ba166&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${e}`);if(!i.ok)throw new Error(i.status);return await i.json()}const p=document.querySelector(".gallery");let d;function b(s){return s.map(({webformatURL:e,largeImageURL:o,tags:i,likes:t,views:r,comments:a,downloads:g})=>`
  <li class="gallery-item">
  <div class="overley-image">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${e}" 
        alt="${i}"
      />
    </a>
    </div>
    <div class="info">
    <div class="info-detail">
        <h2 class="title">Likes</h2>
        <p class="text">${t}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Views</h2>
        <p class="text">${r}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Comments</h2>
        <p class="text">${a}</p>
    </div>
    <div class="info-detail">
        <h2 class="title">Downloads</h2>
        <p class="text">${g}</p>
    </div>
  </div>
  </li>
  `).join("")}function h(s,e){e||(d&&d.refresh(),p.innerHTML=""),p.insertAdjacentHTML(e?"beforeend":"afterbegin",b(s)),d=new v(".overley-image a",{captionsData:"alt",captionDelay:250})}const n=document.querySelector(".loading"),y=document.querySelector(".search-form"),c=document.querySelector(".next-form");let u=1,f="";async function S(s){s.preventDefault(),u=1;const e=y.elements.query.value.trim().toLowerCase();f=e,e!=""&&(n.style.display="block",m(y.elements.query.value.toLowerCase(),u).then(o=>{o.totalHits===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(o.hits,!1),c.style.display="block")}).catch(o=>{console.log(o),l.error({message:`Server error: ${o.message}`,position:"topRight"})}).finally(()=>{n.style.display="none"}))}async function w(s){s.preventDefault(),u++,f!=""&&(n.style.display="block",c.style.display="none",m(f,u).then(e=>{e.totalHits===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(h(e.hits,!0),c.style.display="block",L())}).catch(e=>{console.log(e),l.error({message:`Server error: ${e.message}`,position:"topRight"})}).finally(()=>{n.style.display="none"}))}function L(){const e=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}y.addEventListener("submit",S);c.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
