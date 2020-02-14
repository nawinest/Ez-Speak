import React, { Component } from 'react';

import Slider from '../../../component/Carousel/Slider';
import SliderSlick from '../../../component/Carousel/SliderSlick';

class CourseSection extends Component {
    state = {

    }

    render() {
        return (
            <>
                {/* <Slider sliderItem={this.props.courses}/> */}
                <SliderSlick sliderItem={this.props.courses}/>
            </>
        );
    }
}

export default CourseSection;

