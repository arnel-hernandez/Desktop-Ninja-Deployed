
import { GET_PRODUCT, PRODUCT_LOADING, GET_SPECS, GET_CART, POST_CART } from '../actions/typesOfAction'

const initialState = {
    products: [],
    viewSpecs:[],
    cartItems: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
            }
        case GET_SPECS:
            return {
                ...state,
                viewSpecs: action.payload,
            }
        case GET_CART:
            return {
                ...state,
                cartItems: action.payload,
            }
        case POST_CART:
            return {
                ...state,
                cartItems: action.payload,
            }
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}