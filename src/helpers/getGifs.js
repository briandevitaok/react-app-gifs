


export const getGifs = async (category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)} &limit=10&api_key=C5pTxfz2lsMKy5h6MpDQAUZpep75LdYj`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img => {
        console.log(data)
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
 
   return gifs;
}