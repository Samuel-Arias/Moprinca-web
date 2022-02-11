import { types } from "../types/types"

const initState = {
    img: {
        loaded: false
    }
}

const carruselReducer = ( state = initState, action ) => {
    switch (action.type) {
        case types.setImgLoaded:            
            return {
                ...state,
                img: {
                    loaded: action.payload
                }
            }
    
        default:
            return state
    }
}

export default carruselReducer