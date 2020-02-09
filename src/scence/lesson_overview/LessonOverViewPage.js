import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../landing/Footer';
import LessonHeader from './LessonHeader'
import { connect } from 'react-redux'
import { getCourseDetail } from '../../actions/course'


class LessonOverviewPage extends Component {
    state = {
        data: {}
    }

    componentDidMount = async () => {
        const data = await this.props.getCourseDetail("CO_00121")
        if (data && data[0]) {
            this.setState({
                data: data[0]
            })
        }
    }

    render() {
        const { data } = this.state
        return (
            <>
                <SectionWrapper>
                    <LessonHeader data={data} />
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

export default connect(mapStateToProps, { getCourseDetail })(LessonOverviewPage);

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;



