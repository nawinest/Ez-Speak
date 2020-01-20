import React, { Component } from 'react';

import styled from "styled-components";
import FluidTopicHeader from '../../../component/FulidTopicHeader';

class CourseSection extends Component {
    state = {}
    render() {
        return (
            <>
                <SectionWrapper>
                    <FluidTopicHeader topic bold>มาเริ่มต้นไปด้วยกัน</FluidTopicHeader>
                    <FluidTopicHeader normal>คัดสรรจากสิ่งที่คุณสนใจ</FluidTopicHeader>
                </SectionWrapper>
            </>
        );
    }
}

export default CourseSection;


const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;
