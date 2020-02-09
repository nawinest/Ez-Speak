import React from 'react'
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <Loader>
        <Ball></Ball>
        <Ball></Ball>
        <Ball></Ball>
      </Loader>
    </Wrapper>
  )
}
export default Loading

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.814);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999999;
`;

const Loader = styled.div`
  animation: rotate 2s linear infinite normal;
  height: 1.5rem;
  position: relative;
  width: 1.5rem;
`;

const Ball = styled.div`
  animation: move1 1s ease-out infinite alternate;
  background-color: #4DA8F9;
  border-radius: 50%;
  height: 100%;
  position: absolute;
  width: 100%;

  &:nth-of-type(2) {
   animation-name: move2;
  }

  &:nth-of-type(3) {
   animation-name: move3;
  }
`