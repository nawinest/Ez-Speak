import React from 'react';
import styled from "styled-components";

const Text = ({children, size, fontWeight, topicColor, white, detailColor, customColor, enableSeeMore}) => {


    const Wrapper = styled.p`
        font-style: normal;
        font-weight: ${fontWeight};
        font-size: ${size}px;
        margin-bottom: 0;
        color: ${ () => {
            if ( topicColor ) {
                return `#1F1F1F`
            } else if ( detailColor ){
                return `#4D4D4D`
            } else if (white){
                return `#ffffff`
            } else {
                return customColor
            }
        }};

        ${() => {
            if (enableSeeMore) {
                return `
                    
                `
            }
        }}
    `;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Text;

