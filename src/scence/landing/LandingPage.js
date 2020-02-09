import React, { Component } from 'react';
import styled from "styled-components";
import AdsWebsite from './AdsWebsite';
import Footer from './Footer';

import { connect } from 'react-redux'
import { getCourseSuggestion } from '../../actions/course'
import FeatureContent from './FeatureContent/FeatureContent';
import LandingContent from './LandingContent/LandingContent';
import LoggedInLandingContent from './LandingContent/LoggedInLandingContent';
import ContainerEz from '../../component/ContainerEz'

class LandingPage extends Component {
  
    componentDidMount() {
        this.props.getCourseSuggestion(["sport"])
    }

    render() {
        const { isAuthenticated, user } = this.props.user
        const { coursesSuggestion } = this.props.course
        return (
            <>
                <FeatureBanner>
                    <ContainerEz>
                        <FeatureContent isAuthenticated={isAuthenticated} user={user} />
                    </ContainerEz>
                </FeatureBanner>
                {isAuthenticated ? <LoggedInLandingContent /> : <LandingContent courses={coursesSuggestion}/>}
                <SectionWrapper>
                    <AdsWebsite />
                </SectionWrapper>
                <SectionWrapper>
                    <Footer />
                </SectionWrapper>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    landing: state.landing,
    user: state.user,
    course: state.course
})

export default connect(mapStateToProps, { getCourseSuggestion })(LandingPage);

const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

const FeatureBanner = styled.div`
    height: 404px;
    display: flex;
    align-items: center;
    width: 100%;
    background: red;
    margin: 0 auto;
    background-origin: border-box!important;
    background-size: cover!important;
    background-color: #f0f0f0!important;
    background-position: 50% 50% !important;
    background-image: linear-gradient(to left, rgba(76, 170, 247, 0), rgba(76, 170, 247, 0), rgba(195, 128, 254, 0.4),rgba(76, 170, 247, 1)), url(https://i.udemycdn.com/notices/home_banner/image/4d2b4fde-c9b9-442c-9a1b-9f03fc0b3cf9.jpg);
`;


