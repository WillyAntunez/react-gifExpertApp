export const getGifs = async ( category ) => {
        
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=N5LE2TYtxlVk6Ss3xS5wrl9lZSYTOrww`,
        res = await fetch(URL),
        {data} = await res.json();

    const gifs = data.map( img => { 
        return { 
            id: img.id, 
            title: img.title,  
            url: img.images.downsized_medium.url 
        }
    })

    

    return gifs;
}
