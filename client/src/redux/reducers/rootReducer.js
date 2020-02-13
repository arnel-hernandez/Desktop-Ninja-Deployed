
import productReducer from './productReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    products: productReducer,
    viewSpecs: productReducer,
    cartItems: productReducer
});

export default rootReducer