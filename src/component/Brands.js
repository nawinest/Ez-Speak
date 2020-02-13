import React from 'react'
import styled from "styled-components";
import {
  Link
} from "react-router-dom";

const Brand = () => {

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #43BEF2;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #43BEF2;
    }
  `;

  return (
    <BrandText><StyledLink to="/"><span>ez</span>Speak</StyledLink></BrandText>
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
  & span {
    color: #000000;
    font-weight: normal;
  }
`;