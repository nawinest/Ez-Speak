import React from 'react';
import styled from "styled-components";
import { Container } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <Container>
        <WrapFooter>
            <LineView></LineView>
            <FooterContent>
                <p>ez<b>Speak</b></p>
                <span>© 2019 ezSpeak All rights reserved.</span>
            </FooterContent>
        </WrapFooter>
    </Container>
  );
}

const WrapFooter = styled.div`
    height: 42px;
`;

const FooterContent = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1em;
    font-size: 11px;
    color: #7A7A7A;
    & p {
        font-size: 18px;
        font-weight: 300;
        margin-right: auto;
        & b {
            font-weight: 500;
        }
    }
`;

const LineView = styled.div`
    height: 1px;
    width: 100%;
    background: #C2C2C2;
`;
export default Footer;