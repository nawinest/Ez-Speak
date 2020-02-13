import React, { Component } from 'react';
import styled from "styled-components";

class EditProfile extends Component {


    state = {
        name: '',
        lname: '',
        deviceId: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleEditProfile = () => {
        const {name, lname, deviceId, email, password } = this.state
        const data = {
            dateOfBirth: '',
            device_id: deviceId,
            email: email,
            firstName: name,
            lastName: lname,
            password: password
        }
        this.props.handleUpdateUser(data)
        this.forceUpdate()
    }

    handleChange = (e, field) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidUpdate(previousProps, previousState) {
        if (this.props.user !== previousProps.user) {
            const user = this.props.user.user
            this.setState({
                name: user.first_name ?? '',
                lname: user.last_name ?? '',
                deviceId: user.device_id ?? '',
                email: user.email ?? '',
            })
        }
    }

    render() {
        let { title } = this.props
        return (
            <>
                <div>
                    <HeaderWrapper> <HeaderTitle> {title || `จัดการโปรไฟล์`} </HeaderTitle>
                        <ButtonEz startButton onClick={this.handleEditProfile}> บันทึกข้อมูล </ButtonEz>  </HeaderWrapper>
                    <hr></hr>
                    <InputGroupWrapper>
                        <InputGroup>
                            <InputTitle>
                                ชื่อ
                                </InputTitle>
                            <Input name="name" onChange={this.handleChange} value={this.state.name} placeholder={"ชื่อ"}></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputTitle>
                                นามสกุล
                                </InputTitle>
                            <Input name="lname" onChange={this.handleChange} value={this.state.lname} placeholder={"นามสกุล"}></Input>
                        </InputGroup>
                    </InputGroupWrapper>
                    <InputGroupWrapper>
                        <InputGroup>
                            <InputTitle>
                                รหัสผลิตภัณฑ์
                                </InputTitle>
                            <Input name="deviceId" onChange={this.handleChange} value={this.state.deviceId} placeholder={"รหัสผลิตภัณฑ์"}></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputTitle>
                                อีเมล
                                </InputTitle>
                            <Input name="email" onChange={this.handleChange} value={this.state.email} placeholder={"อีเมล"}></Input>
                        </InputGroup>
                    </InputGroupWrapper>
                    <InputGroupWrapper>
                        <InputGroup>
                            <InputTitle>
                                พาสเวิร์ด
                                </InputTitle>
                            <Input name="password" type="password" onChange={this.handleChange} value={this.state.password} placeholder={"พาสเวิร์ด"}></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputTitle>
                                ยืนยันพาสเวิร์ด
                                </InputTitle>
                            <Input name="confirmPassword" type="password" onChange={this.handleChange} value={this.state.confirmPassword} placeholder={"ยืนยันพาสเวิร์ด"}></Input>
                        </InputGroup>
                    </InputGroupWrapper>
                </div>
            </>
        )
    }
}

export default EditProfile;

const HeaderTitle = styled.h3`
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const InputTitle = styled.h6`
    font-weight: 400;
`;

const InputGroupWrapper = styled.div`
    display:flex;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const HeaderWrapper = styled.div`
    display:flex;
    width: 100%;

    & h3 {
        margin-bottom : none;
        margin-right: auto;
    }
`;

const Input = styled.input`
    padding-left: 0.35em;
    width: 100%;
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box; 
    height: 38px;
    font-weight: 300;
`

const TextAreaEz = styled.textarea`
    padding-left: 0.35em;
    width: 100%;
    height: 119px;
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box; 
    border-radius: 6px;
`


const InputGroup = styled.div`
    padding-right: 20px;
    flex: 0 0 50%;
    padding-bottom : 20px;
    @media (max-width: 768px) {
        padding-right: 0;
        flex: 0 0 100%;
        
    }
`

const ButtonEz = styled.button`
    border: none;
    font-family: Kanit;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    padding: 6px 30px;

    color: #FFFFFF;
    background: #4DA8F9;
    border-radius: 5px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 10px;
    }

`;

