import React from 'react'
import styled from "styled-components";

const Loading = () => {
  document.body.style.overflow = 'hidden';
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);
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


const LoadText = styled.p`
    postion: relative;
    color: white;
    text-align: center;
    margin-top: 11em;
    margin-left: 1em;
    & span {
      margin-left: 0.3em;
      background: #49C2E9;
      border-radius: 5px;
      padding: 2px 10px;
      font-size: 0.8rem;
      font-weight: 300;
    }
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.974);
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
  background-color: #49C2E9;
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