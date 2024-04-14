import{a as b,i as u,S as h}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function g(s){return s.map(({webformatURL:r,largeImageURL:t,tags:a,likes:e,views:o,comments:c,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href=${t}>
     <img 
     class="gallery-image" 
    src="${r}" 
    alt="${a}"/>
   <ul class="box-list">
     <li>
      <h2 class="box-title">Likes</h2>
       <p class="box-text">${e}</p>
       </li>
      <li>
      <h2 class="box-title">Views</h2>
      <p class="box-text">${o}</p>
      </li>
      <li class="box-item">
      <h2 class="box-title">Comments</h2>
      <p class="box-text">${c}</p>
      </li>
      <li class="box-item">
      <h2 class="box-title">Downloads</h2>
      <p class="box-text">${f}</p>
      </li>
      </ul>
      </a>
      </li>`).join("")}const F="https://pixabay.com/api/",x="43264129-0a20e73c7f6f9c0a58d1fd1ca";async function m(s,r){try{return(await b.get(`${F}`,{params:{key:x,q:`${s}`,imege_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(t){alert(t)}}const w=document.querySelector("form"),y=document.querySelector("ul"),i=document.querySelector(".loader"),l=document.querySelector(".btn");let d="",n=1,p;l.style.display="none";i.style.display="none";w.addEventListener("submit",L);async function L(s){s.preventDefault();const r=s.target;if(n=1,d=r.elements.imgName.value,console.log(d),d===""){u.show({message:" Field must be filled! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}i.style.display="block";try{const t=await m(d,n);if(console.log(t.hits),t.hits.length===0){u.show({message:" Sorry, there are no images matching your search query. Please try again! ",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}),i.style.display="none",l.style.display="none",y.innerHTML="",r.reset();return}i.style.display="none",y.innerHTML=g(t.hits),l.style.display="block",p=Math.ceil(t.totalHits/t.hits.length),n>=p&&(l.style.display="none",u.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3})),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),r.reset()}catch(t){alert(t)}}l.addEventListener("click",k);async function k(){l.style.display="none",i.style.display="block",n+=1;try{const s=await m(d,n);console.log(s.hits.length),i.style.display="none",y.insertAdjacentHTML("beforeend",g(s.hits)),l.style.display="block",n>=p&&(l.style.display="none",u.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"green",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}));const t=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"}),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}catch(s){alert(s)}}
//# sourceMappingURL=commonHelpers.js.map
