import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(r){const s=new URLSearchParams({key:"43244654-6a0ffb606fc9a226d05679f88",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.json()})}function d(r){return r.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${i}" >
                   <img
                     class = "gallery-image"
                     src = "${s}"
                     alt = "${a}"
                     />
                 </a>
                 <div class = "img-inform-wrapper">
                 <div class = "img-inform">
                 <h2 class ="img-title">Likes</h2>
                 <p class = "img-text">${e}</p>
                 </div>
                  <div class = "img-inform">
                 <h2 class ="img-title">Views</h2>
                 <p class = "img-text">${t}</p>
                 </div>
                  <div class = "img-inform">
                 <h2 class ="img-title">Comments</h2>
                 <p class = "img-text">${o}</p>
                 </div>
                  <div class = "img-inform">
                 <h2 class ="img-title">Downloads</h2>
                 <p class = "img-text">${u}</p>
                 </div></div>
            </li>`).join("")}function h(r){r.style.display="block"}function c(r){r.style.display="none"}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".loading-indicator");m.addEventListener("submit",y);function y(r){r.preventDefault();const s=r.currentTarget.elements.data.value.trim();if(s==="")return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});h(l),g(s).then(i=>{if(i.hits.length===0)return c(l),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});c(l),p.innerHTML=d(i.hits),v.refresh()}).catch(i=>{n.error({message:`${i}`})}).finally(()=>{m.reset()})}let v=new f(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionsDelay:250});
//# sourceMappingURL=commonHelpers.js.map