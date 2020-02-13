import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getCart } from '../../redux/actions/productActions'

export class Cart extends Component {

    componentDidMount() {
        this.props.getCart()
    }

    sum = () =>{
        
    }

    render() {
        const { cartItems } = this.props
        console.log(this.props)

        let cart = null

        if(cartItems.length){
            cart = (
                cartItems.map(cart => {
                    return (
                        <div>
                            {cart.brand} {cart.name} {cart.price}
                        </div>
                    )
                })
            )
        }

        return (
            <div>
                {cart}
                <h1>Total: {}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems.cartItems
    }
}

export default connect(mapStateToProps, { getCart })(Cart)
