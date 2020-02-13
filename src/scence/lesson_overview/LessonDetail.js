import React, { Component } from 'react';
import styled from "styled-components";
import HeaderLesson from '../../component/HeaderLesson';
import Text from '../../component/Text';
import ChapterItem from './ChapterItem';

class LessonDetail extends Component {
    state = {

    }
    render() {
        const { description } = this.props.data
        return (
            <DetailWrapper>
                <DetailLeftSide>
                    <HeaderLesson title="รายละเอียดคอร์ส" />
                    <Text size="11" fontWeight="300" detailColor enableSeeMore>{description}</Text>
                </DetailLeftSide>
                <DetailRightSide>
                    <HeaderLesson title="บทเรียน" />
                    <LessonChapterWrapper>
                        <ChapterItem />
                    </LessonChapterWrapper>
                </DetailRightSide>
            </DetailWrapper>
        );
    }
}

const LessonChapterWrapper = styled.div`
    
`;

const DetailWrapper = styled.div`
    margin: 20px 0 0 0;
    display: flex;

    @media (max-width: 769px) {
        flex-direction: column;
    }
`;


const DetailLeftSide = styled.div`
    flex: 0 0 58%;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    @media (max-width: 769px) {
        flex: 0 0 100%;
        padding-right: 0;
    }
`;

const DetailRightSide = styled.div`
    flex: 0 0 42%;
   
    @media (max-width: 769px) {
        flex: 0 0 100%;
    }
`;

export default LessonDetail;