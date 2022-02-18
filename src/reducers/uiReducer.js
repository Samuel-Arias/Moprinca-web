import { types } from "../types/types"

let initState = {
    logo: {
        hidden: false
    },
    navbar: {
        open: false
    },
    job: {
        selected: null
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

        case types.selectedJob:
            return {
                ...state,
                job: {
                    selected:{...action.payload}
                }
            }
    
        default:
            return state
    }
}

export default uiReducer