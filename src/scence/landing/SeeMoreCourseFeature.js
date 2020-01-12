import React, { Component } from 'react';
import styled from "styled-components";
import { Col } from 'react-bootstrap';

class SeeMoreCourseFeature extends Component {
    state = {}
    render() {
        return (
            <ColEasy>
                <CourseFeatureEz>
                        <div>
                            <CourseTitle>
                            ยังไม่หมดแค่นี้<br></br>
                            มีคอร์สอื่นๆรอคุณอยู่
                            </CourseTitle>
                        <SeemoreButton>เรียนรู้เพิ่มเติม</SeemoreButton>
                        </div>
                </CourseFeatureEz>
            </ColEasy>
            );
           }
       }

       const ColEasy = styled.div`
            flex: 0 0 33.333333%;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            @media (max-width: 800px) {
                flex: 0 0 50%;
            }
       `;
       
       const SeemoreButton = styled.button`
          border-radius: 0.4em;
          color: #4DA8F9;
          padding: 0.4em 1em;
          border: 2px solid #4DA8F9;
          background: none;
          
       `;
       
       const CourseTitle = styled.h4`
            color: #454545;
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
        
       const CourseFeatureEz = styled.div`
            
            border-radius: 1em;
            overflow: hidden;
            width: 100%;
            margin: 0.7em auto;
            border: 2px solid #4DA8F9;
            
            display: flex;
            justify-content: center;
            align-items: center;

            height: 300px;
            @media (max-width: 800px) {
                height: 260px;
            }
           
       `;
        
export default SeeMoreCourseFeature;