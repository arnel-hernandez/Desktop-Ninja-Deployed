import axios from 'axios'
import { GET_PRODUCT,PRODUCT_LOADING, GET_SPECS, GET_CART, POST_CART } from './typesOfAction'

export const getItems = () => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/processors')
    .then(res => dispatch({
        type: GET_PRODUCT,
        payload: res.data
    }))
}

export const getItemsId = (id) => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/processors/'+ id)
    .then(res => dispatch({
        type: GET_SPECS,
        payload: res.data
    }))
}

export const getCart = () => dispatch => {
    dispatch(productLoading())
    axios.get('http://localhost:5000/cart')
    .then(res => dispatch({
        type: GET_CART,
        payload: res.data
    }))
}

export const postToCart = (brand, name, price) => dispatch => {
    axios.post('http://localhost:5000/cart', {brand, name, price})
    .then(() => dispatch({
        type: POST_CART,
        payload: {
            brand: brand,
            name: name,
            price: price
        }
    }))
}


export const productLoading = () => {
    return{
        type: PRODUCT_LOADING
    }
}