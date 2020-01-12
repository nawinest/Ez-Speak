
import React, { Component } from 'react';
import styled from "styled-components";
import SimpleCard from '../../component/SimpleCard';
import { Container } from 'react-bootstrap';

class GetFromUs extends Component {
    state = {}
    render() {
        return (
            <Wrapper>
                <HeaderCenter>
                    <TopicHeader>
                        สิ่งที่คุณจะได้รับจากการเรียนกับเรา
                    </TopicHeader>
                    <DetailHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </DetailHeader>
                </HeaderCenter>
                <Container>
                    <CardSection>
                        <SimpleCard />
                        <SimpleCard />
                        <SimpleCard />
                        <SimpleCard />
                    </CardSection>
                </Container>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
    width: 100%;
    background-image: linear-gradient(to left, rgba(249, 248, 253, 0.95) ,rgba(228, 232, 246, 0.95)), url(https://i.udemycdn.com/notices/home_banner/image/4d2b4fde-c9b9-442c-9a1b-9f03fc0b3cf9.jpg);
    padding: 1.5em;
`;

const TopicHeader = styled.h4`
    
`;


const CardSection = styled.div`
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;



const HeaderCenter = styled.div`
    text-align: center;
    
`;


const DetailHeader = styled.p`
    color: #868686;
    font-weight:300;
`;

export default GetFromUs;