import React, { Component } from 'react'
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StaffCard from './StaffCard';

class StaffCarousel extends Component {
  state = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    centerMode: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

render() {
    const settings = {...this.state};
    return (
        <StaffCarouselWrapper>
                <div>

                </div>
                <Slider {...settings}>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                    <div className="item-carousel">
                        <StaffCard />
                    </div>
                </Slider>
        </StaffCarouselWrapper>);
}

}

export default StaffCarousel;

const StaffCarouselWrapper = styled.div`
    max-width: 100%;
    overflow: hidden;
`;