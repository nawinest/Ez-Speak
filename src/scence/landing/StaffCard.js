import React, { Component } from 'react'
import styled from "styled-components";

class StaffCard extends Component {
    state = {}
    render() {
        return (
            <AuthorWrapper>
                <Author>
                    <AuthorImg alt="dev" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeXUrT_7jM89dyNslw5ndyBo2r9LAGjQSx4jEppjGtTSLOChFc" />
                    <AuthorContent>
                        <NameTitle>วิทยา รักการสอน</NameTitle>
                        <RoleTitle>ผู้ดูแลหลักสูตร</RoleTitle>
                    </AuthorContent>
                </Author>
            </AuthorWrapper>
        );
    }
}

const AuthorWrapper = styled.div`
    padding: 1em;
    
`

const Author = styled.div`
    position: relative;
    border-radius: 1em;
    height: 420px;
    border-radius: 1em;
    overflow: hidden;
`

const AuthorImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const AuthorContent = styled.div`
    z-index: 100;
    color:white;
    position: absolute;
    bottom: 0px;
    left: 16px;
`

const NameTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    margin: 0px;
`;

const RoleTitle = styled.p`
    font-weight: 300;
`;

export default StaffCard;