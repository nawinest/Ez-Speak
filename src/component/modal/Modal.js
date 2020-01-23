import React from "react";
import Constant from "../../Utility/Constant";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";
import EmailVerification from "./EmailVerification";
import InterestedSelection from "./InterestedSelection";
import LoginForm from "./LoginForm";

export default class Modal extends React.Component {

  state = {
    step: 1,
    name: "",
    loginEmail: "",
    loginPassword: "",
    email: "",
    password: "",
    productId: "",
    verifyValue: "",
    interestedList: []
  }

  nextStep = () => {
    const { step } = this.state

    if (step === 3) {
      //close modal 
      this.handleModal();
      //save into database
    }

    this.setState({
      step: step + 1
    })
  }

  handleModal = () => {
    this.props.handleModal()
    this.setState({
      step: 1,
      name: "",
      loginEmail: "",
      loginPassword: "",
      email: "",
      password: "",
      productId: "",
      verifyKey: ""
    })
  }

  handleChange = (e, field) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleInterestedList = (interestedList) => {
    this.setState({ interestedList: interestedList })
  }

  handleLogin = () => {

  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  render() {
    if (this.props.show) {
      document.body.style.overflow = 'hidden';
    }
    let component = <></>
    if (this.props.modalType === Constant.MODAL_SIGNUP_TYPE && this.props.show) {
      const { name, email, password, productId } = this.state
      const value = { name, email, password, productId }

      switch (this.state.step) {
        case 1:
          component = <RegisterForm
            handleChange={this.handleChange}
            value={value}
            nextStep={this.nextStep}
            handleModal={this.handleModal} />
          break;
        case 2:
          component = <EmailVerification
            handleChange={this.handleChange}
            value={value}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleModal={this.handleModal} />
          break;
        case 3:
          component = <InterestedSelection
            handleInterestedList={this.handleInterestedList}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleModal={this.handleModal} />
          break;
        default:
          component = <div>defualt</div>
          break;
      }
      return (
        <ModalWrapper>
          {component}
        </ModalWrapper>
      )
    } else if (this.props.modalType === Constant.MODAL_SIGNIN_TYPE && this.props.show) {
      const { loginEmail, LoginPassword } = this.state
      const value = { loginEmail, LoginPassword }
      component = <LoginForm
        value={value}
        handleModal={this.handleModal}
        handleChange={this.handleChange}
        handleLogin={this.handleLogin} />
      return (
        <ModalWrapper>
          {component}
        </ModalWrapper>
      )
    }

    return (
      null
    );
  }
}


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

