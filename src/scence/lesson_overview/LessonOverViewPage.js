import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../landing/Footer';
import LessonHeader from './LessonHeader'
import { connect } from 'react-redux'
import { getCourseDetail, enrollCourse } from '../../actions/course'


class LessonOverviewPage extends Component {
    state = {
        data: {}
    }

    componentDidMount = async () => {
        const data = await this.props.getCourseDetail(this.props.match.params.course_id || '')
        if (data && data[0]) {
            this.setState({
                data: data[0]
            })
        }
    }

    handleEnrollCourse = () => {
        this.props.enrollCourse()
    }

    render() {
        const { data } = this.state
        return (
            <>
                <SectionWrapper>
                    <LessonHeader handleEnrollCourse={this.handleEnrollCourse} data={data} />
                </SectionWrapper>

                <SectionWrapper>
                    <Footer />
                </SectionWrapper>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    globalState: state.globalState
})

export default connect(mapStateToProps, { getCourseDetail, enrollCourse })(LessonOverviewPage);

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;



