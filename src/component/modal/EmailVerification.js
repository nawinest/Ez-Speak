import React, { Component } from 'react';
import styled from "styled-components";
import backspace from '../../static_asset/backspace.svg';
import email_icon from '../../static_asset/email_icon.svg'
import InputWithTitle from '../InputWithTitle';

class EmailVerification extends Component {
    state = {}

    continue = e => {
        e.preventDefault();
        this.props.handleVerifyEmail()
    }

    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <EmailVerificationWrapper>
                <ModalMenuHeader>
                    <ImageContain onClick={this.goBack} iconMargin src={backspace} widthSize="24px" heightSize="24px" alt="backspace" />
                    <span>
                        ยืนยันอีเมลของคุณ !
                </span>

                    <CloseBtn onClick={this.props.handleModal}>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                        <span>&nbsp;</span>
                    </CloseBtn>

                </ModalMenuHeader>
                <Content>
                    <ImageContain src={email_icon} widthSize="30%" heightSize="auto" alt="backspace" />
                    <ContentDescription>เราได้ทำการส่งรหัสเพื่อยืนยันบัญชีไปยังอีเมลของคุณแล้ว กรุณานำรหัสที่ได้กรอกในช่องด้านล่างนี้</ContentDescription>
                </Content>

                <InputWithTitle title="รหัสยืนยัน" name="verifyCode" onChange={this.props.handleChange} value={this.props.value.verifyCode} />
                <ButtonEz onClick={this.continue}> ต่อไป </ButtonEz>
                <AlreadyHaveAccount>ยังไม่ได้รับรหัส? <span>ส่งอีเมลใหม่</span></AlreadyHaveAccount>
            </EmailVerificationWrapper>);
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

const ContentDescription = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin-top: 24.52px;

    color: #2D2D2D;
`;

const ImageContain = styled.img`
    width: ${props => props.widthSize};
    height: ${props => props.heightSize};

    margin-right: ${props => props.iconMargin ? '17px;' : '0px'}
    object-fit: contain;
`;

const Content = styled.div`
    margin-top: 13px;
    margin-bottom: 36px;
    text-align:center;

`;

export default EmailVerification;

const EmailVerificationWrapper = styled.div`
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