import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CollapseMenuItem from './CollapsMenuItem';
import Constant from '../Utility/Constant';
import Dropdown from './Dropdown/Dropdown';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  const handleModalRegister = () => {
    props.handleModal(Constant.MODAL_SIGNUP_TYPE)
  }

  const handleModalLogin = () => {
    props.handleModal(Constant.MODAL_SIGNIN_TYPE)
  }

  let buttonGroup = <></>
  if (!props.isAuthenticated) {
    buttonGroup =
      <>
        <CollapseMenuBottom>
          <ButtonEz normal onClick={handleModalLogin}>เข้าสู่ระบบ</ButtonEz>
          <ButtonEz startButton onClick={handleModalRegister}>เริ่มต้นใช้งาน</ButtonEz>
        </CollapseMenuBottom>
      </>
  } else {
    buttonGroup =
      <>
        <ButtonEz>
          <Dropdown collapse={true} handleDropdown={props.handleDropdown} title={props.title} list={props.list} />
        </ButtonEz>
      </>
  }

  if (props.navbarState === true) {
    return (
      <Wrapper>
        <CollapseWrapper style={{
          transform: open.interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          }).interpolate(openValue => `translate3d(0,0, ${openValue}px`),
        }}
        >
          <CollapseMenuHeader>
            <span>
              เมนู
            </span>

            <CloseBtn onClick={props.handleNavbar}>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
            </CloseBtn>

          </CollapseMenuHeader>
          <NavLinksWrapper>
            <NavLinks onClick={props.handleNavbar}>
              <li><CollapseMenuItem menuTitle={"คอร์สเรียนทั้งหมด"} /></li>
            </NavLinks>
          </NavLinksWrapper>
          {buttonGroup}
        </CollapseWrapper>
      </Wrapper>
    );
  }
  return null;
};

export default CollapseMenu;


const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
`;
const CollapseMenuBottom = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1em;
`;

const ButtonEz = styled.a`
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    ${props => props.startButton && `
        color: #ffffff !important;
        flex: 0 0 65%;
        background: #4DA8F9;
        padding: 0.5rem 1.7rem;
        border-radius: 5px;
    `}

    ${props => props.normal && `
        color: black;
        flex: 0 0 35%;
        text-transform: uppercase;
        font-weight: 300;
        transition: all 300ms linear 0s;
        text-decoration: none;
        padding: 0.5rem 0rem;
        cursor: pointer;
        &:hover {
            text-decoration: none;
        }
    `}
`;

const NavLinksWrapper = styled.div`
    width:100%;
    margin-bottom: auto;
`;

const CloseBtn = styled.button`
    position: relative;
    background: none;
    border:none;
    cursor: pointer;
    display: block;
    & span {
      background: #615F5F;
      display: block;
      position: relative;
      width: 1.6rem;
      height: .1rem;
      margin-bottom: 0.6rem;
      transition: all ease-in-out 0.2s;
    }
    span:nth-child(2) {
        opacity: 0;
      }
    span:nth-child(3) {
      transform: rotate(45deg);
      top: -11px;
    }
    span:nth-child(1) {
      transform: rotate(-45deg);
      top: 11px;
    }

`;

const CollapseMenuHeader = styled.div`
    padding: 2rem 1rem 0rem 2rem;
    display:flex;

    & span {
      margin-right: auto
    }
`;

const CollapseWrapper = styled(animated.div)`
  background: white;
  box-shadow: 20px 20px 20px 10px black;
  position: fixed;
  top: 0;
  right: 0;
  display:flex;
  flex-direction: column;
  width: 264px;
  height: 100vh;
  z-index: 999999;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  & li {
    transition: all 300ms linear 0s;
    cursor: pointer;
    padding: 0.2rem 0rem;
  }
`;

