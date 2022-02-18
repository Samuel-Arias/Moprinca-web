const getImages = (r, array) => {
    const images = r.keys().map(r)
    if (array) {
        images.map( (img, i) => {
            array[i] = {
                ...array[i],
                img: img
            }
        } )
    } else {
        return images
    }
}

export default getImages