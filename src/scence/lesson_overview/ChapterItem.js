import React, { Component } from 'react';
import styled from "styled-components";
import Text from '../../component/Text';

class ChapterItem extends Component {
    state = {  }
    render() { 
        return ( 
        <ChapterItemWrapper>
            <ChapterHeader>
                <Text white size="11" fontWeight="300">ครั้งที่</Text>
                <Text customColor="#4DA8F9" size="18" fontWeight="500">1</Text>
                <Text white fontWeight="normal" size="14">การออกเสีการออกเสียงด้วยกระบังลมการออก</Text>
            </ChapterHeader>
            <ChapterDecription>
                <Text size="11" fontWeight="300" detailColor>This program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the indThis program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the indThis program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the indThis program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the indThis program provides the skills you need to advance your career in cloud architecture and provides a pathway to earn the industry-recognized</Text> 
            </ChapterDecription>
        </ChapterItemWrapper> );
    }
}

const ChapterItemWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
`;


const ChapterHeader = styled.div`
    background: black;
    display: flex;
    align-items: center;
    padding: 20px;

    & :nth-child(1) {
        min-width: 30px;
        margin-right: 6px;
    }

    & :nth-child(3) {
        min-width: 30px;
        margin-left: 12px;
        padding-left: 12px;
        border-left: 1px solid white;
    }
`;

const ChapterDecription = styled.div`
    padding: 12px 14px;
`;



 
export default ChapterItem;