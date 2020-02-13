import React from 'react';
import styled from "styled-components";

function LogoComponent() {
    return (
        <Row>
            <span> EzSpeak</span>
        </Row>
    );
}

const Row = styled.div`
    width: 100%;
    display: flex;
    margin-left: 32px;
    margin-right: 32px;
`;

export default LogoComponent;
