import React from 'react'
import styled from "styled-components";

const Brand = () => {
  return (
        <BrandText><span>ez</span>Speak</BrandText>
  )
}

export default Brand

const BrandText = styled.h2`
  margin: auto 0;
  margin-right: 1em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px
  color: #43BEF2;
  & span {
    color: #000000;
    font-weight: normal;
  }
`;