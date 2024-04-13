import{a as m,i as n,S as p}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function d(r){return r.map(({webformatURL:o,largeImageURL:l,tags:s,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href=${l}>
     <img 
     class="gallery-image" 
    src="${o}" 
    alt="${s}"/>
   <ul class="box-list">
     <li>
      <h2 class="box-title">Likes</h2>
       <p class="box-text">${e}</p>
       </li>
      <li>
      <h2 class="box-title">Views</h2>
      <p class="box-text">${t}</p>
      </li>
      <li class="box-item">
      <h2 class="box-title">Comments</h2>
      <p class="box-text">${i}</p>
      </li>
      <li class="box-item">
      <h2 class="box-title">Downloads</h2>
      <p class="box-text">${u}</p>
      </li>
      </ul>
      </a>
      </li>`).join("")}const f="https://pixabay.com/api/",h="43264129-0a20e73c7f6f9c0a58d1fd1ca";async function y(r){try{return(await m.get(`${f}`,{params:{key:h,q:`${r}`,imege_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(o){alert(o)}}const g=document.querySelector("form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";g.addEventListener("submit",b);function b(r){r.preventDefault();const o=r.target,l=o.elements.imgName.value;if(console.log(l),l===""){n.show({message:" Field must be filled! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}a.style.display="block",y(l).then(s=>{if(console.log(s.hits),a.style.display="none",s.hits.length===0){c.innerHTML="",n.show({message:" Sorry, there are no images matching your search query. Please try again! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}c.innerHTML=d(s.hits),new p(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(s=>console.log("catch",s)).finally(()=>o.reset())}
//# sourceMappingURL=commonHelpers.js.map
