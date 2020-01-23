import React, { Component } from 'react';
import styled from "styled-components";
import Constants from '../../Utility/Constant';

class CourseItem extends Component {
    state = {
        imagesURL: this.props.imagesURL !== undefined ? this.props.imagesURL : "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png",
        nameOfCourse: this.props.nameOfCourse !== undefined ? this.props.nameOfCourse : "ขออภัยไม่สามารถดึงข้อมูลชื่อคอร์สได้",
        courseType: this.props.courseType !== undefined ? this.props.courseType : Constants.NEWBIE_STUDENT
    }

    render() {
        const data = this.props.data
        const img = data.img
        return (
            <Wrapper>
                <WrapperInner>
                    <CourseFeatureEz background={this.state.courseType}>
                        <div>
                            <ImageCourseFeature imageURL={img} alt="W3Schools.com"></ImageCourseFeature>
                        </div>
                        <CourseContent>
                            <div><Tags color={this.state.courseType}>{this.state.courseType}</Tags></div>
                            <div><CourseTitle>
                                {
                                    this.state.nameOfCourse
                                }
                            </CourseTitle></div>
                            <SeemoreButton>เรียนรู้เพิ่มเติม</SeemoreButton>
                        </CourseContent>
                    </CourseFeatureEz>
                </WrapperInner>
            </Wrapper>
        );
    }
}

export default CourseItem;

const WrapperInner = styled.div`
    margin: 0 5px;
    border-radius: 2px;
    position: relative;
`

const ImageCourseFeature = styled.a`
    width: 100%;
    display: block!important;
    height: 112px;
    background-image: url(${props => props.imageURL});
    background-origin: border-box!important;
    background-size: cover!important;
    background-color: #f0f0f0!important;
    background-position: 50% 50% !important;
`;

const CourseFeatureEz = styled.div`
    height: 300px;
    border-radius: 1em;
    overflow: hidden;
    width: 100%;

    @media (max-width: 800px) {
        height: 260px;
    }

    background: ${props => {
        switch (props.background) {
            case Constants.NEWBIE_STUDENT:
                return "linear-gradient(215deg, rgba(85, 230, 214, 1), rgba(77, 170, 248, 1))"
            case Constants.MEDIUM_STUDENT:
                return "linear-gradient(215deg, rgba(255, 210, 99, 1),rgba(238, 158, 103, 1))"
            case Constants.EXPERT_STUDENT:
                return "linear-gradient(215deg, rgba(235, 175, 252, 1),rgba(195, 128, 255, 1))"
            default:
                return "linear-gradient(215deg, rgba(200, 128, 254, 1),rgba(76, 170, 247, 1))"
        }
    }};
    
`;

const Wrapper = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    position: relative;
    z-index: 1;

    @media (min-width: 600px) {
        width: calc(100%/2);
    }

    @media (min-width: 768px) {
        width: calc(100%/3);
    }

    @media (min-width: 980px) {
        width: calc(100%/3);
    }

    @media (min-width: 1200px) {
        width: calc(100%/3);
    }

    @media (min-width: 1800px) {
        width: calc(100%/3);
    }

`;

const SeemoreButton = styled.button`
   border-radius: 0.4em;
   color: white;
   padding: 0.4em 1em;
   border: 2px solid white;
   background: none;
   @media (max-width: 800px) {
        display: none;
    }
`;

const CourseTitle = styled.h4`   
    color:white;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0.85em;
    width: 100%;
    height: 60px;
    line-height: 30px;
    @media (max-width: 800px) {
        font-size: 16px;
    }

    display: block!important;
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    
`;

const Tags = styled.span`
    color: ${props => {
        switch (props.color) {
            case Constants.NEWBIE_STUDENT:
                return "#43BEF2"
            case Constants.MEDIUM_STUDENT:
                return "rgba(255, 210, 99, 1)"
            case Constants.EXPERT_STUDENT:
                return "rgba(235, 175, 252, 1)"
            default:
                return "#43BEF2"
        }
    }};
    padding: 0.45em 1.1em;
    font-size: 0.75em;
    border-radius: 0.4em;
    background: white;
`;
const CourseContent = styled.div`
    padding: 16px;
    width: 100%;
    overflow: hidden;
    height: 100%;
`;