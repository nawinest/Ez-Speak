import React from 'react';
import styled from 'styled-components';

const CollapseMenuItem = (props) => {

return (  
    <CollapseMenu href="/">
        {props.menuTitle}
    </CollapseMenu>  
)   ;
};

const CollapseMenu = styled.a`
    color: #2D2D2D;
    font-size: 14px;
    font-weight: 200;
    cursor: pointer;
`

export default CollapseMenuItem;
