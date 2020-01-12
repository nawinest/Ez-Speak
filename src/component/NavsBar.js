import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Brand from "./Brands";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navsbar = (props) => {
    //   const barAnimation = useSpring({
    //     from: { transform: 'translate3d(0, -10rem, 0)' },
    //     transform: 'translate3d(0, 0, 0)',
    //   });

    //   const linkAnimation = useSpring({
    //     from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    //     to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    //     delay: 800,
    //     config: config.wobbly,
    //   });

    return (
        <>
            {/* <NavBar style={barAnimation}> */}
            <NavBar>
                <FlexContainer>
                    <Brand />
                    <Searchform>
                        <InputEz name="" placeholder="คุณอยากเรียนอะไร?" />
                        <ButtonSearch type="submit"> <FontAwesomeIcon icon={faSearch} /> </ButtonSearch>
                    </Searchform>
                    {/* <NavLinks style={linkAnimation}> */}
                    <NavLinks>
                        <ButtonEz normal href="/">คอร์สเรียน</ButtonEz>
                        <ButtonEz normal href="/">เข้าสู่ระบบ</ButtonEz>
                        <ButtonEz startButton href="/">เริ่มต้นใช้งาน</ButtonEz>
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
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
            />
        </>
    )
}

export default Navsbar

const NavBar = styled(animated.nav)`
  width:100%;
`;

const Searchform = styled.form`
    flex: 3;
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
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
`;


const ButtonEz = styled.a`
    ${props => props.startButton && `
        color: #ffffff;
        background: #4DA8F9;
        margin-left: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 5px;
        @media (max-width: 768px) {
            display: none;
        }
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
        @media (max-width: 768px) {
            display: none;
        }
    `}
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;

const InputEz = styled.input`
    background: #F4F4F4;
    color: #;
    border: none;
    font-size: 1em;
    width: 75%;
    padding: 0.6rem;
    border-top-left-radius: 10em;
    border-bottom-left-radius: 10em;
    @media (max-width: 1000px) {
        display: none;
    }
`;


const ButtonSearch = styled.button`
    background: #F4F4F4;
    border: none;
    width: 40px;
    padding: 0.6rem;
    font-size: 1em;
    border-top-right-radius: 10em;
    border-bottom-right-radius: 10em;
    @media (max-width: 1000px) {
        display: none;
    }
`;
