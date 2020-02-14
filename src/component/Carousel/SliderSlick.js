import React, { Component } from "react";
import Slider from "react-slick";
import CourseItem from "./CourseItem";
import Constants from '../../Utility/Constant';
import styled from "styled-components";
import ContainerEz from "../ContainerEz";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default class SliderSlick extends Component {
    state = {
        data: []
    }

    componentDidUpdate(previousProps) {
        if (this.props.sliderItem !== previousProps.sliderItem) {
            this.setState({
                data: this.props.sliderItem
            })
        }
    }

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
            ],
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        return (
            <ContainerEz>
                <Slider {...settings}>
                    {
                        this.state.data.map((item, index) => {
                            let level = Constants.NEWBIE_STUDENT
                            if (item.level === 2) {
                                level = Constants.MEDIUM_STUDENT
                            } else if (item.level === 3) {
                                level = Constants.EXPERT_STUDENT
                            }
                            return (
                                <div>
                                    <CourseItem
                                        key={index}
                                        id={item.course_id}
                                        imagesURL={item.cover_image_path}
                                        nameOfCourse={item.name}
                                        courseType={level}
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </ContainerEz>
        );
    }
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <Next
            // className={className}

            onClick={onClick}
        > <FontAwesomeIcon icon={faAngleRight} /> </Next>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <Prev
            // className={className}

            onClick={onClick}
        > <FontAwesomeIcon icon={faAngleLeft} /> </Prev>
    );
}


const Next = styled.button`
    background-color: #fff;
    border-radius: 50%;
    border-width: 0;
    box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
    color: #007791;
    font-size: 24px;
    height: 47px;
    right: -23px;
    line-height: 1;
    padding: 11px 0;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    transition: 300ms;
    width: 47px;
    z-index: 3;
    position: absolute;
`;

const Prev = styled.button`
    background-color: #fff;
    border-radius: 50%;
    border-width: 0;
    box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
    color: #007791;
    font-size: 24px;
    height: 47px;
    line-height: 1;
    padding: 11px 0;
    text-align: center;
    top: 50%;
    left: -23px;
    transform: translateY(-50%);
    transition: 300ms;
    width: 47px;
    z-index: 3;
    position: absolute;
`;