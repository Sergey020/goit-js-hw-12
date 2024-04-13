
import axios  from "axios";
// https://pixabay.com/api/?key=43264129-0a20e73c7f6f9c0a58d1fd1ca&q=dog&image_type=photo&orientation=horizontal&safesearch=true
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43264129-0a20e73c7f6f9c0a58d1fd1ca';
let page = 1 ;





export async function makeRequest(inputEl) {
 try{ 
  const response = await axios.get(`${BASE_URL}`,{params: {
    key: API_KEY,
    q: `${inputEl}`,
    imege_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page 

  }});
  return response.data;
      }catch(error){
    alert(error);
}
}
