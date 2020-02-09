import React, { Component } from 'react';
import CourseFeature from '../CourseFeature';
import SeeMoreCourseFeature from '../SeeMoreCourseFeature';
import GetFromUs from '../GetFromUs';
import StaffSection from '../StaffSection';
import { connect } from 'react-redux'
import styled from "styled-components";
import ContainerEz from '../../../component/ContainerEz';
import Constant from '../../../Utility/Constant';

class LandingContent extends Component {
    state = {}
    render() {
        // console.log("sss", this.props.courses)
        let courseList = this.props.courses.map((item, index) => {
            let level = Constant.NEWBIE_STUDENT
            if ( item.level === 2 ) {
                level = Constant.MEDIUM_STUDENT
            } else if ( item.level === 3 )  {
                level = Constant.EXPERT_STUDENT
            }
            return (
                <CourseFeature
                    key={index}
                    id={item.course_id}
                    imagesURL={item.cover_image_path}
                    nameOfCourse={item.name}
                    courseType={level}
                />
            )
        })
        
        return (
            <>
                <ContainerEz>
                    <SectionWrapper2>
                        <CorseSuggestDetail>
                            <CorseSuggestDetailLeft>
                                <p>เพลิดเพลินไปกับคอร์สเรียน<br></br>
                                    ที่เราคัดสรรมาอย่างดี<br></br>
                                    สำหรับคุณโดยเฉพาะ</p>
                            </CorseSuggestDetailLeft>
                            <CorseSuggestDetailRight>
                                <TextLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis </TextLight>
                            </CorseSuggestDetailRight>
                        </CorseSuggestDetail>
                    </SectionWrapper2>

                    <SectionWrapper>
                        <RowEasy>
                            {courseList}
                            <SeeMoreCourseFeature />
                        </RowEasy>
                    </SectionWrapper>
                </ContainerEz>
                <SectionWrapper>
                    <GetFromUs />
                </SectionWrapper>
                <SectionWrapper>
                    <StaffSection />
                </SectionWrapper>
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps, {})(LandingContent);

const CorseSuggestDetail = styled.div`
    display: flex;
    @media (max-width: 769px) {
        flex-direction: column;
    }
`;

const CorseSuggestDetailLeft = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px!important;
`;

const CorseSuggestDetailRight = styled.div`
    width: 30%;
    margin-left: auto;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #7A7A7A;
    @media (max-width: 769px) {
        width: auto;
    }
`;

const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

const SectionWrapper2 = styled.div`
    margin: 2em 0 1em 0;
    width: 100%;
`;

const TextLight = styled.p`
    font-weight: 300;
`;

const RowEasy = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`