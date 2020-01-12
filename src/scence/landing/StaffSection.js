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
`;

const Detail = styled.p`
    color: #868686;
    font-weight:300;
`;
 