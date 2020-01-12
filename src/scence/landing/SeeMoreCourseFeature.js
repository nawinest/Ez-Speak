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

            
            @media (max-width: 1000px) {
                flex: 0 0 50%;
            }

            @media (max-width: 700px) {
                flex: 0 0 100%;
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
           margin-top: 0.5em;
           max-width: 100%;
           max-height: 100px;
           overflow:hidden;
       `;
        
       const CourseFeatureEz = styled.div`
           height: 290px;
           border-radius: 1em;
           overflow: hidden;
           width: 100%;
           margin: 0.7em auto;
           border: 2px solid #4DA8F9;
        
           display: flex;
           justify-content: center;
           align-items: center;
           
       `;
        
export default SeeMoreCourseFeature;