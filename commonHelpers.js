import{a as d,i as a,S as m}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function f(r){return r.map(({webformatURL:o,largeImageURL:l,tags:s,likes:e,views:t,comments:i,downloads:p})=>`<li class="gallery-item">
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
      <p class="box-text">${p}</p>
      </li>
      </ul>
      </a>
      </li>`).join("")}const h="https://pixabay.com/api/",y="43264129-0a20e73c7f6f9c0a58d1fd1ca";let g=1;async function b(r){try{return(await d.get(`${h}`,{params:{key:y,q:`${r}`,imege_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:g}})).data}catch(o){alert(o)}}const x=document.querySelector("form"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),u=document.querySelector(".btn");x.addEventListener("submit",F);u.style.display="none";n.style.display="none";function F(r){r.preventDefault();const o=r.target,l=o.elements.imgName.value;if(console.log(l),l===""){a.show({message:" Field must be filled! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}n.style.display="block",b(l).then(s=>{if(console.log(s.hits),n.style.display="none",s.hits.length===0){c.innerHTML="",a.show({message:" Sorry, there are no images matching your search query. Please try again! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}c.innerHTML=f(s.hits),new m(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(s=>console.log("catch",s)).finally(()=>o.reset())}u.addEventListener("click",handleClick);
//# sourceMappingURL=commonHelpers.js.map
