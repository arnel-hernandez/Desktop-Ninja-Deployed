import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Spinner } from 'reactstrap';

import TopCarousel from './TopCarousel'

//CONNECT REDUX TO COMPONENT
import { connect } from 'react-redux'

import { getItems } from '../redux/actions/productActions'

import PropTypes from 'prop-types'

export class Home extends Component {

    componentDidMount() {
        this.props.getItems()
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
                          <CardImg top width="100%" src={require(`../images/${product.imgLocalPath}.jpg`)} alt="Intel" />
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

                    </Col>

                    <Col>
                    <h1>${product.price}</h1>

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
                <TopCarousel />
                <h1 className="center">Featured Products</h1>
                {productList}
            </div>
        )
    }
}

Home.propTypes = {
    getItems: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, { getItems })(Home)