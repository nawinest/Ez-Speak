import React, { Component } from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseFeature from '../CourseFeature';
import Constants from '../../../Utility/Constant';

class CourseCarouselMock extends Component {
    state = {
        tranformX: 0,
        item: [
            "1", "2", "3", "1", "2", "1"
        ],
        sizeShow: 3
    };

    handleNext = () => {
        if (this.state.tranformX < ((this.state.item.length - 1) * (100 / this.state.sizeShow))) {
            this.setState({ tranformX: this.state.tranformX + 100 / this.state.sizeShow })
        }
    }

    handlePrev = () => {
        if (this.state.tranformX > 0) {
            this.setState({ tranformX: this.state.tranformX - 100 / this.state.sizeShow })
        }
    }

    render() {
        const distance = this.state.tranformX
        const style = `translate3d(${-distance}%, 0px, 0px)`
        return (
            <CourseCarouselWrapper>
                <Wrapper>
                    <button onClick={this.handleNext}>+</button>
                    <button onClick={this.handlePrev}>-</button>
                    <Slider style={{ transform: style }}>
                        <Item size={100 / this.state.sizeShow}>
                            <CourseFeature
                                imagesURL={"https://cdn-images-1.medium.com/max/800/1*1-n8b6qiAe7aAk1sEv4dww.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.NEWBIE_STUDENT}
                            />
                        </Item>
                        <Item size={100 / this.state.sizeShow}>
                            <CourseFeature
                                imagesURL={"https://cdn-images-1.medium.com/max/800/1*BU3wN8rLVoDTamIWnaD_Og.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.MEDIUM_STUDENT}
                            />
                        </Item>
                        <Item size={100 / this.state.sizeShow}>
                            <CourseFeature
                                imagesURL={"https://sites.google.com/site/littelgingdown/_/rsrc/1468866256433/hmapa-wolf/unnamed.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.EXPERT_STUDENT}
                            />
                        </Item>
                        <Item size={100 / this.state.sizeShow}><CourseFeature
                            imagesURL={"https://i0.wp.com/www.docker.com/blog/wp-content/uploads/53dc73f1-1bfe-415c-a0e9-1f75507675de-1.jpg?zoom=2.625&ssl=1"}
                            nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                            courseLink={"#"}
                            courseType={Constants.EXPERT_STUDENT}
                        /></Item>
                        <Item size={100 / this.state.sizeShow}><CourseFeature
                            imagesURL={"https://i0.wp.com/www.docker.com/blog/wp-content/uploads/53dc73f1-1bfe-415c-a0e9-1f75507675de-1.jpg?zoom=2.625&ssl=1"}
                            nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                            courseLink={"#"}
                            courseType={Constants.EXPERT_STUDENT}
                        /></Item>
                        <Item size={100 / this.state.sizeShow}><CourseFeature
                            imagesURL={"https://i0.wp.com/www.docker.com/blog/wp-content/uploads/53dc73f1-1bfe-415c-a0e9-1f75507675de-1.jpg?zoom=2.625&ssl=1"}
                            nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                            courseLink={"#"}
                            courseType={Constants.EXPERT_STUDENT}
                        /></Item>
                    </Slider>
                </Wrapper>

            </CourseCarouselWrapper>);
    }

}

export default CourseCarouselMock;

const Slider = styled.div`
    white-space: nowrap;
    transition: transform .450ms ease-in-out;
`;
const CourseCarouselWrapper = styled.div`
    position: relative;
    margin: 0;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    overflow-x: hidden;
`;

const Wrapper = styled.div`
    overflow-x: visible;
`;

const Item = styled.div`
    box-sizing: border-box;
    z-index: 1;
    // background: red;
    display: inline-block;
    position: relative;
    white-space: normal;
    vertical-align: top;
    padding: 0 2px;
    width: ${props => `${props.size}%`};
    padding-left: 0;
`;
