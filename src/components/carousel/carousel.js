import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

import styles from './carousel.css';
import AutoSuggestion from '../autosuggestion/autosuggestion'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 2000,
      autoplaySpeed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
    return (
      <React.Fragment>
        <div className="carousel_wrapper">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <Slider {...settings} >

            {this.props.Images.map((data) => {
              return (
                <div className="carousel_content">
                  <img className="carousel_image" src={data} />
                  <p className="carousel_p_frase" >{this.props.Text}</p>
                  <p className="carousel_p_search" ><AutoSuggestion /></p>
                </div>
              );
            })}

          </Slider>
        </div>
      </React.Fragment>
    );
  }
}
