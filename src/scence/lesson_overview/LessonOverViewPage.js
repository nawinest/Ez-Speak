import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../landing/Footer';
import LessonHeader from './LessonHeader'


class LessonOverviewPage extends Component {
    state = {
        isLoggin: true,
        nameUser: "นฤมล"
    }


    render() {
        return (
            <>
                <SectionWrapper>
                    <LessonHeader />
                </SectionWrapper>

                <SectionWrapper>
                    <Footer />
                </SectionWrapper>

            </>
        )
    }
}


export default LessonOverviewPage;

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;



