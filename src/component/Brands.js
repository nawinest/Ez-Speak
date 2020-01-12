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
`;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;