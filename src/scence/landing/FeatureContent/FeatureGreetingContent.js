import React from 'react';
import styled from "styled-components";

const FeatureGreetingContent = (props) => {
    let title = "สวัสดีตอนเช้า"
    let today = new Date()
    let curHr = today.getHours()
    if (curHr < 12) {
        title = "สวัสดีตอนเช้า"
    } else if (curHr < 18) {
        title = "สวัสดีตอนบ่าย"
    } else {
        title = "สวัสดีตอนค่ำ"
    }

    return (
        <WrapperContent>
            {!props.isAuthenticated ? (
                <div>
                    <p>Take your first step with ezSpeak</p>
                    <span>
                        เริ่มต้นการเรียนรู้ของคุณ
                    <br></br>ด้วยตนเองอย่างง่ายดาย
                    </span>
                </div>
            ) : (<ContentWrapper>
                <Content> {title} <br></br> <span> {props.user.first_name} </span> </Content>
            </ContentWrapper>)}
        </WrapperContent>
    );
}

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

