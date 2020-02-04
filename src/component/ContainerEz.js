import React from 'react';
import styled from "styled-components";

const ContainerEz = ({children, isLessonHeader}) => {

    const Wrapper = styled.div`
        
        padding: 0 20px
        width: 100%;
        @media (min-width: 768px) {
            padding: 0 60px
        }

        ${isLessonHeader && `
            padding: 0;
            @media (min-width: 768px) {
                padding: 0 20px;
            }
        `}

    `;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default ContainerEz;

