import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import FeatureGreetingContent from './FeatureGreetingContent';

class FeatureContent extends Component {

    componentDidMount = () => {

    }

    render() {

        return (
            <FeatureContentWrapper>
                <FeatureGreetingContent isAuthenticated={this.props.isAuthenticated} user={this.props.user} />

                <FromSearch>
                    <InputEz name="" placeholder="ลอง “ฝึกร้องเพลง”" />
                    <ButtonSearch type="submit"> <FontAwesomeIcon icon={faSearch} /> </ButtonSearch>
                </FromSearch>
            </FeatureContentWrapper>);
    }
}

const FromSearch = styled.form`
    width: 50%;
    display: flex;
    margin-top: 16px !important;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FeatureContentWrapper = styled.div`
    color: #FFFFFF;
    width: 100%;
    font-size: 14px;
    position: relative;
    font-weight: 300;
    line-height: 21px;
    & p {
        margin-bottom: 5px;
    }

    & span {
        font-size: 29px;
        font-weight: 500;
        line-height: 39px;
    }

    @media (max-width: 768px) {
        & span {
            font-size: 23px;
            font-style: normal;
            line-height: 33px;
        }
    }
`;



const InputEz = styled.input`
    flex: 1
    background: white;
    color: black;
    border: none;
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
    padding: 8px;
    margin-top: 4px;
    border: none;
    padding-left: 20px;

    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
`;


const ButtonSearch = styled.button`
    background: white;
    border: none;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
    padding: 8px 16px;
    margin-top: 4px;
    font-size: 17px;
    border: none;
    cursor: pointer;
`;


export default FeatureContent;