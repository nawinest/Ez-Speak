import React, { Component } from 'react';
import CourseFeature from '../CourseFeature';
import SeeMoreCourseFeature from '../SeeMoreCourseFeature';
import GetFromUs from '../GetFromUs';
import StaffSection from '../StaffSection';
import Constants from '../../../Utility/Constant';

import { Container} from 'react-bootstrap';
import styled from "styled-components";

class LandingContent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Container>
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
                            <CourseFeature 
                                imagesURL={"https://cdn-images-1.medium.com/max/800/1*1-n8b6qiAe7aAk1sEv4dww.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.NEWBIE_STUDENT}
                            />
                            <CourseFeature 
                                imagesURL={"https://cdn-images-1.medium.com/max/800/1*BU3wN8rLVoDTamIWnaD_Og.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.MEDIUM_STUDENT}
                            />
                            <CourseFeature 
                                imagesURL={"https://sites.google.com/site/littelgingdown/_/rsrc/1468866256433/hmapa-wolf/unnamed.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.EXPERT_STUDENT}
                            />
                            <CourseFeature 
                                imagesURL={"https://i0.wp.com/www.docker.com/blog/wp-content/uploads/53dc73f1-1bfe-415c-a0e9-1f75507675de-1.jpg?zoom=2.625&ssl=1"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.EXPERT_STUDENT}
                            />
                            <CourseFeature 
                                imagesURL={"https://miro.medium.com/max/2820/1*ovRuAuqPf4r2xpiWh71rUg.png"}
                                nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวันฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                courseLink={"#"}
                                courseType={Constants.MEDIUM_STUDENT}
                            />
                            <SeeMoreCourseFeature />
                        </RowEasy>
                    </SectionWrapper>
                </Container>
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
 
export default LandingContent;


const CorseSuggestDetail  = styled.div`
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