export default function(requestUrl) {
  return (
    fetch(requestUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(gifs => {
        return gifs;
      })
      .catch(error => console.log(error))
  )
};

