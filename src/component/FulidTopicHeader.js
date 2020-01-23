import React from 'react';
import styled from "styled-components";

const FluidTopicHeader = ({children, normal, topic, bold}) => {


    const Wrapper = styled.div`
        width: 100%;
        font-weight: 300;
        font-size: 14px;
        ${props => normal && `
            font-style: normal;
            line-height: 21px;
            color: #1F1F1F;
            margin-bottom: 16px;
        `}

        ${props => topic && `
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 6px;
            color: #43BEF2;
        `}

        ${props => bold && `
            font-weight: 500;
            font-size: 18px;
        `}
    `;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default FluidTopicHeader;

