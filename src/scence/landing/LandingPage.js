import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CourseFeature from './CourseFeature';
import SeeMoreCourseFeature from './SeeMoreCourseFeature';
import GetFromUs from './GetFromUs';
import StaffSection from './StaffSection';

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

                            <form>
                                <InputEz name="" placeholder="ลอง “ฝึกร้องเพลง”" />
                                <ButtonSearch type="submit"> <FontAwesomeIcon icon={faSearch} /> </ButtonSearch>
                            </form>
                        </FeatureContent>
                    </Container>
                </FeatureBanner>
                <Container>
                    <SectionWrapper2>
                        <Row>
                            <Col xs={12} md={8}>
                                <h4>เพลิดเพลินไปกับคอร์สเรียน<br></br>
                                    ที่เราคัดสรรมาอย่างดี<br></br>
                                    สำหรับคุณโดยเฉพาะ</h4>
                            </Col>
                            <Col xs={6} md={4}>
                                <TextLight>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis </TextLight>
                            </Col>
                        </Row>
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
            </>
        )
    }
}

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

const InputEz = styled.input`
    background: white;
    color: black;
    border: none;
    font-size: 1em;
    width: 25%;
    padding: 0.6rem;
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
`;


const ButtonSearch = styled.button`
    background: none;
    background: white;
    border: none;
    width: 40px;
    padding: 0.6rem;
    font-size: 1em;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
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