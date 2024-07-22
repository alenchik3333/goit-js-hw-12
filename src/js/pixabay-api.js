
async function getPicturesByQuery(query, pageNumber) {
    const API_KEY = "45032349-419aa61286db3245b797ba166";

     const response = await fetch(
    `https://pixabay.com/api?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${pageNumber}`
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  return await response.json();
    
    
//   return fetch(`https://pixabay.com/api?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then(
//     (res) => {
//       if (!res.ok) {
//         throw new Error(res.status); 
//       }
//       return res.json();
//     }
//   );
}
export default getPicturesByQuery;