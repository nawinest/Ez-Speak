import React, { Component } from 'react';
import './movie.css'

class SliderItem extends Component {
    state = {}

    render() {
        const {data} = this.props
        const images = data.img
        return (
            <div className="sliderItem">
                <div className="sliderItemInner">
                    <img className="cover" src={images} alt="cover" />
                </div>
            </div>
        );
    }
}

export default SliderItem;