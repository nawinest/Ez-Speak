import React, { Component } from 'react';
import styled from "styled-components";
import HeaderLesson from '../../component/HeaderLesson';
import Text from '../../component/Text';
import ChapterItem from './ChapterItem';

class LessonDetail extends Component {
    state = {

    }
    render() {
        return (
            <DetailWrapper>
                <DetailLeftSide>
                    <HeaderLesson title="รายละเอียดคอร์ส"/>
                    <Text size="11" fontWeight="300" detailColor enableSeeMore>
                        This program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the industry-recognized Google Cloud Associate Cloud Engineer certification. Through a combination of presentations, demos, and labs, you'll explore and deploy solution elements, including infrastructure components such as networks, systems and applications services; and you'll gain real world experience through a number of hands-on Qwiklabs projects that you can share with potential employers.
                        You'll also have the opportunity to practice key job skills, such as setting up a cloud environment and configuring and deploying a solution in the cloud. For learners looking to get certified, this program will also provide sample questions similar to those on the exam, including solutions and practice exam quizzes that simulates the exam-taking experience.
                        Upon successful completion of this program, you will earn a certificate of completion to share with your professional network and potential employers. If you'd like to earn your Google Cloud certification, you will need to register for and pass the certification exam. Please note that this program helps equip you with the skills you need to take the certification exam, but the certification and certification fee is not included in the cost of this training program.
                    </Text>
                </DetailLeftSide>
                <DetailRightSide>
                    <HeaderLesson title="บทเรียน"/>
                    <LessonChapterWrapper>
                        <ChapterItem />
                        <ChapterItem />
                        <ChapterItem />
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