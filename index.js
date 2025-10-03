import{a as p,S as g,i as l}from"./assets/vendor-qFDXVFVo.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",h="52591555-089c8d48efe1c098578f49548";function L(n){const o={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return p.get(y,{params:o}).then(t=>t.data)}const u=document.getElementById("gallery"),i=document.getElementById("loader"),A=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){if(!Array.isArray(n)||n.length===0)return;const o=n.map(t=>{const{webformatURL:a,largeImageURL:e,tags:r,likes:s,views:f,comments:d,downloads:m}=t;return`
      <li class="gallery__item">
        <a href="${e}" class="gallery__link">
          <img class="gallery__image" src="${a}" alt="${r}" loading="lazy" />
        </a>
        <div class="card-stats">
          <span>👍 ${s}</span>
          <span>👁 ${f}</span>
          <span>💬 ${d}</span>
          <span>⬇ ${m}</span>
        </div>
      </li>
    `}).join("");u.insertAdjacentHTML("beforeend",o),A.refresh()}function v(){u.innerHTML=""}function E(){i&&(i.classList.add("visible"),i.setAttribute("aria-hidden","false"))}function I(){i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}const P=document.getElementById("search-form"),_=document.getElementById("search-input");function w(){l.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"})}function R(){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function c(n="An error occurred while fetching images"){l.error({title:"Error",message:n,position:"topRight"})}P.addEventListener("submit",n=>{n.preventDefault();const o=_.value.trim();if(o.length===0){w();return}v(),E(),L(o).then(t=>{if(!t||!Array.isArray(t.hits)){c("Unexpected response format from API.");return}if(t.hits.length===0){R();return}b(t.hits)}).catch(t=>{console.error("API error:",t),c(t.message||"Failed to fetch images.")}).finally(()=>{I()})});
//# sourceMappingURL=index.js.map
