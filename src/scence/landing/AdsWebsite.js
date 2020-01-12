import React, { Component } from 'react';
import styled from "styled-components";
import { Container } from 'react-bootstrap';
class AdsWebsite extends Component {
    state = {}
    render() {
        return (
            <Container>
                <AdsWebsiteWrapper>
                    <AdsWebsiteImage alt="dev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeXUrT_7jM89dyNslw5ndyBo2r9LAGjQSx4jEppjGtTSLOChFc" />
                    <CenterContent>
                        สมัครเรียนเลยวันนี้เพื่อรับส่วนลดพิเศษมากสูงสุด 15%
                        จากคอร์สเรียนแนะนำของเรา ภายในสิ้นปีนี้เท่านั้น
                        <span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </span>
                    </CenterContent>
                    <RightContent>
                        <SeemoreButton>คลิกเพื่อดูคอร์สอื่นๆ</SeemoreButton>
                    </RightContent>
                </AdsWebsiteWrapper>
            </Container>);
    }
}

const RightContent = styled.div`
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 769px) {
        padding-left: 14px;
        padding-bottom: 14px;
        display: block;
    }
`;

const SeemoreButton = styled.button`
    border-radius: 0.4em;
    color: #4DA8F9;
    padding: 0.4em 1em;
    border: 2px solid #4DA8F9;
    background: none;
`;

const AdsWebsiteWrapper = styled.div`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    background: #F8F8F8;
    display: flex;
    height: 150px;
    flex-direction: row;
    @media (max-width: 769px) {
        flex-direction: column;
        height: auto;
    }
`; 

const AdsWebsiteImage = styled.img`
    flex: 0 0 20%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 769px) {
        width: 100%;
        max-height: 90px;
    }
`;

const CenterContent = styled.div`
    
    flex: 0 0 50%;
    padding: 20px;
    color: #4DA8F9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
        color: black;
        font-size: 11px;
        font-weight: 300;
    }

    @media (max-width: 769px) {
        padding: 10px;
    }
`;

export default AdsWebsite;