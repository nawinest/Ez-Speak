import React, { Component } from 'react';
import styled from "styled-components";
import InputWithTitle from "../../component/InputWithTitle";

class LoginForm extends Component {
    state = {}

    handleLogin = e => {
        e.preventDefault();
        this.props.handleLogin();
    }

    render() {
        return (

            <RegisterWrapper>
                <ModalMenuHeader>
                    <span>
                        เข้าสู่ระบบ
                    </span>

                    <CloseBtn onClick={this.props.handleModal}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </CloseBtn>

                </ModalMenuHeader>

                <form>
                    <InputWithTitle title="อีเมล" name="loginEmail" onChange={this.props.handleChange} value={this.props.value.loginEmail} />
                    <InputWithTitle title="รหัสผ่าน" name="loginPassword" type="password" onChange={this.props.handleChange} value={this.props.value.loginPassword} />
                    <ButtonEz onClick={this.handleLogin}> เข้าสู่ระบบ </ButtonEz>
                </form>


                <DescriptionInput><span> ลืมรหัสผ่าน? </span></DescriptionInput>
                <LineView></LineView>
                <AlreadyHaveAccount>ไม่มีบัญชี? <span>สมัครสมาชิกที่นี่</span></AlreadyHaveAccount>
            </RegisterWrapper>

        );
    }
}

export default LoginForm;


const ButtonEz = styled.button`
  margin-top: 6px;
  height: 43px;
  width: 100%;
  border:none;
  color: white !important;
  cursor: pointer;
  background: #4DA8F9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;


const AlreadyHaveAccount = styled.div`
    margin-top: 20px;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #2D2D2D;
    text-align: center;

    & span {
      color: #4DA8F9;
      text-decoration: underline;
      cursor: pointer;
    }
`;

const LineView = styled.div`
    height: 1px;
    width: 100%;
    margin: 0 8px;
    background: #C2C2C2;
`;

const DescriptionInput = styled.p`
    margin: 16px 0px;
    width:100%;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    color: #2D2D2D;

    & span {
      color :#4DA8F9;
    }
`


const ModalMenuHeader = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 25px;

    & span {
      margin-right: auto;
    }
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
      width: 1.2rem;
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

const RegisterWrapper = styled.div`
    width: 35%;
    background: white;
    padding: 24px 27px 24px 20px;
    border-radius: 20px;
    position: absolute;
    margin: 67px 0px;
    left: 50%;
    transform: translate(-50%, 0%);

    @media (max-width: 769px) {
      width: 100%;
      height: 100%;
      margin: 0!important;
      border-radius: 0;
    }
`;