import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faOtter } from '@fortawesome/free-solid-svg-icons'
import CourseFeature from './CourseFeature';
import SeeMoreCourseFeature from './SeeMoreCourseFeature';
import GetFromUs from './GetFromUs';
import StaffSection from './StaffSection';
import AdsWebsite from './AdsWebsite';
import Footer from './Footer';

class LandingPage extends Component {
    state = {}


    render() {
        return (
            <>
                <FeatureBanner>
                    <Container>
                        <FeatureContent>
                            <p>Take your first step with ezSpeak</p>
                            <h1>
                                เริ่มต้นการเรียนรู้ของคุณ
                                <br></br>ด้วยตนเองอย่างง่ายดาย
                             </h1>

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
                                <h4>เพลิดเพลินไปกับคอร์สเรียน<br></br>
                                    ที่เราคัดสรรมาอย่างดี<br></br>
                                    สำหรับคุณโดยเฉพาะ</h4>
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
                            <CourseFeature />
                            <CourseFeature />
                            <CourseFeature />
                            <CourseFeature />
                            <CourseFeature />
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
      
    
`;

const CorseSuggestDetailRight = styled.div`
    width: 30%;
    margin-left: auto;
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
    margin-top: 8px;
    font-size: 17px;
    border: none;
    padding-left: 20px;
`;


const ButtonSearch = styled.button`
    background: white;
    border: none;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
    padding: 8px 16px;
    margin-top: 8px;
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
    background-image: linear-gradient(to left, rgba(76, 170, 247, 0), rgba(76, 170, 247, 0), rgba(195, 128, 254, 0.4),rgba(76, 170, 247, 1)), url(https://i.udemycdn.com/notices/home_banner/image/4d2b4fde-c9b9-442c-9a1b-9f03fc0b3cf9.jpg);
`;


const FeatureContent = styled.div`
    color: white;
    width: 100%;
    padding-left: 16px;
`;



export default LandingPage;