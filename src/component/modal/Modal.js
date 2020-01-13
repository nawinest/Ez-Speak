import React from "react";
import Constant from "../../Utility/Constant";
import styled from "styled-components";
import InputWithTitle from "../InputWithTitle";

export default class Modal extends React.Component {
  render() {
    if(this.props.show){
      document.body.style.overflow = 'hidden';
    }
    if (this.props.modalType === Constant.MODAL_SIGNUP_TYPE && this.props.show) {
      return (
        <ModalWrapper>
          <RegisterWrapper>
            <ModalMenuHeader>
              <span>
                ลงทะเบียนได้ฟรี !
              </span>

              <CloseBtn onClick={this.props.handleModal}>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
              </CloseBtn>

            </ModalMenuHeader>

            <form>
              <InputWithTitle title="ชื่อจริง" />
              <InputWithTitle title="อีเมล" />
              <InputWithTitle title="รหัสผ่าน" />
              <InputWithTitle title="รหัสผลิตภัณฑ์หูฟัง (ถ้ามี)" />
              <ButtonEz type="submit" startButton>สมัครสมาชิก</ButtonEz>
            </form>

            <DescriptionInput>เมื่อกดสมัครสมาชิกถือว่าคุณได้ยอมรับ<span> กฏการใช้งาน </span>ของเรา</DescriptionInput>
            <LineView></LineView>
            <AlreadyHaveAccount>มีบัญชีอยู่แล้ว? <span>เข้าสู่ระบบ</span></AlreadyHaveAccount>
          </RegisterWrapper>
        </ModalWrapper>
      )
    }
    return (
      null
    );
  }
}

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

    & span {
      margin-right: auto;
      margin-bottom: 25px;
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

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    overflow-y: auto
    background: rgba(0, 0, 0, 0.79);

`;


const ButtonEz = styled.a`
    ${props => props.startButton && `
        color: #ffffff !important;
        background: #4DA8F9;
        margin: 6px 0px;
        padding: 0.5rem 2rem;
        width: 100%;
        text-align: center;
        border-radius: 5px;

        & :hover {
          text-decoration: none;
          color: #ffffff !important;
        }
    `}
`;