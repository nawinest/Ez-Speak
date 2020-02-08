import React, { Component } from 'react';
import styled from "styled-components";

class AllCourse extends Component {


    state = {
        menu: [
            {
                id: 1,
                title: "ได้รับความนิยม",
                onClick: this.handleOnclickOrderCourse
            },
            {
                id: 2,
                title: "ล่าสุด",
                onClick: this.handleOnclickOrderCourse
            }
        ]
    }

    handleOnclickOrderCourse = () => {

    }


    componentDidMount() {

    }

    render() {
        return (
            <>
                <div>
                    <HeaderTitle>คอร์สทั้งหมดของคุณ </HeaderTitle>
                   
                    
                </div>
            </>
        )
    }
}


const HeaderTitle = styled.h3`
    font-weight: 300;
`;
const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

export default AllCourse;