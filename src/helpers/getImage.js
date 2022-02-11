const getImages = (r, array) => {
    const x = r.keys().map(r)
    x.map( (img, i) => {
        array[i] = {
            ...array[i],
            img: img
        }
    } )
}

export default getImages