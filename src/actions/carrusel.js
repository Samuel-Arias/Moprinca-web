import { types } from '../types/types'

export const setLoaded = (bool) => ({
    type: types.setImgLoaded,
    payload: bool
})