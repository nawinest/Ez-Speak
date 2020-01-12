import React from 'react'
import styled from "styled-components";

// import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    // <Image src="" alt="Company Logo" />
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

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;