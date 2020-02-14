import React, { Component } from 'react';
import CourseSection from './CourseSection'
import styled from "styled-components";
import FluidTopicHeader from '../../../component/FulidTopicHeader';
import ContainerEz from '../../../component/ContainerEz';
import { connect } from 'react-redux'

class LoggedInLandingContent extends Component {
    state = {
        coursesSuggestion: []
    }

    componentDidUpdate(previousProps) {
        if (this.props.course !== previousProps.course) {
            const {coursesSuggestion} = this.props.course
            this.setState({
                coursesSuggestion: coursesSuggestion
            })
        }
    }

    render() {
        return (
            <>
                <SectionWrapper>
                    <ContainerEz>
                        <FluidTopicHeader topic bold>มาเริ่มต้นไปด้วยกัน</FluidTopicHeader>
                        <FluidTopicHeader normal>คัดสรรจากสิ่งที่คุณสนใจ</FluidTopicHeader>
                    </ContainerEz>
                    <CourseSection courses={this.state.coursesSuggestion}/>
                </SectionWrapper>

                <SectionWrapper>
                    <ContainerEz>
                        <FluidTopicHeader normal>คอร์สที่ได้รับความนิยม</FluidTopicHeader>
                    </ContainerEz>
                    <CourseSection courses={this.state.coursesSuggestion} />
                </SectionWrapper>
            </>
        );
    }
}

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;


const mapStateToProps = (state) => ({
    course: state.course
})

export default connect(mapStateToProps, {})(LoggedInLandingContent);

