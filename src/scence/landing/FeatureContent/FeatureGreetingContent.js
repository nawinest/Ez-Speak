import React from 'react';
import styled from "styled-components";

const FeatureGreetingContent = (props) => {
    return (
        <WrapperContent>
            {!props.isLoggin ? (
                <div>
                    <p>Take your first step with ezSpeak</p>
                    <span>
                        เริ่มต้นการเรียนรู้ของคุณ
                    <br></br>ด้วยตนเองอย่างง่ายดาย
                    </span>
                </div>
            ) : (<ContentWrapper> 
                    <Content> สวัสดี <span> {props.nameUser} </span> </Content>
                </ContentWrapper>)}
        </WrapperContent>
    );
}


const LevelContent = styled.div`
    & p {
        font-family: Kanit;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: #494949;
        margin: 0 !important;
    }
    & h2 {
        margin: 0;
        font-family: Kanit;
        font-style: normal;
        font-weight: 500;
        color: green;
        font-size: 18px;
        line-height: 24px;
    }
`;

const LevelImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10.95px;
`

const LevelBox = styled.div`
    padding: 13px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.35);
    border-radius: 10px;

`;

const ContentWrapper = styled.div`
    display: flex;
    
    & :nth-child(1) {
        margin-right: auto;
    }
`;

const Content = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 23px;
    line-height: 33px;

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

const WrapperContent = styled.div`
    
`;

export default FeatureGreetingContent;

