import React, { Component } from 'react';
import styled from "styled-components";
import StaffCarousel from './StaffCarousel';
class StaffSection extends Component {
    state = {  }
    render() { 
        return ( 
        <Wrapper>
            <HeaderCenter>
                <TopicHeader>
                    เลือกสรรบทเรียนจากทีมงานที่คุณไว้ใจได้
                </TopicHeader>
                <Detail>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </Detail>
            </HeaderCenter>
            <StaffCarousel />
        </Wrapper> );
    }
}
export default StaffSection;


const Wrapper = styled.div`
    width: 100%;
    
`;

const HeaderCenter = styled.div`
    margin: 3em 0;
    text-align: center;
`;

const TopicHeader = styled.h4`
    color: #4DA8F9;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
`;

const Detail = styled.p`
    color: #7A7A7A;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
`;
 