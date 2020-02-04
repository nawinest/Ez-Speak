import React from 'react';
import styled from "styled-components";

const HeaderLesson = ({title}) => {


    const Wrapper = styled.div`
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #1F1F1F;

        & hr {
            width: 100%;
        }
    `;

    return (
        <Wrapper>
            <p>{title}</p>
            <hr></hr>
        </Wrapper>
    );
}

export default HeaderLesson;

