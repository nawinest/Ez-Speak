import React, { Component } from 'react';
import styled from "styled-components";
import ContainerEz from '../../component/ContainerEz'
import Constants from '../../Utility/Constant';
import LessonDetail from './LessonDetail';

class LessonHeader extends Component {
    state = {
        author: ""
    }
    render() {
        const {
            name,
            cover_image_path,
            level,
            created_by
        } = this.props.data
        let username = created_by && created_by.username && created_by.username ? created_by.username : "ไม่มีชื่อผู้เขียน" 
        let levelLabel = Constants.NEWBIE_STUDENT
        if (level === 2) {
            levelLabel = Constants.MEDIUM_STUDENT
        } else if (level === 3) {
            levelLabel = Constants.EXPERT_STUDENT
        }
        return (
            <>
                <ContainerEz isLessonHeader>
                    <LessonHeaderWrapper background={levelLabel} backgroundImage={cover_image_path}>
                        <LessonHeaderDetail>
                            <div>
                                <Tags color={levelLabel}>{levelLabel}</Tags>
                                <CourseTitle>{name}</CourseTitle>
                                <AuthorName><span>โดย</span> {username} </AuthorName>
                                <BuyButton color={levelLabel}>สมัครคอร์สนี้</BuyButton>
                            </div>
                        </LessonHeaderDetail>
                        <LessonDetailImg backgroundImage={cover_image_path} >
                            <LessonImg />
                        </LessonDetailImg>
                    </LessonHeaderWrapper>
                </ContainerEz>
                <ContainerEz>
                    <LessonDetail />
                </ContainerEz>
            </>
        );
    }
}


const BuyButton = styled.button`
   border-radius: 0.4em;
   color: ${props => {
        switch (props.color) {
            case Constants.NEWBIE_STUDENT:
                return "#43BEF2"
            case Constants.MEDIUM_STUDENT:
                return "rgba(255, 210, 99, 1)"
            case Constants.EXPERT_STUDENT:
                return "rgba(235, 175, 252, 1)"
            default:
                return "#43BEF2"
        }
    }};
   padding: 0.4em 1em;
   border: 2px solid white;
   background: white;
`;

const AuthorName = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;

    & span {
        font-weight: 300;
    }
`;

const CourseTitle = styled.h4`   
    color:white;
    font-size: 24px;
    font-weight: 300;
    margin-top: 0.85em;
    width: 100%;
    line-height: 30px;
    @media (max-width: 800px) {
        font-size: 16px;
    }

    display: block!important;
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -ms-line-clamp: 2;
    -o-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    
`;

const Tags = styled.span`
    color: ${props => {
        switch (props.color) {
            case Constants.NEWBIE_STUDENT:
                return "#43BEF2"
            case Constants.MEDIUM_STUDENT:
                return "rgba(255, 210, 99, 1)"
            case Constants.EXPERT_STUDENT:
                return "rgba(235, 175, 252, 1)"
            default:
                return "#43BEF2"
        }
    }};
    padding: 0.45em 1.1em;
    font-size: 0.75em;
    border-radius: 0.4em;
    background: white;
`;

const LessonHeaderWrapper = styled.div`
    width: 100%;
    background: ${props => {
        switch (props.background) {
            case Constants.NEWBIE_STUDENT:
                return "linear-gradient(215deg, rgba(85, 230, 214, 1), rgba(77, 170, 248, 1))"
            case Constants.MEDIUM_STUDENT:
                return "linear-gradient(215deg, rgba(255, 210, 99, 1),rgba(238, 158, 103, 1))"
            case Constants.EXPERT_STUDENT:
                return "linear-gradient(215deg, rgba(235, 175, 252, 1),rgba(195, 128, 255, 1))"
            default:
                return "linear-gradient(215deg, rgba(200, 128, 254, 1),rgba(76, 170, 247, 1))"
        }
    }};

    @media (max-width: 769px) {
        background: ${props => {
        switch (props.background) {
            case Constants.NEWBIE_STUDENT:
                return `linear-gradient(215deg, rgba(85, 230, 214, 0.9), rgba(77, 170, 248, 86.05)),url(${props.backgroundImage})`
            case Constants.MEDIUM_STUDENT:
                return `linear-gradient(215deg, rgba(255, 210, 99, 0.9),rgba(238, 158, 103, 86.05)),url(${props.backgroundImage})`
            case Constants.EXPERT_STUDENT:
                return `linear-gradient(215deg, rgba(235, 175, 252, 0.9),rgba(195, 128, 255, 86.05),url(${props.backgroundImage}))`
            default:
                return `linear-gradient(215deg, rgba(200, 128, 254, 0.9),rgba(76, 170, 247, 86.05)),url(${props.backgroundImage})`
        }
    }};
    }

    background-origin: border-box!important;
    background-size: cover!important;
    background-position: 50% 50% !important;
    display: flex;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
    border-radius: 20px 20px 20px 20px;
    @media (max-width: 768px) {
        border-radius: 0;
    }
    overflow: hidden;
`;

const LessonHeaderDetail = styled.div`
    flex: 0 0 58%;
    padding: 21px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 769px) {
        flex: 0 0 100%;
    }
`;


const LessonDetailImg = styled.div`
    flex: 0 0 42%;
    background-image: ${props => props.backgroundImage && `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 769px) {
        display: none;
    }
`
const LessonImg = styled.img`
    
`;


export default LessonHeader;