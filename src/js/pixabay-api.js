
function getPicturesByQuery(query) {
  const API_KEY = "45032349-419aa61286db3245b797ba166";

  return fetch(`https://pixabay.com/api?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then(
    (res) => {
      if (!res.ok) {
        throw new Error(res.status); 
      }
      return res.json();
    }
  );
}
export default getPicturesByQuery;