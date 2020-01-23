import React, { Component } from 'react';
import styled from "styled-components";
import ContainerEz from '../../component/ContainerEz'

class LessonHeader extends Component {
    state = {}
    render() {
        return (
            <ContainerEz>
                <LessonHeaderWrapper>

                    <LessonDetail>
                    </LessonDetail>
                    <LessonDetailImg>
                        <LessonImg />
                    </LessonDetailImg>

                </LessonHeaderWrapper>
            </ContainerEz>
        );
    }
}

const LessonHeaderWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
`;

const LessonDetail = styled.div`
    flex: 0 0 65%;
    background: red;
`;


const LessonDetailImg = styled.div`
    flex: 0 0 35%;
    background-image: url(https://i.udemycdn.com/notices/home_banner/image/4d2b4fde-c9b9-442c-9a1b-9f03fc0b3cf9.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
`
const LessonImg = styled.img`
    
`;


export default LessonHeader;