import React from 'react';
import styled from "styled-components";

function MenuItemComponent(props) {
    const {active, title} = props
    return (
        <Row active={active}>
            {active && <ActiveBar></ActiveBar>}
            <Title active={active}>{title}</Title>
        </Row>
    );
}

const Title = styled.span`
    font-size: 16;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: rgba(255,255,255,0.8);
    font-weight: 300;
    margin-left: 24px;

    ${props => props.active === true ? `color: rgba(255,255,255,1);font-weight: 500;`: ``}
`;

const Row = styled.div`
    height: 56px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 32px
    padding-right: 32px;
    
    &:hover {
        background: rgba(221,226,255, 0.08);
    }

    ${props => props.active === true ? `background: rgba(0,0,0, 0.08);`: ``}
`;

const ActiveBar = styled.div`
    height: 56px;
    width: 3px;
    background-color: #DDE2FF;
    position: absolute;
    left: 0;
`;

export default MenuItemComponent;
