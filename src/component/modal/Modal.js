import React from "react";
import Constant from "../../Utility/Constant";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";
import EmailVerification from "./EmailVerification";
import InterestedSelection from "./InterestedSelection";
import LoginForm from "./LoginForm";
import { register } from '../../actions/user'
import { connect } from 'react-redux'
import Loading from "../Alert/Loading";
import Swal from 'sweetalert2'

class Modal extends React.Component {
	state = {
		step: 1,
		username: "",
		loginEmail: "",
		loginPassword: "",
		email: "",
		password: "",
		productId: "",
		verifyValue: "",
		interestedList: [],
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
			username: "",
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

	handleRegister = () => {
		const { username, email, password } = this.state
		this.props.register(username, password, email, this.showErrorDialog, this.nextStep)
	}

	showErrorDialog = () => {
		let timerInterval
		Swal.fire({
			icon: 'error',
			title: 'ขออภัย มีข้อผิดพลาดกับทางระบบ',
			html: 'การแจ้งเตือนจะปิดอัตโนมัติใน <b><b> วินาที',
			timer: 2000,
			timerProgressBar: true,
			showCancelButton: false,
			showConfirmButton: false,
  			showCloseButton: false,
			onBeforeOpen: () => {
				timerInterval = setInterval(() => {
					const content = Swal.getContent()
					if (content) {
						const b = content.querySelector('b')
						if (b) {
							b.textContent = parseInt(Swal.getTimerLeft() / 1000) + 1
						}
					}
				}, 100)
			},
			onClose: () => {
				clearInterval(timerInterval)
			}
		})
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
			const { username, email, password, productId } = this.state
			const value = { username, email, password, productId }

			switch (this.state.step) {
				case 1:
					component = <RegisterForm
						handleRegister={this.handleRegister}
						handleChange={this.handleChange}
						value={value}
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
					{this.props.globalState.loading && <Loading />}
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
					{this.props.globalState.loading && <Loading />}
					{component}
				</ModalWrapper>
			)
		}
		return (
			null
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	globalState: state.globalState
})

export default connect(mapStateToProps, { register })(Modal);


const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    overflow-y: auto
    background: rgba(0, 0, 0, 0.79);
`;

