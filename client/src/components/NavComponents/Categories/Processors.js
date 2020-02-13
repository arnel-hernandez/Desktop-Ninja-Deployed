import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Spinner, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
//CONNECT REDUX TO COMPONENT
import { connect } from 'react-redux'

import { getItems, postToCart } from '../../../redux/actions/productActions'

import PropTypes from 'prop-types'

export class Processors extends Component {

    componentDidMount() {
        this.props.getItems()
    }

    addToCart = (id) => {
        if(this.props.products.length){
            const processors = this.props.products.filter(product => product._id === id)
            console.log(id)
            console.log(processors)
                if(processors.length){
                    const processor = processors.map(proc => {
                        const {brand, name, price} = proc
                        
                        this.props.postToCart(brand,name,price)
                        return null
                    })
                    console.log(processor)
                }
            }
        }

    render() {
        const { products } = this.props
        console.log(this.props)
        const productList = products.length ? (products.map(product => {
            return (
                <Container key={product._id}>
                <Row>
                    <Col>
                    Product #: {product._id}
                    </Col>

                    <Col>
                        <Card>
                          <CardImg top width="100%" src={require(`../../../images/${product.imgLocalPath}.jpg`)} alt="Intel" />
                            <CardBody>
                              <CardTitle>{product.brand}</CardTitle>
                              <CardSubtitle>{product.name}</CardSubtitle>
                              <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col>
                    <div>
                        <li>Cores: {product.cores}</li>
                        <li>Threads: {product.threads}</li>
                        <li>Base Frequency: {product.base_frequency}</li>
                        <li>Turbo Frequency(Max): {product.turbon_frequency}</li>
                        <li>Cache: {product.cache}</li>
                        <li>Memory Type: {product.memory_type}</li>
                    </div>

                    <Link to={'/processor/'+ product._id}>
                    <Button
                    color='dark'
                    style={{marginBottom: '1rem'}}
                    >View Full Specification
                    </Button>
                    </Link>

                    </Col>

                    <Col>
                    <h1>${product.price}</h1>
                    
                    <Button
                    color='dark'
                    onClick={() => this.addToCart(product._id)}>
                        Buy
                    </Button>
                    
                    </Col>
                </Row>
                </Container>
            )
        })
        ) : (
            <div>
                <Spinner color="primary" />
            </div>
        )
        return(
            <div>
                <h1>Processors</h1>
                <br></br>
                {productList}
            </div>
        )
    }
}

Processors.propTypes = {
    getItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, { getItems, postToCart })(Processors)