import React, { Component } from 'react';
import styled from "styled-components";
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CourseFeature from './CourseFeature';
import SeeMoreCourseFeature from './SeeMoreCourseFeature';
import GetFromUs from './GetFromUs';
import StaffSection from './StaffSection';
import AdsWebsite from './AdsWebsite';
import Footer from './Footer';
import Constants from '../../Utility/Constant';
import { connect } from 'react-redux'
import { getCourse } from '../../actions/landing'

class LandingPage extends Component {
    state = {}


    render() {
        return (
            <>
                <FeatureBanner>
                    <Container>
                        <FeatureContent>
                            <p>Take your first step with ezSpeak</p>
                            <span>
                                เริ่มต้นการเรียนรู้ของคุณ
                                <br></br>ด้วยตนเองอย่างง่ายดาย
                            </span>

                            <FromSearch>
                                <InputEz name="" placeholder="ลอง “ฝึกร้องเพลง”" />
                                <ButtonSearch type="submit"> <FontAwesomeIcon icon={faSearch} /> </ButtonSearch>
                            </FromSearch>
                        </FeatureContent>
                    </Container>
                </FeatureBanner>
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
                <SectionWrapper>
                    <AdsWebsite />
                </SectionWrapper>
                <SectionWrapper>
                    <Footer />
                </SectionWrapper>
            </>
        )
    }
}

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


const TextLight = styled.p`
    font-weight: 300;
`;

const RowEasy = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

const SectionWrapper2 = styled.div`
    margin: 2em 0 1em 0;
    width: 100%;
`;

const FromSearch = styled.form`
    width: 50%;
    display: flex;
    margin-top: 16px !important;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const InputEz = styled.input`
    flex: 1
    background: white;
    color: black;
    border: none;
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
    padding: 8px;
    margin-top: 4px;
    border: none;
    padding-left: 20px;

    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
`;


const ButtonSearch = styled.button`
    background: white;
    border: none;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
    padding: 8px 16px;
    margin-top: 4px;
    font-size: 17px;
    border: none;
    cursor: pointer;
`;

const FeatureBanner = styled.div`
    height: 404px;
    display: flex;
    align-items: center;
    width: 100%;
    background: red;
    margin: 0 auto;
    background-origin: border-box!important;
    background-size: cover!important;
    background-color: #f0f0f0!important;
    background-position: 50% 50% !important;
    background-image: linear-gradient(to left, rgba(76, 170, 247, 0), rgba(76, 170, 247, 0), rgba(195, 128, 254, 0.4),rgba(76, 170, 247, 1)), url(https://i.udemycdn.com/notices/home_banner/image/4d2b4fde-c9b9-442c-9a1b-9f03fc0b3cf9.jpg);
`;


const FeatureContent = styled.div`
    color: #FFFFFF;
    width: 100%;
    padding-left: 16px;
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    & p {
        margin-bottom: 5px!important;
    }

    & span {
        font-size: 29px;
        font-weight: 500;
        line-height: 39px;
    }

    @media (max-width: 768px) {
        & span {
            font-size: 23px;
            font-style: normal;
            line-height: 33px;
        }
    }
`;


const mapStateToProps = (state) => ({
    landing: state.landing,
})

export default connect(mapStateToProps, { getCourse })(LandingPage);