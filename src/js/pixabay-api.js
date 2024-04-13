

// https://pixabay.com/api/?key=43264129-0a20e73c7f6f9c0a58d1fd1ca&q=dog&image_type=photo&orientation=horizontal&safesearch=true
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43264129-0a20e73c7f6f9c0a58d1fd1ca';


import axios  from "axios";
// console.log(axios);


export async function makeRequest(inputEl) {
 try{ 
//     const params = new URLSearchParams({
//     key: API_KEY,
//     q: `${inputEl}`,
//     imege_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });
  const response = await axios.get(`${BASE_URL}`,{params: {
    key: API_KEY,
    q: `${inputEl}`,
    imege_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  }});
  return response.data;
}catch(error){
    alert(error);
}
}
//   return fetch(`${BASE_URL}?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
