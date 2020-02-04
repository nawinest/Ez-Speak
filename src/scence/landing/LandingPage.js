import React, { Component } from 'react';
import styled from "styled-components";
import AdsWebsite from './AdsWebsite';
import Footer from './Footer';

import { connect } from 'react-redux'
import { getCourse } from '../../actions/landing'
import FeatureContent from './FeatureContent/FeatureContent';
import LandingContent from './LandingContent/LandingContent';
import LoggedInLandingContent from './LandingContent/LoggedInLandingContent';
import ContainerEz from '../../component/ContainerEz'


class LandingPage extends Component {
    state = {
        isLoggin: false,
        nameUser: "ทรงเกียรติ"
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <FeatureBanner>
                    <ContainerEz>
                        <FeatureContent isLoggin={this.state.isLoggin} nameUser={this.state.nameUser}/>
                    </ContainerEz>
                </FeatureBanner>
                    {this.state.isLoggin ? <LoggedInLandingContent /> : <LandingContent /> }
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


const mapStateToProps = (state) => ({
    landing: state.landing,
})

export default connect(mapStateToProps, { getCourse })(LandingPage);