import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';

//REDUX
import { connect } from 'react-redux'

class TopCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { products } = this.props
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === products.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { products } = this.props
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? products.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { products } = this.props
    const { activeIndex } = this.state;

    //SLIDES
    const slides = products.map(product => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={product._id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={require(`../images/${product.imgLocalPath}.png`)}
          height={240}
          width={240}
          alt='inteli9' />
          {/* <CarouselCaption className="text-danger" captionText={product.body} captionHeader={product.title} /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 300px;
                background: black;
              }`
          }
        </style>
        
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={products} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.products.products
  }
}

export default connect(mapStateToProps)(TopCarousel);