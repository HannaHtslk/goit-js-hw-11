import{S as l}from"./assets/vendor-5af972a3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const n="https://pixabay.com",c="43342767-c7e13188a4d46cb3021e40da1",d=r=>{const e=new URLSearchParams({key:c,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${n}/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},u=r=>r.map(e=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
  <div class="image-wrapper">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
     </div>
    </a>
    <div class="content">

    <div class="detailed-info">
    <h3 class="title">Likes</h3>
       <p class="quantity">${e.likes}</p>
         </div>

         <div class="detailed-info">
       <h3 class="title">Views</h3>
       <p class="quantity">${e.views}</p>
        </div>
      
        <div class="detailed-info">
       <h3 class="title">Comments</h3>
       <p class="quantity">${e.comments}</p>
       </div>

        <div class="detailed-info">
       <h3 class="title">Downloads</h3>
       <p class="quantity">${e.downloads}</p>
       </div>

    </div>
</li> 
        `).join(""),f=document.querySelector(".js-search-form"),h=document.querySelector(".js-search-input"),m=document.querySelector(".js-gallery"),p=r=>{r.preventDefault();const e=h.value;d(e).then(o=>{m.innerHTML=u(o.hits),new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)})};f.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
