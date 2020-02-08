import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../landing/Footer';

import { connect } from 'react-redux'
import { } from '../../actions/landing'
import ContainerEz from '../../component/ContainerEz';
import AllCourse from './manament_page/AllCourse';
import AddCourse from './manament_page/AddCourse';


class ManangementCoursePage extends Component {

    //show -> index of menu 
    state = {
        show: 2
    }

    item = [
        {
            id: 1,
            title: "คอร์สเรียน"
        },
        {
            id: 2,
            title: "สร้างคอร์สใหม่"
        },
        {
            id: 3,
            title: "ประวัติการสอน"
        },
        {
            id: 4,
            title: "รายได้จากการสอน"
        },
    ]

    componentDidMount() {

    }

    handleChangeMenu = (index) => {
        this.setState({ show: index })
    }

    render() {

        const listMenu = this.item.map((item, index) => {
            if (item.id === this.state.show) {
                return (
                    <LeftMenuLi key={index} selected onClick={() => this.handleChangeMenu(item.id)}> {item.title} </LeftMenuLi>
                )
            }
            return (
                <LeftMenuLi key={index} onClick={() => this.handleChangeMenu(item.id)}> {item.title} </LeftMenuLi>
            )
        })
        return (
            <>
                <ContainerEz>
                    <ManangementWrapper>
                        <LeftMenu>
                            <HeaderTitle>เมนูจัดการ</HeaderTitle>
                            <ul>
                                {listMenu}
                            </ul>
                        </LeftMenu>
                        <RightMenu>
                            {this.state.show === 1 &&
                                <AllCourse />
                            }
                            {this.state.show === 2 &&
                                <AddCourse />
                            }
                        </RightMenu>
                    </ManangementWrapper>
                </ContainerEz>
                <SectionWrapper>
                    <Footer />
                </SectionWrapper>
            </>
        )
    }
}

const HeaderTitle = styled.h3`
    font-weight: 300;
`;

const LeftMenuLi = styled.li`
    list-style: none;
    padding: 15px 0;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #2D2D2D;
    ${props => props.selected && `color: #4DA8F9;font-weight: 500;`}
`;

const SectionWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

const ManangementWrapper = styled.div`
    display: flex;
    width: 100%;
    padding-top: 26px;
`;

const LeftMenu = styled.div`
    flex: 0 0 20%;
    
`;

const RightMenu = styled.div`
    flex: 0 0 80%;
`;


const mapStateToProps = (state) => ({
    landing: state.landing,
})

export default connect(mapStateToProps, {})(ManangementCoursePage);