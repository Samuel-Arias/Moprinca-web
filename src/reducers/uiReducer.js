import { types } from "../types/types"

let initState = {
    logo: {
        hidden: false
    },
    navbar: {
        open: false
    }
}

const uiReducer = (state = initState, action) => {
    switch (action.type) {
        case types.showLogo:
            return {
                ...state,
                logo: {
                    hidden: false
                }
            }

        case types.hiddenLogo:
            return {
                ...state,
                logo: {
                    hidden: true
                }
            }

        case types.openNavbar:
            return {
                ...state,
                navbar: {
                    open: true
                }
            }

        case types.closeNavbar:
            return {
                ...state,
                navbar: {
                    open: false
                }
            }
    
        default:
            return state
    }
}

export default uiReducer