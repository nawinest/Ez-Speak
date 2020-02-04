import React from 'react'
import styled from "styled-components";

const Loading = () => {
  return (
        <Wrapper>
            Loading ...
        </Wrapper>
  )
}
export default Loading

const Wrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color:rgb(0,0,0);opacity:0.5;}
    position: fixed;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    font-size: 25px;
`;