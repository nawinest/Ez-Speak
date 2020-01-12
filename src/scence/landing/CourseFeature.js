import React, { Component } from 'react';
import styled from "styled-components";
import { Col } from 'react-bootstrap';
class CourseFeature extends Component {
    state = {  }
    render() { 
        return ( 
            <ColEasy>
                <CourseFeatureEz>
                    <ImageCourseFeature src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwFmufemrvTWT-Da25JAzDyU3i-hFMSPdjqTSLf3lSPnuiDGJo" alt="W3Schools.com"/>
                    <CourseContent>
                        <div><Tags>ผู้เริ่มต้น</Tags></div>
                        <div><CourseTitle>
                        ฝึกพื้นฐานการสนทนาที่ใช้
                        ในชีวิตประจำวัน
                        </CourseTitle></div>
                        
                        <SeemoreButton>เรียนรู้เพิ่มเติม</SeemoreButton>
                    </CourseContent>
                </CourseFeatureEz>
            </ColEasy>
        );
    }
}

export default CourseFeature;


const ColEasy = styled.div`
    flex: 0 0 33.333333%;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    
    @media (max-width: 1000px) {
        flex: 0 0 50%;
    }

    @media (max-width: 700px) {
        flex: 0 0 100%;
    }
`;

const SeemoreButton = styled.button`
   border-radius: 0.4em;
   color: white;
   padding: 0.4em 1em;
   border: 2px solid white;
   background: none;
`;

const CourseTitle = styled.h4`
    color:white;
    margin-top: 0.5em;
    max-width: 75%;
    height: 65px;
    overflow:hidden;
`;

const Tags = styled.span`
    color: #43BEF2;
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

const ImageCourseFeature = styled.img`
    width: 100%;
    max-height: 100px;
    object-fit: cover;
`;
 
const CourseFeatureEz = styled.div`
    height: 290px;
    border-radius: 1em;
    overflow: hidden;
    width: 100%;
    margin: 0.7em auto;
    background: linear-gradient(to left, rgba(195, 128, 254, 0.4),rgba(76, 170, 247, 1));
`;