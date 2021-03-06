import React from 'react'
import styled from "styled-components";
import { animated } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Brand from "./Brands";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Constant from '../Utility/Constant';
import { connect } from 'react-redux'
import Dropdown from './Dropdown/Dropdown';

const Navsbar = (props) => {


    const handleDropdown = (id) => {
        if (id === 1) {
            props.handleLogout()
        } else if (id === 0) {
            window.location.href = '/user/profile'
        }
    }

    const menus = [
        {
            id: 0,
            title: 'แก้ไขข้อมูลส่วนตัว',
            key: 'edit_profile'
        },
        {
            id: 1,
            title: 'ออกจากระบบ',
            key: 'logout'
        }
    ]

    const handleRegister = () => {
        props.handleModal(Constant.MODAL_SIGNUP_TYPE)
    }

    const handleLoggin = () => {
        props.handleModal(Constant.MODAL_SIGNIN_TYPE)
    }

    const { isAuthenticated, user } = props.user
    let titleMainMenu = ""
    if (user !== null) {
        titleMainMenu = "คุณ " + user.first_name
    }
    

    let buttonGroup = <></>
    if (!isAuthenticated) {
        buttonGroup =
            <>
                <ButtonEz normal href="/">คอร์สเรียนทั้งหมด</ButtonEz>
                <ButtonEz normal onClick={handleLoggin}>เข้าสู่ระบบ</ButtonEz>
                <ButtonEz startButton onClick={handleRegister}>เริ่มต้นใช้งาน</ButtonEz>
            </>
    } else {
        buttonGroup =
            <>
                <ButtonEz normal href="/">คอร์สเรียนทั้งหมด</ButtonEz>
                <ButtonEz>
                    <Dropdown type="main" collapse={false} handleDropdown={handleDropdown} title={titleMainMenu} list={menus} />
                </ButtonEz>

            </>
    }


    return (
        <>
            <NavBar>
                <FlexContainer>
                    <Brand />
                    <FromSearch>
                        <InputEz name="" placeholder="คุณอยากเรียนอะไร?" />
                        <ButtonSearch type="submit"> <FontAwesomeIcon icon={faSearch} /> </ButtonSearch>
                    </FromSearch>
                    <NavLinks>
                        {buttonGroup}
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu
                handleDropdown={handleDropdown}
                title={titleMainMenu}
                list={menus}
                isAuthenticated={isAuthenticated}
                user={user}
                handleModal={props.handleModal}
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}


const mapStateToProps = (state) => ({
    user: state.user,
    globalState: state.globalState
})

export default connect(mapStateToProps, {})(Navsbar);

const NavBar = styled(animated.nav)`
  width:100%;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  height: 4.2em;
`;

const NavLinks = styled(animated.ul)`
    display: flex;
    justify-self: end;
    align-items: center;
    list-style-type: none;
    margin: auto 0;
`;


const ButtonEz = styled.a`
    ${props => props.startButton && `
        color: #ffffff!important;
        background: #4DA8F9;
        margin-left: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 5px;
    `}

    ${props => props.normal && `
        color: black;
        text-transform: uppercase;
        font-weight: 300;
        margin: 0 1rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            text-decoration: none;
        }
        
    `}

    @media (max-width: 768px) {
        display: none;
    }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;

const FromSearch = styled.form`
    flex: 3;
    max-width: 350px;
    margin-right: auto;
    display: flex;
    @media (max-width: 999px) {
        display: none
    }
`;

const InputEz = styled.input`
    background: #F4F4F4;
    flex: 1;
    color: black;
    border: none;
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
    padding: 8px;
    font-size: 14px;
    border: none;
    padding-left: 20px;
`;


const ButtonSearch = styled.button`
    background: #F4F4F4;
    border: none;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    cursor: pointer;
`;