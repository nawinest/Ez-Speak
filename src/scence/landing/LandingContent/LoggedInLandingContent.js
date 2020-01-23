import React, { Component } from 'react';
import CourseSection from './CourseSection'
import styled from "styled-components";
import FluidTopicHeader from '../../../component/FulidTopicHeader';
import ContainerEz from '../../../component/ContainerEz';

class LoggedInLandingContent extends Component {
    state = {

    }

    render() {
        return (
            <>
                <SectionWrapper>
                    <ContainerEz>
                        <FluidTopicHeader topic bold>มาเริ่มต้นไปด้วยกัน</FluidTopicHeader>
                        <FluidTopicHeader normal>คัดสรรจากสิ่งที่คุณสนใจ</FluidTopicHeader>
                    </ContainerEz>
                    <CourseSection />
                </SectionWrapper>

                <SectionWrapper>
                    <ContainerEz>
                        <FluidTopicHeader normal>คอร์สที่ได้รับความนิยม</FluidTopicHeader>
                    </ContainerEz>
                    <CourseSection />
                </SectionWrapper>
            </>
        );
    }
}

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;


export default LoggedInLandingContent;

