import{S as l}from"./assets/vendor-5af972a3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const c="https://pixabay.com",i="43342767-c7e13188a4d46cb3021e40da1",u=r=>{const e=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${c}/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},h=r=>r.map(e=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
    </a>
    <div class="content">
       <h3 class="title">Likes</h3>
       <p class="quantity">${e.likes}</p>
       <h3 class="title">Views</h3>
       <p class="quantity">${e.views}</p>
       <h3 class="title">Comments</h3>
       <p class="quantity">${e.comments}</p>
       <h3 class="title">Downloads</h3>
       <p class="quantity">${e.downloads}</p>
    </div>
</li> 
        `).join(""),m=document.querySelector(".js-search-form"),f=document.querySelector(".js-search-input"),d=document.querySelector(".js-gallery"),y=r=>{r.preventDefault();const e=f.value;u(e).then(o=>{d.innerHTML=h(o.hits),new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)})};m.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
